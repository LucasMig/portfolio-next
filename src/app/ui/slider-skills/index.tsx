"use client";

import { mySkills } from "@/app/_data/skills";
import Card from "@/app/ui/card";
import styles from "@/app/ui/slider-skills/styles.module.scss";
import { FaAws, FaGit, FaLayerGroup, FaReact, FaVial } from "react-icons/fa";
import { FaPuzzlePiece } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, type SwiperProps, SwiperSlide } from "swiper/react";

const skillIconMap = {
  frontend: <FaReact />,
  stack: <FaLayerGroup />,
  aws: <FaAws />,
  git: <FaGit />,
  test: <FaVial />,
  puzzle: <FaPuzzlePiece />,
};

export default function SliderSkills() {
  const swiperProps: SwiperProps = {
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: true,
    modules: [Autoplay, Pagination],
  };

  return (
    <div className={styles.sliderContainer}>
      <Swiper {...swiperProps} className={styles.swiper}>
        {mySkills.map((skill) => {
          const { icon, title, description } = skill;

          return (
            <SwiperSlide key={`slide-${title}`}>
              <Card
                icon={skillIconMap[icon as keyof typeof skillIconMap]}
                title={title}
                description={description}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
