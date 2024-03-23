import Link from "next/link";
import { FaInstagram , FaLinkedin, FaGithub} from "react-icons/fa";
const MemberCard = ({ imgUrl, title, gitUrl, linkedinUrl, instaUrl }) => {
  return (
    <div className="hover:scale-105">
      <div
        className="size-52 md:size-[17rem] rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "100% 100%" }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-16 mt-36 md:mt-52 bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:gap-x-8 group-hover:gap-y-20 group-hover:bg-opacity-80 transition-all duration-500">
          <Link
            href={instaUrl}
            className="size-8 mr-2 mt-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <FaInstagram className="size-8"/>
          </Link>
          <Link
            href={linkedinUrl}
            className="size-8 mr-2 mt-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <FaLinkedin className="size-8"/>
          </Link>
          <Link
            href={gitUrl}
            className="size-8 mr-2 mt-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <FaGithub className="size-8"/>
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4 w-52 md:w-[17rem]">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
      </div>
    </div>
  );
};
export default MemberCard;
