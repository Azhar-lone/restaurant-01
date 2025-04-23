import { HeartIcon } from "lucide-react";

const LIMIT = 100;
const FeaturedSection = () => {
  return (
    <section className="py-16 px-8  ">
      <h3 className="text-center text-3xl text-primary mb-8">
        Featured Flavours
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 ">
        {cards.map((card: CardType, index: number) => (
          <div className="bg-background p-4 rounded shadow" key={index}>
            <img
              src={card.image}
              alt={card.title}
              className="mx-auto w-24 h-24 rounded-full shadow mb-4"
            />
            <h1 className="text-center font-bold text-lg">{card.title}</h1>
            <p className="text-center text-sm text-foreground/80  my-2">
              {card.description.length > LIMIT
                ? card.description.slice(0, LIMIT) + " ...more"
                : card.description}
            </p>
            <div className="flex justify-between ">
              <span className="font-semibold">${card.price}</span>
              <HeartIcon />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedSection;

interface CardType {
  image: string;
  title: string;
  description: string;
  price: number;
}

const cards: CardType[] = [
  {
    image: "/images/image2.png",
    title: "Beef Delight Burger",
    description:
      "Grilled twin beef patty with bacon, cheese and fresh ingredients creating a delightful experience.",
    price: 9.99,
  },
  {
    image: "/images/image3.png",
    title: "Chicken Cutlet with fries",
    description:
      "A deep fried chicken cutlet with crispy french fries and salad on the side",
    price: 3.99,
  },
  {
    image: "/images/image4.png",
    title: "Big Beef Pizza",
    description:
      "A deep fried chicken cutlet with crispy french fries and salad on the side",
    price: 4.99,
  },
  {
    image: "/images/image5.png",
    title: "Chicken Tikka and Roast",
    description:
      "A deep fried chicken cutlet with crispy french fries and salad on the side",
    price: 5.99,
  },
];
