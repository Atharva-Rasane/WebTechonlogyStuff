import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
            <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Products</h2>
                <p class="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Explore the whole collection of Dresses</p>
            </div> 
            <div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
                <ProductCard 
                imgurl={'http://localhost:5000/Images/A03I7114_1634797130_520x%20(1).jpg' }
                ptitle={'The "Sunrise Soiree" Maxi Dress'}
                pcategory={"Dresses"}
                pprice={"75"}
                pdesc={'The "Midnight Mystery" Cocktail Dress: Little black ...'}
                ></ProductCard>
            </div>  
        </div>
      </section>
    </div>
  );
}
