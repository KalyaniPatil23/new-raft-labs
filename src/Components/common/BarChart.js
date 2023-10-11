import { Bar } from "react-chartjs-2";
import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from "chart.js";


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
const option = {
  responsive: true,
  plugins: {
    legend: { position: "chartArea", display: false },
    title: {
      display: false,
    },
    tooltip: {
      yAlign: 'bottom',
      callbacks: {
        title: (tooltipItems) => {
          let sum;
          tooltipItems.forEach(function (tooltipItem) {
            sum = tooltipItem.parsed.y;
          });
          return sum + ' %';
        },
        label: (tooltipItems) => {
          return ''
        },
      }
    }
  },
};

export default function CustomBar(props) {
  return (
    <div>
      <Bar options={option} data={props.data} />
    </div>
  );
}
