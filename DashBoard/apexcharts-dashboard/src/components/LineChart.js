import React, { useState } from 'react';
import Chart from 'react-apexcharts';

const LineChart = () => {
  const [chartData, setChartData] = useState({
    series: [
      { name: 'Website Visits', data: [31, 40, 28, 51, 42, 109, 100] },
      { name: 'App Usage', data: [11, 32, 45, 32, 34, 52, 41] },
    ],
    options: {
      chart: { id: 'line-chart', height: 350, type: 'line', zoom: { enabled: false } },
      dataLabels: { enabled: false },
      stroke: { curve: 'smooth' },
      title: { text: 'Product Trends by Month', align: 'left' },
      grid: { row: { colors: ['#f3f3f3', 'transparent'], opacity: 0.5 } },
      xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'] },
    },
  });

  // Function to update the chart data with random values
  const updateChartData = () => {
    const newSeries = [
      {
        name: 'Website Visits',
        data: chartData.series[0].data.map(() => Math.floor(Math.random() * 120)),
      },
      {
        name: 'App Usage',
        data: chartData.series[1].data.map(() => Math.floor(Math.random() * 60)),
      },
    ];

    // To update the chart, we update the state
    setChartData({
      ...chartData, // Keep the existing options
      series: newSeries,
    });
  };

  return (
    <div className="chart">
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="line"
        height={350}
      />
      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        <button onClick={updateChartData}>Update Data</button>
      </div>
    </div>
  );
};

export default LineChart;