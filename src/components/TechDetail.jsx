import LaunchVehicleLandscape from "../../assets/technology/image-launch-vehicle-landscape.jpg";
import LaunchVehiclePortrait from "../../assets/technology/image-launch-vehicle-portrait.jpg";
import SpaceportLandscape from "../../assets/technology/image-spaceport-landscape.jpg";
import SpaceportPortrait from "../../assets/technology/image-spaceport-portrait.jpg";
import CapsuleLandscape from "../../assets/technology/image-space-capsule-landscape.jpg";
import CapsulePortrait from "../../assets/technology/image-space-capsule-portrait.jpg";

import { useParams } from "react-router-dom";
import Pagination from "./Pagination";
import technologies from "../../technologies.json";
import React from "react";
import TechTabs from "./TechTabs";

export default function Moon() {
  const [width, setWidth] = React.useState(window.innerWidth);

  const images = {
    "launch-vehicle": [LaunchVehicleLandscape, LaunchVehiclePortrait],
    spaceport: [SpaceportLandscape, SpaceportPortrait],
    "space-capsule": [CapsuleLandscape, CapsulePortrait],
  };

  const { techId } = useParams();

  const technology = technologies.find(
    (tech) => tech.name.replace(" ", "-").toLowerCase() === techId
  );

  React.useEffect(() => {
    window.onresize = () => {
      setWidth(window.innerWidth);
    };
  }, []);

  return (
    <div className="flex flex-col lg:flex-row-reverse lg:justify-between items-center gap-8">
      <div className="w-full lg:w-auto grow lg:max-w-130">
        <img
          src={width > 640 && width < 1024 ? images[techId][0] : images[techId][1]}
          alt={technology.name}
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="flex flex-col lg:flex-row items-center text-center lg:text-left container px-6 sm:px-8 lg:px-0 lg:pl-12 gap-4 lg:max-w-168">
        <TechTabs technologies={technologies} active={techId} />
        <div className="max-w-150 lg:max-w-134">
          <p className="text-preset4 text-[#ffffff80] uppercase">The terminology...</p>
          <h2 className="uppercase text-preset3 text-white">{technology.name}</h2>
          <p className="text-preset9 text-custom-blue-300">{technology.description}</p>
        </div>
      </div>
    </div>
  );
}
