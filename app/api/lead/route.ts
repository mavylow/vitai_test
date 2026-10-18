import { NextResponse } from "next/server";
import { leadSchema, formDataToLead } from "@utils/zod";
import { Pool } from "@neondatabase/serverless";

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

export async function POST(request: Request) {
  try {
    let inputData;
    const contentType = request.headers.get("content-type") || "";

    if (contentType.includes("application/json")) {
      inputData = await request.json();
    } else {
      const formData = await request.formData();
      inputData = formDataToLead(formData);
    }

    const validationResult = leadSchema.safeParse(inputData);

    if (!validationResult.success) {
      return NextResponse.json(
        { errors: validationResult.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    if (data.website) {
      return NextResponse.json({ success: true });
    }

    const query = `
      INSERT INTO leads (name, phone, request_type, products, receiving, address, comment, consent, website) 
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) 
      RETURNING id;
    `;

    const values = [
      data.name,
      data.phone,
      data.requestType,
      data.products,
      data.receiving,
      data.address || null,
      data.comment || null,
      data.consent,
      data.website || null,
    ];

    const result = await pool.query(query, values);
    const leadId = result.rows[0]?.id;

    return NextResponse.json({ success: true, id: leadId }, { status: 201 });
  } catch (error) {
    console.error("Failed to create lead:", error);
    return NextResponse.json(
      { error: "Не удалось сохранить заявку" },
      { status: 500 }
    );
  }
}
