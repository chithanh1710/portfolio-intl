import { Inter } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "next-themes";
import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";

const inter = Inter({
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  manifest: "https://portfolio-thanhdev.vercel.app/manifest.json",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${inter.variable} relative antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
