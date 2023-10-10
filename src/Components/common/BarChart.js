import { Bar } from "react-chartjs-2";
import { BarElement,  CategoryScale,Chart as ChartJS,Legend, LinearScale,Title, Tooltip } from "chart.js";


ChartJS.register(CategoryScale, LinearScale, BarElement,Title,Tooltip,Legend);
const option = {
    responsive: true,
    plugins: {
      legend: { position: "chartArea", display: false },
      title: {
        display: false,
      },
      tooltip:{
        yAlign: 'bottom',
        callbacks:{
            title: (tooltipItems) => {
                let sum;
                tooltipItems.forEach(function(tooltipItem) {
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
  
  const data = {
    labels:["1-10 Aug", "11-20 Aug", "21-30 Aug"],
    datasets: [
      {
        // label:'Product B',
        data:[30,35,25],
        backgroundColor:'#d3cffc'
      },
      {
        // label:'Product B',
        data:[50,60,40],
        backgroundColor:'#6e62e5'
      },
  
    ],
  
  };
  
  export default function CustomBar() {
    return (
      <div>
        <Bar options={option} data={data} />
      </div>
    );
  }
  