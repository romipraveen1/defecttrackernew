import React from "react";
import { Avatar, Image } from "antd";

const CustomAvatar = (props: any) => {
  const {
    type,
    style,
    alt,
    gap,
    icon,
    shape,
    size,
    src,
    draggable,
    onError,
  } = props;
  return (
    <Avatar
      {...props}
      type={type}
      style={style}
      alt={alt}
      gap={gap}
      icon={icon}
      shape={shape}
      size={size}
      src={src}
      draggable={draggable}
      onError={onError}
    >
      {props.children}
    </Avatar>
  );
};

export default CustomAvatar;
