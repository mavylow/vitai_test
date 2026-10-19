import { Product } from "@/app/utils/types";
import Image from "next/image";
import ButtonLink from "../Button";
import "./style.css";

function CoffeeCard({
  image,
  imageAlt,
  name,
  description,
  volume,
  price,
}: Product) {
  return (
    <li className="coffee-card">
      <Image
        src={image}
        width={250}
        height={250}
        alt={imageAlt}
        loading="eager"
      />
      <div className="coffee-name-price">
        <h3>{name}</h3>
        <p className="coffee-card-price">{price} BYN</p>
      </div>

      <p className="coffee-card-description">{description}</p>
      <div className="coffee-card-meta">
        <p>{volume}</p>
        <ButtonLink
          href="#order"
          text="Заказать"
          aria-label={`Заказать: ${name}`}
        />
      </div>
    </li>
  );
}
export default CoffeeCard;
