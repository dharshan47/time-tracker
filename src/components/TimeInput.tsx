import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface Props {
  add: (activity: string, hours: number) => void;
}

const TimeInput = ({ add }: Props) => {
  const [activity, setActivity] = useState("");
  const [hours, setHours] = useState("");

  const handleSubmit = () => {
    add(activity,Number(hours))
    setActivity('')
    setHours('')
  }

  return (
    <div className="space-y-4">
      <Input
        placeholder="Activity"
        value={activity}
        onChange={(e) => setActivity(e.target.value)}
      />
      <Input
        type="number"
        placeholder="Hours"
        value={hours}
        onChange={(e) => setHours(e.target.value)}
      />
      <Button className="w-full" onClick={handleSubmit}>Add Activity</Button>
    </div>
  );
};

export default TimeInput;
