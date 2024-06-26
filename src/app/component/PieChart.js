import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto'; // Import Chart from 'chart.js/auto' for automatic component registration

const PieChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    // Cleanup previous instance if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Create new chart instance
    const ctx = chartRef.current.getContext('2d');
    chartInstance.current = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4'],
        datasets: [
          {
            data: [25, 15, 30, 30], // Adjust the values as per the image
            backgroundColor: ['rgba(242, 191, 14, 0.8)', 'rgba(242, 191, 14, 3)', 'rgba(242, 191, 14, 8)', 'rgba(242, 191, 14, 15)'], // Adjust the colors as per the image
          },
        ],
      },
    });

    // Clean up on component unmount
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []); // Empty dependency array means this effect runs only once after initial render

  return <canvas ref={chartRef} id="myPieChart" width="400" height="400"></canvas>;
};

export default PieChart;