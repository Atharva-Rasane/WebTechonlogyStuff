import React from 'react'

const ProductCard = ({imgurl, ptitle, pcategory, pprice, pdesc}) => {
  return (
    <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                    <a href="/product">
                        <img class="rounded-lg sm:rounded-none sm:rounded-l-lg object-contain h-30 w-30" src={imgurl} alt="Bonnie Avatar"/>
                    </a>
                    <div class="p-5">
                        <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                            <a href="/product">{ptitle}</a>
                        </h3>
                        <span class="text-gray-500 dark:text-gray-400">{pcategory}</span>
                        
                        <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                            <a href="/product">${pprice}</a>
                        </h3>
                        <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">{pdesc}</p>
                        
                    </div>
    </div> 
  )
}

export default ProductCard