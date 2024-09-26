import React, { useEffect, useState } from "react";
import { Marathon } from "@/interfaces";
import axios from "axios";

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
        {marathons.map((item, index) => (
          <div
            key={index}
            className="item"
            style={{ backgroundImage: item.backgroundImage }}
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
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <button className="next">
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default SlidePageCard;
