import Footer from "@/components/Footer";

export const metadata = {
  title: "Anomali99 | About",
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
