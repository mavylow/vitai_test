"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { products } from "../../utils/const";
import { leadSchema, type Lead, type LeadInput } from "@utils/zod";
import "./style.css";

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="field-error">
      {message}
    </p>
  );
}

function Form() {
  const [sent, setSent] = useState(false);
  const [duplicate, setDuplicate] = useState(false);

  const submittingRef = useRef(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<LeadInput, unknown, Lead>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      name: "",
      phone: "",
      requestType: "subscription",
      products: [],
      receiving: "delivery",
      address: "",
      comment: "",
      consent: false,
      website: "",
    },
  });

  const describedBy = (field: keyof LeadInput, extraId?: string) =>
    [extraId, errors[field] ? `${field}-error` : undefined]
      .filter(Boolean)
      .join(" ") || undefined;

  const onSubmit = async (data: Lead) => {
    if (submittingRef.current) return;
    submittingRef.current = true;

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      // Сервер проверил по той же схеме и не согласился
      if (response.status === 400) {
        const { errors: serverErrors = {} } = (await response.json()) as {
          errors?: Record<string, string[] | undefined>;
        };
        Object.entries(serverErrors).forEach(([field, messages], index) => {
          setError(
            field as keyof LeadInput,
            { type: "server", message: messages?.[0] },
            { shouldFocus: index === 0 }
          );
        });
        return;
      }

      if (!response.ok) throw new Error("Request failed");

      const result = (await response.json()) as { duplicate?: boolean };
      setDuplicate(Boolean(result.duplicate));
      setSent(true);
    } catch {
      setError("root.serverError", {
        type: "network",
        message:
          "Не получилось отправить заявку. Попробуйте ещё раз или позвоните нам.",
      });
    } finally {
      submittingRef.current = false;
    }
  };

  return (
    <form
      action="/api/lead"
      method="post"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
    >
      {sent ? (
        <p role="status" className="form-status">
          {duplicate
            ? "Заявка с этим номером уже принята. Мы перезвоним в рабочее время."
            : "Спасибо! Мы перезвоним в рабочее время и всё оформим."}
        </p>
      ) : (
        <>
          <div>
            <label htmlFor="name">Имя</label>
            <input
              id="name"
              type="text"
              autoComplete="name"
              required
              aria-invalid={errors.name ? true : undefined}
              aria-describedby={describedBy("name")}
              {...register("name")}
            />
            <FieldError id="name-error" message={errors.name?.message} />
          </div>

          <div>
            <label htmlFor="phone">Телефон</label>
            <input
              id="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder="+375 29 123-45-67"
              required
              aria-invalid={errors.phone ? true : undefined}
              aria-describedby={describedBy("phone")}
              {...register("phone")}
            />
            <FieldError id="phone-error" message={errors.phone?.message} />
          </div>

          <fieldset aria-describedby={describedBy("requestType")}>
            <legend>Что хотите оформить</legend>

            <label>
              <input
                type="radio"
                value="subscription"
                defaultChecked
                {...register("requestType", { deps: ["products"] })}
              />
              Подписку
            </label>
            <label>
              <input
                type="radio"
                value="one-time"
                {...register("requestType", { deps: ["products"] })}
              />
              Разовый заказ
            </label>
            <FieldError
              id="requestType-error"
              message={errors.requestType?.message}
            />
          </fieldset>

          <fieldset aria-describedby={describedBy("products")}>
            <legend>Какой кофе</legend>
            {products.map((product) => (
              <label key={product.id}>
                <input
                  type="checkbox"
                  value={product.id}
                  {...register("products")}
                />
                {product.name}
              </label>
            ))}
            <label>
              <input type="checkbox" value="help" {...register("products")} />
              Не знаю, помогите выбрать
            </label>
            <FieldError
              id="products-error"
              message={
                errors.products?.message ?? errors.products?.root?.message
              }
            />
          </fieldset>

          <fieldset aria-describedby={describedBy("receiving")}>
            <legend>Как получить</legend>

            <label>
              <input
                type="radio"
                value="delivery"
                defaultChecked
                {...register("receiving", { deps: ["address"] })}
              />
              Доставка по Минску
            </label>
            <label>
              <input
                type="radio"
                value="pickup"
                {...register("receiving", { deps: ["address"] })}
              />
              Самовывоз
            </label>
            <FieldError
              id="receiving-error"
              message={errors.receiving?.message}
            />
          </fieldset>

          <div>
            <label htmlFor="address">Адрес доставки</label>
            <input
              id="address"
              type="text"
              autoComplete="street-address"
              aria-invalid={errors.address ? true : undefined}
              aria-describedby={describedBy("address", "address-hint")}
              {...register("address")}
            />
            <p id="address-hint">Нужен только для доставки.</p>
            <FieldError id="address-error" message={errors.address?.message} />
          </div>

          <div>
            <label htmlFor="comment">Комментарий</label>
            <textarea
              id="comment"
              rows={3}
              aria-invalid={errors.comment ? true : undefined}
              aria-describedby={describedBy("comment")}
              {...register("comment")}
            />
            <FieldError id="comment-error" message={errors.comment?.message} />
          </div>

          <div className="visually-hidden" aria-hidden="true">
            <label>
              Не заполняйте это поле
              <input
                type="text"
                tabIndex={-1}
                autoComplete="off"
                {...register("website")}
              />
            </label>
          </div>

          <label className="consent">
            <input
              type="checkbox"
              required
              aria-invalid={errors.consent ? true : undefined}
              aria-describedby={describedBy("consent")}
              {...register("consent")}
            />
            <span>
              Согласен на обработку персональных данных (
              <a href="/privacy">политика конфиденциальности</a>)
            </span>
          </label>
          <FieldError id="consent-error" message={errors.consent?.message} />

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Отправляем…" : "Отправить заявку"}
          </button>

          {errors.root?.serverError && (
            <p role="alert" className="form-status">
              {errors.root.serverError.message}
            </p>
          )}

          <p>Менеджер перезвонит в рабочее время.</p>
        </>
      )}
    </form>
  );
}

export default Form;
