import React from 'react';
import './App.css';
import LineChart from './components/LineChart';
import BarChart from './components/BarChart';
import DonutChart from './components/DonutChart';

function App() {
  return (
    <div className="App">
      <header>
        <h1>React ApexCharts Dashboard</h1>
      </header>
      <main className="dashboard">
        {/* The line chart can span two columns if we want */}
        <div style={{ gridColumn: '1 / -1' }}>
          <LineChart />
        </div>
        <BarChart />
        <DonutChart />
      </main>
    </div>
  );
}

export default App;
