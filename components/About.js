'use client';

import { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function ShopTheLook() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [products, setProducts] = useState([]);
  const router = useRouter();

  const firstColImage =
    'https://res.cloudinary.com/dusvquybw/image/upload/v1756155411/white-medical-bandage-marble-table_tuc32m.webp';

  // Fetch products and pick random 10
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('/api/products');
        const data = await res.json();
        // Shuffle array and pick 10 items
        const shuffled = data.sort(() => 0.5 - Math.random());
        setProducts(shuffled.slice(0, 10));
      } catch (err) {
        console.error('Failed to fetch products:', err);
      }
    };
    fetchProducts();
  }, []);

  return (
    <section className="py-10">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold mb-6">Shop the look</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[70px]">
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
              {products.map((product) => (
                <SwiperSlide key={product._id}>
                  <div
                    className="cursor-pointer"
                    onClick={() => router.push(`/product?id=${product._id}`)}
                  >
                    <img
                      src={product.images[0]}
                      alt={product.title}
                      className="object-cover w-[350px] aspect-square rounded-[10px] mx-auto"
                    />
                    <div className="mt-4 text-center">
                      <h3 className="text-xl font-semibold">{product.title}</h3>
                      <p className="text-lg text-gray-700 mt-1">${product.price}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Arrows */}
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
