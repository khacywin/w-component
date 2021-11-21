import React from "react";

export interface AvatarProps {
  url?: string;
  children?: string;
}

/**
 * Avatar
 *
 * @property {string} url
 * @property {string} children
 */
const Avatar = ({ url, children }: AvatarProps) => {
  return (
    <div className="w-avatar">
      {url ? (
        <img src={url} alt="wmtime" />
      ) : children ? (
        <span>{children[0]}</span>
      ) : null}
    </div>
  );
};

export default Avatar;
