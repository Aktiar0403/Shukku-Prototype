import "./globals.css";

export const metadata = {
  title: "SHUKKU Prototype",
  description: "Two Souls. One Space. Infinite Connection."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
