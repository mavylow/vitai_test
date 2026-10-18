import { Pool } from "@neondatabase/serverless";
import type { Product } from "./types";

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

export async function getProducts(): Promise<Product[]> {
  const query = `
    SELECT
      id,
      name,
      description,
      volume,
      price::float8 AS price,
      image,
      image_alt AS "imageAlt"
    FROM products
    WHERE is_active
    ORDER BY sort_order, id;
  `;

  const result = await pool.query(query);
  return result.rows as Product[];
}
