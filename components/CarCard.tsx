"use client";

import { TempProps } from "../types";
import { motion } from "framer-motion";

interface CarCardProps {
  temp: TempProps;
}

const CarCard = ({ temp }: CarCardProps) => {
  const { _id, title, price, discount, images, category, description } = temp;

const shortDesc = description
  ? description.replace(/<[^>]*>/g, "").substring(0, 15) + "..."
  : "";


  return (
  <a href={`/product?id=${_id}`} >
    <motion.div 
      className=" "
    >
      {/* 1st Row - Image */}
      <div className="w-full h-[200px] overflow-hidden">
        <img
          src={images}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* 2nd Row - Title (left aligned) */}
      <div className="myProduct1   px-2  ">{title}</div>
 

      {/* 4th Row - Discount & Price (flex) */}
      <div className=" px-2   flex justify-between items-center">
        <span className=" text-gray-500 myP2">${price}</span> 
      </div>
    </motion.div>
    </a>
  );
};

export default CarCard;
