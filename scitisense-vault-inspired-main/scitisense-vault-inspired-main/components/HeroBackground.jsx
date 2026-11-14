"use client";
import { usePathname } from "next/navigation";

const heroBackgrounds = {
  "/": {
    color1: "#347db3",
    color2: "#42b3b0",
    angle: -160,
    size: 115,
    speed: 24,
  },
  "/aboutus": {
    color1: "#458cb5",
    color2: "#7478bd",
    angle: 145,
    size: 135,
    speed: 20,
  },
  "/services": {
    color1: "#3767b0",
    color2: "#48a3b7",
    angle: 15,
    size: 105,
    speed: 23,
  },
  "/services/research-development": {
    color1: "#4e76ca",
    color2: "#9282c8",
    angle: -90,
    size: 125,
    speed: 22,
  },
  "/services/training-workshops": {
    color1: "#29a49b",
    color2: "#3d78bc",
    angle: -150,
    size: 95,
    speed: 26,
  },
  "/services/consultancy-services": {
    color1: "#6284a1",
    color2: "#68989a",
    angle: 120,
    size: 145,
    speed: 18,
  },
  "/careers": {
    color1: "#3689ba",
    color2: "#5769bb",
    angle: 65,
    size: 115,
    speed: 23,
  },
  "/careers/internships": {
    color1: "#537ec8",
    color2: "#4ca49d",
    angle: -55,
    size: 100,
    speed: 25,
  },
  "/contact": {
    color1: "#3488a5",
    color2: "#55a4c0",
    angle: 150,
    size: 90,
    speed: 20,
  },
  "/whatwedo": {
    color1: "#6b76ad",
    color2: "#477ea0",
    angle: -15,
    size: 130,
    speed: 22,
  },
  "/whatwedo/itsm": {
    color1: "#4c86b4",
    color2: "#65b7a4",
    angle: 110,
    size: 105,
    speed: 21,
  },
  "/whatwedo/itom": {
    color1: "#4f6aab",
    color2: "#419ba0",
    angle: -115,
    size: 120,
    speed: 24,
  },
  "/whatwedo/itam": {
    color1: "#7687ad",
    color2: "#6e9ba2",
    angle: 175,
    size: 140,
    speed: 18,
  },
  "/whatwedo/hrsd": {
    color1: "#758dc0",
    color2: "#a286ad",
    angle: -75,
    size: 110,
    speed: 20,
  },
  "/whatwedo/grc": {
    color1: "#3e9299",
    color2: "#8e9a6f",
    angle: 25,
    size: 125,
    speed: 19,
  },
  "/whatwedo/csm": {
    color1: "#4482ae",
    color2: "#5aa1bc",
    angle: 90,
    size: 95,
    speed: 24,
  },
  "/whatwedo/platform-optimization": {
    color1: "#597bbe",
    color2: "#757db2",
    angle: -130,
    size: 150,
    speed: 21,
  },
  "/whatwedo/secops": {
    color1: "#52659b",
    color2: "#2b9991",
    angle: -20,
    size: 100,
    speed: 22,
  },
};

export default function HeroBackground() {
  const pathname = usePathname();
  const variant = heroBackgrounds[pathname] || heroBackgrounds["/"];

  return (
    <div
      className="hero-animated-background"
      data-background-variant={pathname}
      aria-hidden="true"
      style={{
        "--hero-wave-one": variant.color1,
        "--hero-wave-two": variant.color2,
        "--hero-wave-angle": `${variant.angle}deg`,
      }}
    >
      <div className="research-grid" />
      <svg className="research-network" viewBox="0 0 800 800" fill="none" focusable="false">
        <g className="research-orbit">
          <circle cx="400" cy="400" r="286" />
          <ellipse cx="400" cy="400" rx="286" ry="108" transform="rotate(-28 400 400)" />
          <ellipse cx="400" cy="400" rx="286" ry="184" transform="rotate(-28 400 400)" />
          <ellipse cx="400" cy="400" rx="108" ry="286" transform="rotate(-28 400 400)" />
          <ellipse cx="400" cy="400" rx="184" ry="286" transform="rotate(-28 400 400)" />
          <path d="M148 264 310 190 520 264 650 421 480 610 257 584 148 264ZM310 190 345 390 148 264M345 390 520 264 480 610 345 390 257 584M345 390 650 421" />
          {[[148,264],[310,190],[520,264],[650,421],[480,610],[257,584],[345,390]].map(([cx, cy], index) => (
            <g key={cx} className="research-node" style={{ animationDelay: `${index * -0.8}s` }}>
              <circle cx={cx} cy={cy} r="12" className="research-node-halo" />
              <circle cx={cx} cy={cy} r="4" className="research-node-core" />
            </g>
          ))}
        </g>
        <circle className="research-outer-ring" cx="400" cy="400" r="335" strokeDasharray="2 14" />
        <path className="research-axis" d="M400 40V95M400 705V760M40 400H95M705 400H760" />
      </svg>
    </div>
  );
}
