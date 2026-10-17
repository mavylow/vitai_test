import { Product } from "./types";

export const products: Product[] = [
  {
    id: "irgacheffe",
    name: "Эфиопия Иргачеффе",
    description: "цветочный, бергамот, светлая обжарка",
    volume: "250 г",
    price: 32,
    image: "/coffee_pack1.jpg",
    imageAlt: "Пачка кофе Эфиопия Иргачеффе",
  },
  {
    id: "huila",
    name: "Колумбия Уила",
    description: "карамель, красное яблоко",
    volume: "250 г",
    price: 29,
    image: "/coffee_pack2.jpg",
    imageAlt: "Пачка кофе Колумбия Уила",
  },
  {
    id: "cerrado",
    name: "Бразилия Серрадо",
    description: "орех, шоколад, под эспрессо",
    volume: "250 г",
    price: 26,
    image: "/coffee_pack3.jpg",
    imageAlt: "Пачка кофе Бразилия Серрадо",
  },
  {
    id: "drip",
    name: "Дрип-пакеты, ассорти",
    description: "кофе, который заваривается прямо в чашке",
    volume: "10 штук",
    price: 18,
    image: "/coffee_pack4.jpg",
    imageAlt: "Ассорти дрип-пакетов",
  },
];
