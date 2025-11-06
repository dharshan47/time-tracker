import { Pie } from "react-chartjs-2";
import { Chart as ChartJs, ArcElement, Tooltip, Legend } from "chart.js";
import type { State } from "@/types/type";

interface Props {
  data: State[];
}

ChartJs.register(ArcElement, Tooltip, Legend);

const TimeChart = ({ data }: Props) => {
  const chartData = {
    labels: data.map((d) => d.activity),
    datasets: [
      {
        labels: "Hours",
        data: data.map((d) => d.hours),
        backgroundColor: [
          "#3366CC",
          "#DC3912",
          "#FF9900",
          "#109618",
          "#990099",
          "#0099C6",
        ],
      },
    ],
  };

  return <Pie data={chartData} />;
};

export default TimeChart;
