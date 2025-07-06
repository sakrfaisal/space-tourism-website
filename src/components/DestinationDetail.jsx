import MoonImg from "../../assets/destination/image-moon.webp";
import MarsImg from "../../assets/destination/image-mars.webp";
import EuropaImg from "../../assets/destination/image-europa.webp";
import TitanImg from "../../assets/destination/image-titan.webp";
import { useParams } from "react-router-dom";
import Tabs from "./Tabs";
import destinations from "../../destinations.json";

export default function Moon() {
  const distImgs = { Moon: MoonImg, Mars: MarsImg, Europa: EuropaImg, Titan: TitanImg };
  const { destId } = useParams();
  const destination = destinations.find((d) => d.name.toLowerCase() === destId);

  return (
    <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-20 text-center lg:text-left">
      <img
        src={distImgs[destination.name]}
        alt={destination.name}
        className="w-37.5 sm:w-75 lg:w-120"
      />
      <div className="flex flex-col max-w-full w-140 lg:w-111 items-center lg:items-start">
        <Tabs destinations={destinations} active={destId} />
        <h2 className="text-preset2 uppercase">{destination.name}</h2>
        <p className="text-preset9 text-custom-blue-300">{destination.description}</p>
        <hr className="opacity-25 my-10 h-0.25 w-full" />
        <div className="flex w-full lg:text-left">
          <div className="w-1/2">
            <h4 className="text-preset7 uppercase">AVG. DISTANCE</h4>
            <span className="text-preset6 uppercase">{destination.distance}</span>
          </div>
          <div className="w-1/2">
            <h4 className="text-preset7 uppercase">Est. travel time</h4>
            <span className="text-preset6 uppercase">{destination.travel}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
