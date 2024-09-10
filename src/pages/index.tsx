import Homepage from "@/components/Homepage";
import Profile from "@/components/Profile";
import Roster from "@/components/Roster";
import Sercices from "@/components/Sercices";
import Works from "@/components/Works";
import Yours from "@/components/Yours";

export default function Home() {
  return (
    <div>
      <Homepage />
      <Profile />
      <Sercices />
      <Roster />
      <Yours />
      <Works />
    </div>
  );
}
