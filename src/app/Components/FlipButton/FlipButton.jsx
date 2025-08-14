"use client";
import React from "react";
import "./flipbutton.css";

export default function FlipButton({ front, back, onClick, href }) {
  const Tag = href ? "a" : "button";
  return (
    <Tag
      href={href}
      className="btn-flip"
      data-front={front}
      data-back={back}
      onClick={onClick}
    />
  );
}
