import Footer from "@/components/Footer";

export const metadata = {
  title: "Anomali99 | Projects",
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
