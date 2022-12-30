import Head from "./head";
import "../styles/dist.css";
import Navigation from "ui/Navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <Head />
      <body>
        <Navigation />
        <div>{children}</div>
      </body>
    </html>
  );
}
