import React from "react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const AboutSinger = () => {
  return (
    <section className="section">
      <div>
        <video
          autoPlay
          loop
          muted
          className="top-0 left-0 h-[680px] w-[100%] object-cover"
        >
          <source src="/assets/Miyagi.mp4" type="video/mp4" />
        </video>
        <div className="text-center mx-auto  container">
          <h1 className="text-5xl font-semibold uppercase tracking-wide md:text-7xl">
            Miyagi
          </h1>
          <p className="pt-2 font-semibold">MIyagi Class</p>
        </div>
        <div className="container mx-auto" id="about">
          <h2 className="mt-20 text-center text-4xl font-semibold">About</h2>
          <h3 className="p-4 text-6xl uppercase lg:text-[8rem]">
            MiyaGi & Эндшпиль
          </h3>
          <p className="mr-24 pl-4 text-lg leading-loose">
            Miyagi & Andy Panda (также Эндшпиль) — российский хип-хоп дуэт из
            города Владикавказ, Северная Осетия, образованный в 2015 году.
            Коллектив состоит из двух человек, известных под сценическими
            псевдонимами: «Miyagi» — Азамат Кудзаев и «Andy Panda» (также
            «Эндшпиль») — Сослан Бурнацев. Родился Азамат 13 декабря 1990 года в
            городе Владикавказ, в семье медиков. Отец артиста — известный хирург
            Казбек Кудзаев, который возглавляет Центр ортопедии и эстетической
            хирургии Северной Осетии. Сослан Бурнацев — уроженец Владикавказа,
            по национальности — осетин. Дата рождения — 2 октября 1995 года.
            Получил профессию технолога, однако работать по специальности не
            стал.
          </p>
          <Link href="https://ru.wikipedia.org/wiki/MiyaGi_%26_%D0%AD%D0%BD%D0%B4%D1%88%D0%BF%D0%B8%D0%BB%D1%8C" className="flex items-center gap-x-2 group py-6">
            Read More
            <BsArrowRight className="text-xl group-hover:ml:1 transition-all" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSinger;
