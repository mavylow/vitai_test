import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Кварта — свежеобжаренный кофе в Минске",
  description:
    "Маленькая минская мастерская. Обжариваем по четвергам, развозим по пятницам: зерно приезжает к вам на 1–3 день после обжарки.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" className={roboto.variable}>
      <body>{children}</body>
    </html>
  );
}
