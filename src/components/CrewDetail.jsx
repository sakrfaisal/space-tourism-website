import Crew1 from "../../assets/crew/image-douglas-hurley.webp";
import Crew2 from "../../assets/crew/image-mark-shuttleworth.webp";
import Crew3 from "../../assets/crew/image-victor-glover.webp";
import Crew4 from "../../assets/crew/image-anousheh-ansari.webp";
import { useParams } from "react-router-dom";
// import Pagination from "./Pagination";
import crew from "../../crew.json";
import Pagination from "./Pagination";

export default function Moon() {
  const crewImgs = {
    "Douglas Hurley": Crew1,
    "Mark Shuttleworth": Crew2,
    "Victor Glover": Crew3,
    "Anousheh Ansari": Crew4,
  };

  const { crewId } = useParams();

  const crewMember = crew.find((member) => member.name.split(" ")[1].toLowerCase() === crewId);

  if (!crewMember) {
    return <div>Crew member not found</div>;
  }
  const memberName = crewMember.name.split(" ")[1].toLowerCase();

  return (
    <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-8 relative min-h-full">
      <div className="text-center lg:text-left lg:flex-1/2">
        <p className="text-preset4 text-white opacity-50 uppercase">{crewMember.role}</p>
        <h2 className="text-preset3 text-white uppercase">{crewMember.name}</h2>
        <p className="text-preset9 text-custom-blue-300">{crewMember.bio}</p>
      </div>
      <Pagination crew={crew} active={crewId} />
      <div id="cerwImg" className="relative">
        <img src={crewImgs[crewMember.name]} alt={memberName} className="h-auto w-auto" />
      </div>
    </div>
  );
}
