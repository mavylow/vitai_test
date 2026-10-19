import { Pool } from "@neondatabase/serverless";

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

export async function claimPhone(phone: string): Promise<boolean> {
  const result = await pool.query(
    `
      INSERT INTO lead_phone_claims (phone, expires_at)
      VALUES ($1, now() + interval '10 minutes')
      ON CONFLICT (phone) DO UPDATE
        SET expires_at = EXCLUDED.expires_at
        WHERE lead_phone_claims.expires_at <= now()
      RETURNING phone;
    `,
    [phone]
  );

  return result.rowCount === 1;
}

export async function releasePhone(phone: string): Promise<void> {
  await pool.query("DELETE FROM lead_phone_claims WHERE phone = $1", [phone]);
}
