import React from "react";
import ProjectImage from "./ProjectImage";
import ProjectOpen from "./ProjectOpen";

interface Props {
  title: string;
  alt: string;
  image: string;
  description: string;
  url: string;
}

export default function Project({ title, url, alt, image, description }: Props) {
  return (
    <div className="project">
      <ProjectImage alt={alt} image={image}></ProjectImage>
      <div className="projectInfo">
        <div className="titleBarProject">
          <h2>{title}</h2>
          <ProjectOpen url={url}></ProjectOpen>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
}
