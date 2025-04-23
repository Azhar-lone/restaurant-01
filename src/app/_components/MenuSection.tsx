import RatingStars from "@/components/myUi/Ratings";
import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";
import { HeartIcon, EyeIcon } from "lucide-react";
const MenuSection = () => {
  return (
    <section id="menu" className="py-16 px-8">
      <h3 className="text-center text-2xl  mb-4">Our Menu</h3>
      <h1 className="text-center text-3xl text-primary uppercase mb-8">
        Today&aposs Delights
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {dishes.map((dish: DishCardType, index: number) => (
          <div
            className="group relative bg-background rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105"
            key={index}
          >
            <div className="relative">
              <Image
                src={dish.image}
                width={1024}
                height={1024}
                alt="Crispy Fried Chicken"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-background  opacity-0 group-hover:opacity-50 transition-opacity"></div>
              <div className="absolute top-3 left-3 flex space-x-2">
                <Button className="bg-background text-foreground  ">
                  <HeartIcon />
                </Button>
                <Button className="bg-background text-foreground">
                  <EyeIcon />
                </Button>
              </div>
            </div>
            <div className="p-4 text-center">
              <h3 className="text-xl font-bold text-sunset mb-2">
                {dish.title}
              </h3>
              <div className="flex gap-2 items-center py-3 justify-center">
                <RatingStars rating={dish.rating} />
                <h1 className="text-lg">{dish.rating}</h1>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-primary">
                  ${dish.price}
                </span>
                <Button>Add to Cart</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuSection;

interface DishCardType {
  image: string;
  title: string;
  rating: number;
  price: number;
}

const dishes: DishCardType[] = [
  {
    image: "/images/dishes/dish-1.png",
    price: 12.42,
    rating: 4.5,
    title: "Crispy Fried Chicken",
  },
  {
    image: "/images/dishes/dish-2.png",
    price: 12.42,
    rating: 5,
    title: "Crispy Fried Chicken",
  },
  {
    image: "/images/dishes/dish-3.png",
    price: 12.42,
    rating: 4,
    title: "Crispy Fried Chicken",
  },
  {
    image: "/images/dishes/dish-4.png",
    price: 12.42,
    rating: 3.5,
    title: "Crispy Fried Chicken",
  },
  {
    image: "/images/dishes/dish-5.png",
    price: 12.42,
    rating: 4.5,
    title: "Crispy Fried Chicken",
  },

  {
    image: "/images/dishes/dish-6.png",
    price: 12.42,
    rating: 4.5,
    title: "Crispy Fried Chicken",
  },
];
