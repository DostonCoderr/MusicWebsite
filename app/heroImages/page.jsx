"use client";
import { useState } from "react";
import useSWR from "swr";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Image from "next/image";

SwiperCore.use([Navigation, Pagination]);

const fetcher = (url) => fetch(url).then((res) => res.json());
const HeroImages = () => {
  // Fetch categories data
  const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/categories`, fetcher);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  if (error) return <div>Failed to load categories</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <section className="section py-5" id="images">
      <div className="container mx-auto">
        {data.map((category) => (
          <div key={category.id} style={{ marginBottom: "60px" }}>
            <h2 className="h2 text-center mb-8">{category.title}</h2>
            <Swiper
              onSwiper={setThumbsSwiper}
              modules={[FreeMode, Navigation, Thumbs]}
              breakpoints={{
                320: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                425: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
                1310: {
                  slidesPerView: 5,
                  spaceBetween: 30,
                },
              }}
              spaceBetween={20}
              slidesPerView={5}
              freeMode={true}
              watchSlidesProgress={true}
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
              }}
              className="thumb-slider"
            >
              {category.images.map((image) => (
                <SwiperSlide
                  key={category}
                  className="relative group overflow-hidden border-2 border-transparent w-[254px] rounded-[10px]"
                >
                  <div className="relative w-[195px] h-[195px] sm:w-[360px] sm:h-[360px] md:w-[240px] md:max-h-[240px] cursor-pointer">
                    <Image
                      src={image.url}
                      fill
                      priority
                      alt={`Image ${image.id}`}
                      className="object-contain group-hover:scale-105 transition-all duration-300"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroImages;
