import Image from "next/image";
import Script from 'next/script'
import Navbar from "../components/navbar";
import Products from "@/components/products";
import FAQ from "@/components/faq";
import Footer from "../components/footer";
import History from "@/components/history";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Products />
      <FAQ />
      <Footer />

      <History />
    </div>
  );
}
