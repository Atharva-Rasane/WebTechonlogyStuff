import CheckOut from "@/components/CheckOut";
import Hero from "@/components/Hero";
import OrderPlaced from "@/components/OrderPlaced";
import Product from "@/components/Product";
import ProductCard from "@/components/ProductCard";
import Image from "next/image";

export default function Home({ params }) {
    const { price } = params;
  return (
    <div>
        <Hero></Hero>
        <center>
        <br></br>
        <OrderPlaced price={price}></OrderPlaced>
        </center>
    </div>
  );
}
