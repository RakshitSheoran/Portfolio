import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";
import image from "../assets/FinArc.png";

export default function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold">
              <span
                style={{
                  background:
                    "linear-gradient(to bottom, #ffffff, #d4d4e8, #9898c8)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Unleash the power of
              </span>
              <br />
              <span
                className="text-4xl md:text-[6rem] font-bold mt-1 leading-none inline-block"
                style={{
                  background:
                    "linear-gradient(90deg, #909090 0%, #ffffff 25%, #c8c8c8 50%, #ffffff 75%, #909090 100%)",
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  animation: "shimmer 4s linear infinite",
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: "italic",
                }}
              >
                Scroll Animations
              </span>
            </h1>
          </>
        }
      >
        {/* TODO: replace with your image */}
        <img
          src={image}
          alt="hero"
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
