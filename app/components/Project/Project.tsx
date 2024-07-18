import React from "react";
import ProjectImage from "./ProjectImage";
import ProjectOpen from "./ProjectOpen";

interface Props {
  title: string;
  alt: string;
  image: string;
  description: string;
}

export default function Project({ title, alt, image, description }: Props) {
  return (
    <div>
      <ProjectImage alt={alt} image={image}></ProjectImage>
      <div>
        <div>
          <h2>{title}</h2>
          <ProjectOpen></ProjectOpen>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
}
