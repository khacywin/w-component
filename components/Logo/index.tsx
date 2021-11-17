import './index.scss'

import React from "react";

export interface LogoProps {
  text?: boolean;
  img?: string;
}
const Logo = ({ text, img }: LogoProps) => {
  return <div className='w-logo'>{text || <img src={img} alt="logo" /> || ""}</div>;
};

export default Logo;