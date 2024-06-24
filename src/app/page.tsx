import Image from "next/image";
import Homepage from "@/components/HomePage";
import ProductPage from "@/components/ProductPage";
import Navbar from "@/components/HomeHeader";

export default function Home() {
  return (
    <main className="px-5 md:px-24">
      <Navbar />
      <Homepage />
      <ProductPage />
    </main>
  );
}
