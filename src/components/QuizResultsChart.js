import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const QuizResultsChart = () => {
  const chartRef = useRef(null);
  let chartInstance = null;

  useEffect(() => {
    // Ensure canvas is mounted and Chart.js instance is created
    if (chartRef.current) {
      chartInstance = new Chart(chartRef.current, {
        type: 'bar',
        data: {
          labels: ["محمد علي", "فاطمة الزهراء", "علي حسن"],
          datasets: [{
            label: 'Quiz Scores',
            data: [85, 92, 78],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Score'
              }
            },
            x: {
              title: {
                display: true,
                text: 'Username'
              }
            }
          }
        }
      });
    }

    // Cleanup function to destroy Chart.js instance when component unmounts
    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);

  return (
    <div className="container">
      <h1 className="text-center mt-4">Quiz Results Chart</h1>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default QuizResultsChart;
