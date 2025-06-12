import "./globals.css";

export const metadata = {
  title: "Valentin Massonniere",
  description: "Valentin Massonniere Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
