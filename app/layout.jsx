import "./globals.css";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "./nprogress.css";

export const metadata = {
  title: "Anomali99 Portofolio",
  description: "Nama saya Fatiq mahasiswa UIN Sunan Ampel Surabaya",
  author: "Anomali99",
  siteUrl: "https://www.anomali99.my.id",
  applicationName: "Anomali99",
  keywords: [
    "fatiq",
    "anomali99",
    "nur fatiq",
    "fatiq nur",
    "fatiq nur fatiq",
    "fatiq porto",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
