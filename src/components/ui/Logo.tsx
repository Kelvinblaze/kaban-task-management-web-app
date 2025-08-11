import React from "react";
import LogoLightMode from "../../assets/images/logo/logo-light.png";
import LogoDarkMode from "../../assets/images/logo/logo-dark.png";

interface LogoProps {
  className?: string;
  mode: "light" | "dark";
}

const Logo: React.FC<LogoProps> = ({ className = "", mode }) => {
  return (
    <img
      alt="logo"
      src={mode === "light" ? LogoLightMode : LogoDarkMode}
      className={`w-[152.53px] h-[25.22px] ${className}`}
    />
  );
};

export default Logo;
