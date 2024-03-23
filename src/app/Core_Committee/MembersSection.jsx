"use client"
import { useState, useRef } from "react";
import MemberCard from "./MemberCard";
import { motion, useInView } from "framer-motion";
const MemberTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white border-primary-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-base cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};
const membersData = [
  {
    id: 1,
    title: "Member 1",
    image: "https://placehold.co/160x160",
    tag: ["Leads", "Board"],
    gitUrl: "/",
    instaUrl: "/",
    linkedinUrl: "/"
  },
  {
    id: 2,
    title: "Member 2",
    image: "https://placehold.co/160x160",
    tag: ["Leads", "Board"],
    gitUrl: "/",
    instaUrl: "/",
    linkedinUrl: "/"
  },
  {
    id: 3,
    title: "Member 3",
    image: "https://placehold.co/160x160",
    tag: ["Leads", "Board"],
    gitUrl: "/",
    instaUrl: "/",
    linkedinUrl: "/"
  },
  {
    id: 4,
    title: "Member 4",
    image: "https://placehold.co/160x160",
    tag: ["Leads", "Board"],
    gitUrl: "/",
    instaUrl: "/",
    linkedinUrl: "/"
  },
  {
    id: 5,
    title: "Member 5",
    description: "Member 5 description",
    image: "https://placehold.co/160x160",
    tag: ["Leads", "Board"],
    gitUrl: "/",
    instaUrl: "/",
    linkedinUrl: "/"
  },
  {
    id: 6,
    title: "Member 6",
    image: "https://placehold.co/160x160",
    tag: ["Leads", "Board"],
    gitUrl: "/",
    instaUrl: "/",
    linkedinUrl: "/"
  },
];
const MembersSection = () => {
  const [tag, setTag] = useState("Leads");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };
  const filteredMembers = membersData.filter((member) =>
    member.tag.includes(tag)
  );
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <section id="members">
      <h2 className="text-center text-3xl font-bold text-white mt-4 mb-4">
        Core Committee
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6 ">
        <MemberTag
          onClick={handleTagChange}
          name="Board"
          isSelected={tag === "Board"}
        />
        <MemberTag
          onClick={handleTagChange}
          name="Leads"
          isSelected={tag === "Leads"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 justify-items-center">
        {filteredMembers.map((member, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.2 }}
          >
            <MemberCard
              key={member.id}
              title={member.title}
              imgUrl={member.image}
              gitUrl={member.gitUrl}
              instaUrl={member.instaUrl}
              linkedinUrl={member.instaUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};
export default MembersSection;
