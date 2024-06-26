'use client';
import React, { useEffect, useRef } from 'react';
import { Chart as ChartJS, LinearScale, CategoryScale, BarController, BarElement } from 'chart.js';
import 'chartjs-adapter-moment';

// Register the required components with Chart.js
ChartJS.register(LinearScale, CategoryScale, BarController, BarElement);

const Chart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      chartInstance.current = new ChartJS(ctx, {
        type: 'bar',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [
            {
              label: 'Projections',
              data: [50, 40, 30, 20, 10, 0, 10, 20, 30, 40, 50, 60],
              backgroundColor: 'rgba(242, 191, 14, 0.8)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1,
            },
            {
              label: 'Actuals',
              data: [45, 35, 25, 15, 5, 0, 5, 15, 25, 35, 45, 55],
              backgroundColor: 'rgba(243, 243, 242, 0.8)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            x: {
              stacked: true,
            },
            y: {
              beginAtZero: true,
              stacked: true,
            },
          },
        },
      });

      return () => {
        chartInstance.current.destroy();
      };
    }
  }, []);

  return <canvas ref={chartRef} width="400" height="400"></canvas>;
};

export default Chart;
