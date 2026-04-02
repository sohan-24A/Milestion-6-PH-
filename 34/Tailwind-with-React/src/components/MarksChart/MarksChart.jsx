import React, { use } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const MarksChart = ({marksPromise}) => {
    const markDataRes = use(marksPromise)
    const marksData = markDataRes.data;
    // console.log(marksData);
    // Data procecing for the chart 
    const marksChartData = marksData.map(studentData =>{
        const student = {
            id:studentData.id,
            name:studentData.name,
            physics: studentData.marks.physics,
            chemistry: studentData.marks.chemistry,
            Math: studentData.marks.math
        }
        return student
    })

    return (
        <div>
            <BarChart width={500} height={400} data={marksChartData}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Bar dataKey={'Math'} fill='yellow'></Bar>
                <Bar dataKey={'physics'} fill='red'></Bar>
            </BarChart>
        </div>
    );
};

export default MarksChart;