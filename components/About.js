'use client';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function ShopTheLook() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const firstColImage =
    'https://res.cloudinary.com/dusvquybw/image/upload/v1756155411/white-medical-bandage-marble-table_tuc32m.webp';

  const swiperImage =
    'https://res.cloudinary.com/dusvquybw/image/upload/v1756141120/top-view-tensiometer-checking-blood-pressure_ihzwe3.webp';

  return (
    <section className="py-10">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-2xl font-bold mb-6">Shop the look</h2>

        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '70px' }}>
          {/* First Column */}
          <div className="h-[600px]">
            <img
              src={firstColImage}
              alt="Product"
              className="rounded-[10px] object-cover w-full h-full"
            />
          </div>

          {/* Second Column */}
          <div className="relative flex flex-col items-center px-6">
            <Swiper
              modules={[Navigation]}
              spaceBetween={10}
              slidesPerView={1}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              className="w-full"
            >
              <SwiperSlide>
                <img
                  src={swiperImage}
                  alt="Product 1"
                  className="object-cover w-[350px] aspect-square rounded-[10px] mx-auto"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={swiperImage}
                  alt="Product 2"
                  className="object-cover w-[350px] aspect-square rounded-[10px] mx-auto"
                />
              </SwiperSlide>
            </Swiper>

            {/* Title and Price Centered */}
            <div className="mt-4 text-center">
              <h3 className="text-xl font-semibold">Product Title</h3>
              <p className="text-lg text-gray-700 mt-1">$99.99</p>
            </div>

            {/* Minimal Lucide Arrows Under Title & Price */}
            <div className="flex gap-4 mt-3">
              <div
                ref={prevRef}
                className="cursor-pointer p-2 text-gray-600 hover:text-black"
              >
                <ArrowLeft size={24} />
              </div>
              <div
                ref={nextRef}
                className="cursor-pointer p-2 text-gray-600 hover:text-black"
              >
                <ArrowRight size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
