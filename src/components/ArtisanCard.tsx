import { FC } from "react";
import star from "../assets/icons/star-rating.png";
import envelope from "../assets/icons/envelope.png";
import thumbsUp from "../assets/icons/thumbsUp.png";

type Props = {
  name: string;
  username: string;
  coverImage: string;
  avatar: string;
  price: string;
  rating: number;
  likes: number;
  description: string;
};

const ArtisanCard: FC<Props> = ({
  coverImage,
  avatar,
  name,
  username,
  price,
  description,
  likes,
  rating,
}) => {
  return (
    <div
      key={coverImage}
      className="w-full h-[400px] lg:h-[350px] rounded-t-xl space-y-2"
    >
      <img
        src={coverImage}
        alt="Artisan Cover"
        className="rounded-t-xl w-full h-1/2"
      />
      <div className="space-y-2 px-4 lg:px-2">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full border-4 border-[#009379]">
            <img src={avatar} alt="Artisan Avatar" className="w-full h-full" />
          </div>
          <div className="text-[#2D2D2D]">
            <p className="text-lg">{name}</p>
            <p className="text-sm">{username}</p>
          </div>
        </div>

        <p className="w-[35%] p-1 bg-[#F8F9FF] shadow rounded-sm text-sm">
          From <span className="font-semibold">{price}</span>
        </p>

        <p className="text-base lg:text-sm">
          {description.length > 40
            ? description?.slice(0, 40) + "..."
            : description}
        </p>

        <div className="flex items-center gap-2">
          <span className="flex items-center md:gap-[2px] lg:gap-1">
            <img src={thumbsUp} alt="" />
            <p className="text-sm">{likes}</p>
          </span>

          <span className="flex items-center md:gap-[2px] lg:gap-1">
            <img src={envelope} alt="" />
          </span>

          <span className="flex items-center md:gap-[2px] lg:gap-1 ">
            <img src={star} alt="" />
            <p className="text-sm">{rating}</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ArtisanCard;
