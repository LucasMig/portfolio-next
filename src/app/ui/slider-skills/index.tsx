"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaAws, FaGit, FaLayerGroup, FaReact, FaVial } from "react-icons/fa";
import { mySkills } from "@/app/lib/constants";
import Card from "@/app/ui/card";
import styles from "@/app/ui/slider-skills/styles.module.scss";

const skillIconMap = {
  frontend: <FaReact />,
  stack: <FaLayerGroup />,
  aws: <FaAws />,
  git: <FaGit />,
  test: <FaVial />,
};

export default function SliderSkills() {
  const swiperProps = {
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
