

import { Chart, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";

Chart.register(...registerables);

const TrendChart = ({ tweets }) => {

  const tweetCountsByDate = tweets.reduce((acc, tweet) => {
    const date = new Date(tweet.created_at).toISOString().split("T")[0]; // استخراج التاريخ فقط
    acc[date] = (acc[date] || 0) + 1; // زيادة العدد
    return acc;
  }, {});


  const labels = Object.keys(tweetCountsByDate).sort(); // ترتيب التواريخ
  const data = Object.values(tweetCountsByDate);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Tweet Count",
        data,
        backgroundColor: "#6A0DAD",
        borderColor: "#6A0DAD",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // لا حاجة لعرض الأسطورة (Legend)
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Dates",
        },
      },
      y: {
        title: {
          display: true,
          text: "Tweet Count",
        },
        ticks: {
          stepSize: 1, // زيادة المحور العمودي بمقدار 1
          beginAtZero: true,
        },
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default TrendChart;