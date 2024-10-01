import React, { useEffect, useState, useMemo } from "react";
import { Marathon } from "@/interfaces";
import axios from "axios";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const SlidePageCard: React.FC = () => {
  const [marathons, setMarathons] = useState<Marathon[]>([]);

  const fetchMarathons = async () => {
    try {
      const response = await axios.get("/api/marathon");
      setMarathons(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMarathons();
  }, []);

  // Preload images using useMemo
  const preloadedImages = useMemo(() => {
    return marathons.map((item) => {
      const img = new Image();
      img.src = item.backgroundImage; // Preload the image by setting the src
      return {
        ...item,
        img, // Store the preloaded image object
      };
    });
  }, [marathons]);

  useEffect(() => {
    const next = document.querySelector(".next") as HTMLButtonElement | null;
    const prev = document.querySelector(".prev") as HTMLButtonElement | null;

    next?.addEventListener("click", handleNextClick);
    prev?.addEventListener("click", handlePrevClick);

    return () => {
      next?.removeEventListener("click", handleNextClick);
      prev?.removeEventListener("click", handlePrevClick);
    };
  }, []);

  const handleNextClick = () => {
    const items = document.querySelectorAll<HTMLDivElement>(".item");
    const slide = document.querySelector(".slide");
    if (items.length > 0 && slide) {
      slide.appendChild(items[0]);
    }
  };

  const handlePrevClick = () => {
    const items = document.querySelectorAll<HTMLDivElement>(".item");
    const slide = document.querySelector(".slide");
    if (items.length > 0 && slide) {
      slide.prepend(items[items.length - 1]);
    }
  };

  return (
    <div className="container">
      <div className="slide">
        {preloadedImages.map((item, index) => (
          <div
            key={index}
            className="item"
            style={{
              backgroundImage: `url(${item.img.src})`, // Use preloaded image source
            }}
          >
            <div className="overlay"></div>
            <div className="content">
              <div className="name">{item.name}</div>
              <div className="des">{item.description}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="button">
        <button className="prev">
          <FaArrowLeft />
        </button>
        <button className="next">
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default SlidePageCard;
