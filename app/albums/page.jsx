"use client";

import axios from "axios";
import { useState } from "react";

const Albums = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [videos, setVideos] = useState([]);

  const handleSearch = async () => {
    if (searchQuery === "") return;
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${searchQuery}&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`
    );
    const data = await response.json();
    setVideos(data.items);
  };

  return (
    <section className='h-[80vh]  xl:h-[850px]" id="home"'>
      <div className="container flex flex-wrap justify-center p-[165px]">
        <div className="p-10 ">
          <h1 className="mt-20 text-center text-4xl font-semibold ">
            YouTube Video Search
          </h1>
          <div
            class="relative flex justify-center p-5"
            data-twe-input-wrapper-init
            data-twe-input-group-ref
          >
            <input
              type="search"
              class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
              placeholder="Search"
              aria-label="Search"
              id="exampleFormControlInput"
              aria-describedby="basic-addon1"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />

            <label
              for="exampleFormControlInput"
              class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] p-5 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-white"
            >
              Search
            </label>
            <button
              class="relative z-[2] -ms-0.5 flex items-center rounded-e bg-primary px-5  text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
              type="button"
              id="button-addon1"
              data-twe-ripple-init
              data-twe-ripple-color="light"
              onClick={handleSearch}
            >
              <span class="[&>svg]:h-5 [&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </span>
            </button>
          </div>

        </div>
        <div className="video-results flex flex-wrap justify-center py-8">
          {videos.map((video) => (
            <div className="p-4 max-w-xs text-center" key={video.id.videoId}>
              <h3 className='className="text-lg font-semibold mt-2"'>
                {video.snippet.title}
              </h3>
              <p className="flex justify-center">{video.snippet.description}</p>
              <img
                src={video.snippet.thumbnails.default.url}
                alt={video.snippet.title}
                className="rounded-lg shadow-md"
              />
              <a
                href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 underline mt-2 text-nowrap no-underline"
              >
                Watch Video
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Albums;
