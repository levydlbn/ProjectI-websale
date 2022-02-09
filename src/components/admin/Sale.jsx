import React from 'react';
import { PieChart, Pie, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import './css/sale.css'

const data01 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
];
const data02 = [
    { name: 'A1', value: 100 },
    { name: 'A2', value: 300 },
    { name: 'B1', value: 100 },
    { name: 'B2', value: 80 },
    { name: 'B3', value: 40 },
    { name: 'B4', value: 30 },
    { name: 'B5', value: 50 },
    { name: 'C1', value: 100 },
    { name: 'C2', value: 200 },
    { name: 'D1', value: 150 },
    { name: 'D2', value: 50 },
];

const data = [{
        name: 'clothes',
        fake: 4000,
        real: 2400,
        amt: 2400,
    },
    {
        name: 'ball',
        fake: 3000,
        real: 1398,
        amt: 2210,
    },
    {
        name: 'shoes',
        fake: 2000,
        real: 900,
        amt: 2290,
    },
    {
        name: 'gloves',
        fake: 2780,
        real: 3908,
        amt: 2000,
    },
    {
        name: 'shoe',
        fake: 1890,
        real: 4800,
        amt: 2181,
    },
];

const dataTurnover = [{
        title: 'Doanh số hôm nay',
        value: '1.200.000'
    },
    {
        title: 'Doanh số tuần này',
        value: '10.000.000'
    },
    {
        title: 'Doanh số tháng này',
        value: '39.000.000'
    },
    {
        title: 'Doanh số năm nay',
        value: '400.000.000'
    },
    {
        title: 'Doanh số hôm qua',
        value: '1.100.000'
    },
    {
        title: 'Doanh số tuần trước',
        value: '9.000.000'
    },
    {
        title: 'Doanh số tháng trước',
        value: '39.000.000'
    },
    {
        title: 'Doanh số năm trước',
        value: '399.000.000'
    }
]


const Sale = () => {
    return ( 
        <div className = 'sale' >
        <div className = 'sale__chart row col c-12' >
        <div className = 'sale__chart-product c-6' >
        <h3 className = 'sale__chart-product-title' > Tỷ lệ số sản phẩm bán ra </h3> 
        <div className = 'sale__chart-product-content' >
        <PieChart width = { 250 }
        height = { 250 }>
        <Pie data = { data01 }
        dataKey = "value"
        nameKey = "name"
        cx = "50%"
        cy = "50%"
        outerRadius = { 50 }
        fill = "#8884d8" />
        <Pie data = { data02 }
        dataKey = "value"
        nameKey = "name"
        cx = "50%"
        cy = "50%"
        innerRadius = { 60 }
        outerRadius = { 80 }
        fill = "#82ca9d"
        label />
        </PieChart>
        </div> 
        </div> 
        <div className = 'sale__chart-turnover c-6' >
        <h3 className = 'sale__chart-turnover-title' > Tỷ lệ doanh số của sản phẩm </h3> 
        <div className = 'sale__chart-turnover-content' >
        <BarChart width = { 460 }
        height = { 300 }
        data = { data }
        margin = {
            {
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }
        }>
        <CartesianGrid strokeDasharray = "3 3" />
        <XAxis dataKey = "name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey = "fake"
        fill = "#8884d8" />
        <Bar dataKey = "real"
        fill = "#82ca9d" />
        </BarChart> 
        </div> 
        </div> 
        </div> 
        <div className = 'sale__value row col c-12'> 
        {
            dataTurnover.map((item) => ( 
                <div className = 'sale__value-item col c-3'
                key = { item.title }>
                <p> { item.title } </p> 
                <div className = 'sale__box-value-item' > { item.value } đ </div> 
                </div>
            ))
        } 
        </div> 
        </div>
    )
}

export default Sale