
import { Chart, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";

Chart.register(...registerables);

const SentimentChart = ({ tweets }) => {
 
  const sentimentCountsByDate = tweets.reduce((acc, tweet) => {
    const date = new Date(tweet.created_at).toISOString().split("T")[0];   
    if (!acc[date]) acc[date] = { positive: 0, negative: 0, neutral: 0 };

    if (tweet.sentiment === "Positive") acc[date].positive += 1;
    if (tweet.sentiment === "Negative") acc[date].negative += 1;
    if (tweet.sentiment === "Neutral") acc[date].neutral += 1;

    return acc;
  }, {});


  const labels = Object.keys(sentimentCountsByDate).sort();  
  const positiveData = labels.map((date) => sentimentCountsByDate[date].positive);
  const negativeData = labels.map((date) => sentimentCountsByDate[date].negative);
  const neutralData = labels.map((date) => sentimentCountsByDate[date].neutral);

  const chartData = {
    labels,
    datasets: [
      
      {
        label: "#00BE98",
        data: positiveData,
        backgroundColor: "green",
      },
      {
        label: "Negative",
        data: negativeData,
        backgroundColor: "#FF6542",
      },
      {
        label: "Neutral",
        data: neutralData,
        backgroundColor: "#E2C541",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
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
          stepSize: 1,  
          beginAtZero: true,
        },
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default SentimentChart;











