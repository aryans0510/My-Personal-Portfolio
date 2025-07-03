import { Timeline } from "../components/Timeline";
import { achievements } from "../constants";
const Achievements = () => {
  return (
    <div className="w-full py-15 flex flex-col justify-center">
      <Timeline data={achievements} heading="My Achievements" />
    </div>
  );
};

export default Achievements;
