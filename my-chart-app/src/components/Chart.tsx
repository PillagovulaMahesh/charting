import React, { useState, useEffect } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import data from '../data/chartData.json';

interface DataPoint {
  timestamp: string;
  value: number;
}

const Chart: React.FC<{ timeframe: string }> = ({ timeframe }) => {
  const [filteredData, setFilteredData] = useState<DataPoint[]>([]);

  useEffect(() => {
    // Filter data based on the selected timeframe
    const now = new Date();
    const filtered = data.filter((d: DataPoint) => {
      const date = new Date(d.timestamp);
      switch (timeframe) {
        case 'daily':
          return date > new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);
        case 'weekly':
          return date > new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7);
        case 'monthly':
          return date > new Date(now.getFullYear(), now.getMonth() - 1, now.getDate());
        default:
          return true;
      }
    });
    setFilteredData(filtered);
  }, [timeframe]);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={filteredData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="timestamp" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
