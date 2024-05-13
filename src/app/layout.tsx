import type { Metadata } from "next";
import "@/src/sass/globals.scss";

export const metadata: Metadata = {
  title: "Auth",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
