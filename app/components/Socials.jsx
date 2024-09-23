import Link from "next/link";
import {
  RiYoutubeFill,
  RiInstagramFill,
  RiSpotifyFill,
  RiSoundcloudFill,
} from "react-icons/ri";

const socials = [
  {
    path: "https://www.youtube.com/@HajimeRecords/videos",
    icon: <RiYoutubeFill />,
  },
  {
    path: "https://www.instagram.com/miyagi_officialll/",
    icon: <RiInstagramFill />,
  },
  {
    path: "https://open.spotify.com/artist/1kmpkcYbuaZ8tnFejLzkj2?si=6xxiG0q2RhmtHs6Ji3HmRA",
    icon: <RiSpotifyFill />,
  },
  {
    path: "https://soundcloud.com/miyagi_black",
    icon: <RiSoundcloudFill />,
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {socials.map((item, index) => {
        return (
          <Link href={item.path} key={index}>
            <div className={`${iconStyles}`}>{item.icon}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
