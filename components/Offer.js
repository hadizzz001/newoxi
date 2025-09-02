'use client';
import Marquee from 'react-fast-marquee';

const NewsTicker = () => {
  // Static sentences about offers
  const textItems = [
    "Big Summer Offer – Up to 50% OFF",
    "Buy 1 Get 1 Free on Selected Items",
    "Free Delivery on Orders Above $50",
    "Limited Time Flash Sale – Hurry",
    "Exclusive Member Discounts Available",
    "Special Weekend Offers Just for You",
    "Best Price Guarantee on All Products",
  ];

  // duplicate array to make continuous loop effect
  const loopedText = [...textItems, ...textItems];

  return (
    <div className="flex justify-center items-center w-full overflow-hidden">
      <div
        className="bg-[#4c4f46] text-white w-full overflow-hidden p-3"
        id="newSlider"
      >
        <Marquee speed={70} gradient={false} pauseOnHover={true} direction="left">
          {loopedText.map((text, index) => (
            <div
              key={index}
              className="mx-6   flex items-center overflow-hidden myofferslider"
            >
              {text}
              <span className="mx-6">ㆍ</span>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default NewsTicker;
