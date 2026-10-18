import { z } from "zod";
import { products } from "@utils/const";

const HELP_ID = "help";
const PRODUCT_IDS = new Set<string>([...products.map((p) => p.id), HELP_ID]);

const DRIP_ID = "drip";
const SUBSCRIPTION_PACKS = 2;

export function normalizePhone(value: string): string | null {
  const digits = value.replace(/\D/g, "");

  let national: string;
  if (digits.startsWith("375") && digits.length === 12) {
    national = digits.slice(3);
  } else if (digits.startsWith("80") && digits.length === 11) {
    national = digits.slice(2);
  } else {
    return null;
  }

  return /^(25|29|33|44|17)\d{7}$/.test(national) ? `+375${national}` : null;
}

export const leadSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(2, "Введите имя")
      .max(60, "Имя слишком длинное"),

    phone: z
      .string()
      .trim()
      .refine(
        (value) => normalizePhone(value) !== null,
        "Введите белорусский номер, например +375 29 123-45-67"
      )
      .transform((value) => normalizePhone(value) as string),

    requestType: z.enum(["subscription", "one-time"]),

    products: z
      .array(
        z.string().refine((id) => PRODUCT_IDS.has(id), "Неизвестная позиция")
      )
      .min(1, "Выберите кофе или вариант «Не знаю, помогите выбрать»")
      .max(PRODUCT_IDS.size),

    receiving: z.enum(["delivery", "pickup"]),

    address: z.string().trim().max(200, "Адрес слишком длинный"),

    comment: z.string().trim().max(1000, "Не больше 1000 символов"),

    consent: z
      .boolean()
      .refine((value) => value, "Нужно согласие на обработку данных"),

    website: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.receiving === "delivery" && data.address.length < 5) {
      ctx.addIssue({
        code: "custom",
        path: ["address"],
        message: "Укажите адрес доставки по Минску",
      });
    }

    if (data.requestType === "subscription") {
      if (data.products.includes(DRIP_ID)) {
        ctx.addIssue({
          code: "custom",
          path: ["products"],
          message: "Дрип-пакеты не входят в подписку: в ней 2 пачки по 250 г",
        });
      }

      const sorts = data.products.filter(
        (id) => id !== HELP_ID && id !== DRIP_ID
      );
      if (sorts.length > SUBSCRIPTION_PACKS) {
        ctx.addIssue({
          code: "custom",
          path: ["products"],
          message: "В подписке 2 пачки, выберите не больше двух сортов",
        });
      }
    }
  });

export type LeadInput = z.input<typeof leadSchema>;
export type Lead = z.output<typeof leadSchema>;

export function formDataToLead(formData: FormData): LeadInput {
  const text = (key: string) => String(formData.get(key) ?? "");

  return {
    name: text("name"),
    phone: text("phone"),
    requestType: text("requestType") as LeadInput["requestType"],
    products: formData.getAll("products").map(String),
    receiving: text("receiving") as LeadInput["receiving"],
    address: text("address"),
    comment: text("comment"),
    consent: formData.get("consent") === "on",
    website: text("website"),
  };
}
