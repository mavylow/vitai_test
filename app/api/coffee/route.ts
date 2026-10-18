import { NextResponse } from "next/server";
import { getProducts } from "@utils/api";

export async function GET() {
  try {
    const products = await getProducts();

    return NextResponse.json(
      { products },
      {
        headers: {
          "Cache-Control":
            "public, s-maxage=3600, stale-while-revalidate=86400",
        },
      }
    );
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return NextResponse.json(
      { error: "Не удалось загрузить каталог" },
      { status: 500 }
    );
  }
}
