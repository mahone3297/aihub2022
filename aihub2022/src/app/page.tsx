import Image from "next/image";
import Script from 'next/script'
import Navbar from "../components/navbar";
import Products from "@/components/products";
import FAQ from "@/components/faq";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Products />
      <FAQ />
      <Footer />
      
      <Script id = "history">
        console.log("## history");
        console.log("- 2024-06-27 convert to nextjs architecture");
        console.log("- 2024-04-23 start to develop");
      </Script>
    </div>
  );
}
