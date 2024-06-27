import React, { useState } from 'react';
import Chart from './components/Chart';
import TimeframeSelector from './components/TimeframeSelector';
import './styles/App.css';

const App: React.FC = () => {
  const [timeframe, setTimeframe] = useState<string>('daily');

  return (
    <div className="App">
      <h1>React Chart Example</h1>
      <TimeframeSelector onSelect={setTimeframe} />
      <Chart timeframe={timeframe} />
    </div>
  );
};

export default App;
