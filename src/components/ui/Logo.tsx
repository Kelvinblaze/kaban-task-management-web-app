import React from "react";
import LogoLightMode from "../../assets/images/logo/logo-light.png";
import LogoDarkMode from "../../assets/images/logo/logo-dark.png";
import LogoSingle from "../../assets/images/logo/logo-single.png";

interface LogoProps {
  className?: string;
  mode: "light" | "dark";
}

const Logo: React.FC<LogoProps> = ({ className = "", mode }) => {
  return (
    <div>
      <img
        alt="logo"
        src={mode === "light" ? LogoLightMode : LogoDarkMode}
        className={`w-[152.53px] h-[25.22px] hidden md:block ${className}`}
      />

      <img
        alt="logo-single"
        src={LogoSingle}
        className={`w-[24px] h-[25px] md:hidden block ${className}`}
      />
    </div>
  );
};

export default Logo;
