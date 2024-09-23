"use client";
import React from "react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import useSWR from "swr";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const fetcher = (url) => fetch(url).then((res) => res.json());

const AboutSinger = () => {
  const { data, error } = useSWR("http://localhost:4000/clips", fetcher);

  if (error) return <div>Failed to fetch data</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <motion.section
      variants={fadeIn("up", 1.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.1 }}
      className="section"
    >
      <div className="container mx-auto">
        <video
          autoPlay
          loop
          muted
          className="top-0 left-0 h-[680px] w-[100%] object-cover"
        >
          <source src="/assets/Miyagi.mp4" type="video/mp4" />
        </video>
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mx-auto  container"
        >
          <h1 className="text-5xl font-semibold uppercase tracking-wide md:text-7xl">
            Miyagi
          </h1>
          <p className="pt-2 font-semibold">MIyagi Class</p>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="container h-full w-full mx-auto rounded-lg"
          id="about"
        >
          <h2 className="mt-20 text-center text-4xl font-semibold">About</h2>
          <h3 className="p-4 text-6xl uppercase lg:text-[8rem] container mx-auto">
            MiyaGi & Эндшпиль
          </h3>
          <p className="mr-24 pl-4 text-lg leading-loose container">
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
          <Link
            href="https://ru.wikipedia.org/wiki/MiyaGi_%26_%D0%AD%D0%BD%D0%B4%D1%88%D0%BF%D0%B8%D0%BB%D1%8C"
            className="flex items-center gap-x-2 group py-6"
          >
            Read More
            <BsArrowRight className="text-xl group-hover:ml:1 transition-all" />
          </Link>
        </motion.div>
      </div>
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="popularClips"
      >
        <h2 className="mt-20 text-center text-4xl font-semibold">
          Popular Clips
        </h2>
        <div className="flex flex-wrap justify-center py-8">
          {data.map((clip) => (
            <div key={clip.id} className="p-4 max-w-xs text-center">
              {/* Image for each clip */}
              <Image
                src={clip.img}
                alt={clip.title} // Alt text for accessibility
                width={300}
                height={500}
                className="rounded-lg shadow-md"
              />
              {/* Title for each clip */}
              <h3 className="text-lg font-semibold mt-2">{clip.title}</h3>
              {/* YouTube URL as clickable link */}
              <a
                href={clip.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 underline mt-2 text-nowrap no-underline"
              >
                Watch on YouTube
              </a>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default AboutSinger;
