import TimeChart from "@/components/TimeChart";
import TimeInput from "@/components/TimeInput";
import type { State } from "@/types/type";
import { useState } from "react";

const Home = () => {
  const [data, setData] = useState<State[]>([]);

  const handleAdd = (activity: string, hours: number) => {
    setData((prev) => [...prev, { activity, hours }]);
  };

  return (
    <div className="max-w-xs xs:max-w-lg lg:max-w-xl mx-auto bg-white rounded-md shadow-lg border-2 space-y-4 p-6 font-mono mt-15 mb-15">
      <h1 className="text-center font-bold text-xl sm:text-2xl">Time Tracker</h1>
      <TimeInput add={handleAdd} />
      {data.length > 0 && <TimeChart data={data} />}
    </div>
  );
};

export default Home;
