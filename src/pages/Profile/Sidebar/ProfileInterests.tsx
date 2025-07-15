import { useProfile } from "@pages/Profile/ProfileContext";

export function ProfileInterests() {
  const { user } = useProfile();
  const interest = user.interest || "N/A";

  return (
    <div className="bg-base-200 rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Interests</h2>
      <p className="text-base-content/70">{interest}</p>
    </div>
  );
} 