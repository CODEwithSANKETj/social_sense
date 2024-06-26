import React, { useEffect, useRef } from 'react';
import { Chart as ChartJS, LineController, LineElement, PointElement, LinearScale, CategoryScale } from 'chart.js';
import 'chartjs-adapter-moment';

// Register the required components with Chart.js
ChartJS.register(LineController, LineElement, PointElement, LinearScale, CategoryScale);

const LoopChart = () => {
  const loopRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (loopRef.current) {
      const ctx = loopRef.current.getContext('2d');
      chartInstance.current = new ChartJS(ctx, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [
            {
              label: 'Projections',
              data: [50, 40, 30, 20, 10, 0, 10, 20, 30, 40, 50, 60],
              backgroundColor: 'rgba(242, 191, 14, 0.8)',
              borderColor: 'rgba(255, 99, 132, 1)',
              fill: false,
              tension: 0.4,
            },
            {
              label: 'Actuals',
              data: [45, 35, 25, 15, 5, 0, 5, 15, 25, 35, 45, 55],
              backgroundColor: 'rgba(243, 243, 242, 0.8)',
              borderColor: 'rgba(54, 162, 235, 1)',
              fill: false,
              tension: 0.4,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Loop Chart',
            },
          },
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });

      return () => {
        chartInstance.current.destroy();
      };
    }
  }, []);

  return <canvas ref={loopRef} width="400" height="400"></canvas>;
};

export default LoopChart;