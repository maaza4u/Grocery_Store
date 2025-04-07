import React, { useState, useEffect } from "react";
import { useAppContext } from "../context/AppContext";
import ProductCard from "../components/ProductCard";

const AllProduct = () => {
  const { products, searchQuary } = useAppContext();
  const [filteredProduct, setFilterdProduct] = useState([]);

  useEffect(() => {
    if (searchQuary.length > 0) {
      setFilterdProduct(
        products.filter((product) =>
          product.name.toLowerCase().includes(searchQuary.toLowerCase())
        )
      );
    } else {
      setFilterdProduct(products);
    }
  }, [products, searchQuary]);

  return (
    <div className=" mt-16 flex flex-col gap-4 container mx-auto px-4 ">
      <div className="flex  flex-col items-end w-max">
        <p className="text-2xl font-medium uppercase">All Products</p>
        <div className="w-16 h-0.5 bg-primary rounded-full  "></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:gap-6 gap-3 mt-6 mb-16 ">
        {filteredProduct
          .filter((product) => product.inStock)
          .map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
        
    </div>
  );
};

export default AllProduct;
 