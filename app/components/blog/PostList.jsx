"use client";

import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";

const PostList = ({ posts }) => {
  const firstThreePosts = posts.slice(0, 3);
  return (
    <motion.div
    variants={fadeIn("up", 0.4)}
    initial="hidden"
    whileInView={"show"}
    viewport={{ once: false, amount: 0.3 }}
    className="flex flex-col items-center"> 
      <div className="flex flex-col xl:flex-row justify-between gap-12 py-10 xl:pt-16 xl:pb-24 border-t border-white/10">
        {firstThreePosts.map((post) => {
          const { id, date, title, description } = post;
          return (
            <div className="flex-1" key={id}>
              <div className="text-white font-bold mb-1">{date}</div>
              <div className="text-xl font-medium mb-4">{title}</div>
              <div className="text-white/30 mb-6 font-light">{description}</div>

              <Link href="#" className="flex items-center gap-x-2 group">
                Read More
                <BsArrowRight className="text-xl group-hover:ml:1 transition-all" />
              </Link>
            </div>
          );
        })}
      </div>
      <a href="/news">

      <button className="btn btn-lg btn-white">View all post</button>
      </a>
      
    </motion.div>
  );
};

export default PostList;
