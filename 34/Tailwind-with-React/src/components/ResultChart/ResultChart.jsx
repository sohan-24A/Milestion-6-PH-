import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';
const resultData =[
  { "id": 1, "name": "Rahim", "chemistry": 85, "physics": 78, "math": 92 },
  { "id": 2, "name": "Karim", "chemistry": 74, "physics": 81, "math": 88 },
  { "id": 3, "name": "Sohan", "chemistry": 92, "physics": 89, "math": 95 },
  { "id": 4, "name": "Ayesha", "chemistry": 88, "physics": 84, "math": 90 },
  { "id": 5, "name": "Nusrat", "chemistry": 70, "physics": 76, "math": 80 },
  { "id": 6, "name": "Tanvir", "chemistry": 81, "physics": 79, "math": 85 },
  { "id": 7, "name": "Mim", "chemistry": 69, "physics": 72, "math": 75 },
  { "id": 8, "name": "Rafi", "chemistry": 95, "physics": 92, "math": 98 },
  { "id": 9, "name": "Jannat", "chemistry": 87, "physics": 85, "math": 89 },
  { "id": 10, "name": "Hasan", "chemistry": 76, "physics": 80, "math": 82 }
]

const ResultChart = () => {
    return (
        <div>
            <LineChart width={500} height={200} data={resultData}>
                <XAxis dataKey={"name"}></XAxis>
                <YAxis></YAxis>
                <Line type="monotone" dataKey="math" stroke="#5628B4"/>
                <Line type="monotone" dataKey="chemistry" stroke="#F7B236"/>
                <Line type="monotone" dataKey={"physics"} stroke="#D80E70"/>
            </LineChart>
        </div>
    );
};

export default ResultChart;