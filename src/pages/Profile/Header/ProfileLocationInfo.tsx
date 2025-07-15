import { FaMapMarkerAlt, FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { useProfile } from "@pages/Profile/ProfileContext";

export function ProfileLocationInfo() {
  const { user } = useProfile();
  const { location = "N/A", work = "N/A", education = "N/A" } = user;

  return (
    <div className="flex flex-wrap gap-4">
      <div className="flex items-center gap-2">
        <FaMapMarkerAlt className="text-base-content/70" />
        <span>{location}</span>
      </div>

      <div className="flex items-center gap-2">
        <FaBriefcase className="text-base-content/70" />
        <span>{work}</span>
      </div>

      <div className="flex items-center gap-2">
        <FaGraduationCap className="text-base-content/70" />
        <span>{education}</span>
      </div>
    </div>
  );
}
