"use client";

import { useEffect, useState } from 'react';
import FaqData from "react-faq-component";

const Faq = () => {
  const styles = {
    bgColor: 'linear-gradient(90deg,rgba(8, 4, 64, 1) 16%,rgba(19, 35, 57, 1) 31%,rgba(26, 17, 59, 1) 62%,rgba(7, 53, 62, 1) 98%)',
    titleTextColor: "#2795EB",
    rowTitleColor: "white",
    rowContentColor: 'orange',
    arrowColor: "#2795EB",
    rowContentPaddingLeft: '3px',
  };
  
  const faq_content = {
    title: "FAQ",
    rows: [
      {
        title: " What is CloudOps?",
        content: " CloudOps is a college club dedicated to promoting DevOps and cloud computing among students. We organize events, workshops, and seminars to help students learn about these technologies and their applications in the real world.",
      },
      {
        title: "Who can join CloudOps?",
        content: "CloudOps is open to all students interested in learning about DevOps, cloud computing, and related technologies. Whether you're a beginner or have some experience, you're welcome to join.",
      },
      {
        title: "How can I join CloudOps?",
        content: "We conduct a recruitment drive every year. You can get updates about our recruitment process and other activities through our Instagram handle.",
      },
      {
        title: "What types of events does CloudOps organize?",
        content: "CloudOps organizes a variety of events, including workshops, hackathons, guest lectures, and hands-on labs. These events cover topics like cloud platforms (AWS, Azure, GCP), DevOps practices, containerization, and CI/CD pipelines.",
      },
      {
        title: "What resources does CloudOps provide for learning?",
        content: "CloudOps provides a range of learning resources, including online tutorials, study groups. We also offer mentorship from experienced members.",
      },
      {
        title: "How can I contribute to CloudOps?",
        content: "You can contribute to CloudOps by volunteering to help organize events, sharing your knowledge with other members, or leading a workshop or study group. We're always looking for enthusiastic members to get involved.",
      },
    ],
  };

  return (
    <FaqData data={faq_content} styles={styles}/>
  );
};

export default Faq;
