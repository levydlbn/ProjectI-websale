import React from 'react'

import './css/customer.css'

import IconUser from '../.././static/image/165-1653686_female-user-icon-png-download-user-colorful-icon.png'
import IconEye from '../.././static/image/197704.png'

import { PieChart, Pie, Sector, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const dataCustomerAge = [
    { name: '13-17 years', value: 400 },
    { name: '18-24 years', value: 300 },
    { name: '25-45 years', value: 500 },
    { name: '45+ years ', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return ( <
        text x = { x }
        y = { y }
        fill = "white"
        textAnchor = { x > cx ? 'start' : 'end' }
        dominantBaseline = "central" > { `${(percent * 100).toFixed(0)}%` } <
        /text>
    );
};

const dataCustomerGender = [

    {
        name: 'Jan',
        male: 200,
        female: 100
    },
    {
        name: 'Feb',
        male: 400,
        female: 200
    },
    {
        name: 'Mar',
        male: 300,
        female: 160
    },
    {
        name: 'Apr',
        male: 230,
        female: 300
    },
    {
        name: 'May',
        male: 530,
        female: 220
    },
    {
        name: 'Jun',
        male: 400,
        female: 370
    },
    {
        name: 'Jul',
        male: 600,
        female: 300
    },
    {
        name: 'Aug',
        male: 560,
        female: 230
    },
    {
        name: 'Sep',
        male: 700,
        female: 360
    },
    {
        name: 'Oct',
        male: 600,
        female: 300
    },
    {
        name: 'Nov',
        male: 560,
        female: 400
    },
    {
        name: 'Dec',
        male: 630,
        female: 360
    }

]

const Customer = ({ listUser }) => {
    return ( <
        div className = 'customer row c-12' >
        <
        div className = 'customer__right col c-8' >
        <
        div className = 'customer__right-above row col c-12' >
        <
        div className = 'customer__age-chart c-6' >
        <
        h3 > Customer Age < /h3> <
        PieChart width = { 200 }
        height = { 200 } >
        <
        Pie data = { dataCustomerAge }
        cx = "50%"
        cy = "50%"
        labelLine = { false }
        label = { renderCustomizedLabel }
        outerRadius = { 80 }
        fill = "#8884d8"
        dataKey = "value" >
        {
            dataCustomerAge.map((entry, index) => ( <
                Cell key = { `cell-${index}` }
                fill = { COLORS[index % COLORS.length] }
                />
            ))
        } <
        /Pie> <
        /PieChart> <
        div className = 'customer__age-chart-note' >
        <
        div className = 'customer__age-chart-note-item' >
        <
        div className = 'customer__age-chart-note-item-box one' >
        <
        span > 13 - 17 tuổi < /span> <
        /div> <
        div className = 'customer__age-chart-note-item-box two' >
        <
        span > 18 - 24 tuổi < /span> <
        /div> <
        /div>

        <
        div className = 'customer__age-chart-note-item' >
        <
        div className = 'customer__age-chart-note-item-box three' >
        <
        span > 25 - 45 tuổi < /span> <
        /div> <
        div className = 'customer__age-chart-note-item-box fore' >
        <
        span > 45 + tuổi < /span> <
        /div> <
        /div>

        <
        /div> <
        /div> <
        div className = 'customer__new c-6' >
        <
        div className = 'customer__new-title' >
        <
        h4 > New Customer < /h4> <
        /div> <
        ul className = 'customer__new-list' >
        <
        li className = 'customer__new-list-item' >
        <
        img src = { IconUser }
        className = 'customer__new-list-item-icon'
        alt = 'adfs' / >
        <
        p className = 'customer__new-list-item-name' > Lê Thị Thảo Vân < /p> <
        /li> <
        li className = 'customer__new-list-item' >
        <
        img src = { IconUser }
        className = 'customer__new-list-item-icon'
        alt = 'adfs' / >
        <
        p className = 'customer__new-list-item-name' > Nguyễn Thanh Tùng < /p> <
        /li> <
        li className = 'customer__new-list-item' >
        <
        img src = { IconUser }
        className = 'customer__new-list-item-icon'
        alt = 'adfs' / >
        <
        p className = 'customer__new-list-item-name' > Nguyễn Thị Thùy Trang < /p> <
        /li> <
        li className = 'customer__new-list-item' >
        <
        img src = { IconUser }
        className = 'customer__new-list-item-icon'
        alt = 'adfs' / >
        <
        p className = 'customer__new-list-item-name' > Ngô Thanh Vân < /p> <
        /li> <
        li className = 'customer__new-list-item' >
        <
        img src = { IconUser }
        className = 'customer__new-list-item-icon'
        alt = 'adfs' / >
        <
        p className = 'customer__new-list-item-name' > Trần Anh Tú < /p> <
        /li> <
        li className = 'customer__new-list-item' >
        <
        img src = { IconUser }
        className = 'customer__new-list-item-icon'
        alt = 'adfs' / >
        <
        p className = 'customer__new-list-item-name' > Lê Trần Bảo Ngọc < /p> <
        /li> <
        /ul>

        <
        /div>

        <
        /div> <
        div className = 'customer__right-below' >
        <
        h3 > Customer Gender < /h3> <
        LineChart width = { 610 }
        height = { 240 }
        data = { dataCustomerGender }
        margin = {
            {
                top: 5,
                right: 30,
                left: 14,
                bottom: 5,
            }
        } >
        <
        CartesianGrid strokeDasharray = "3 3" / >
        <
        XAxis dataKey = "name" / >
        <
        YAxis / >
        <
        Tooltip / >
        <
        Legend / >
        <
        Line type = "monotone"
        dataKey = "male"
        stroke = "#8884d8"
        activeDot = {
            { r: 8 } }
        /> <
        Line type = "monotone"
        dataKey = "female"
        stroke = "#82ca9d" / >
        <
        /LineChart> <
        /div> <
        /div> <
        div className = 'customer__left col c-4' >
        <
        h3 > List Customer < /h3> <
        div className = 'customer__list' > {
            listUser.map((item) => ( <
                div className = 'customer__list-item' >
                <
                div className = 'customer__list-item-info' >
                <
                img src = { IconUser }
                className = 'customer__new-list-item-icon'
                alt = 'sdfsdf' / >
                <
                span > { item.email } < /span> <
                /div> <
                div className = 'customer__list-item-active-state' >
                <
                img src = { IconEye }
                className = 'customer__list-item-active-state-icon'
                alt = 'sfsdf' / >
                <
                span style = {
                    { color: 'blue' } } > online < /span> <
                /div> <
                /div>
            ))
        } <
        /div> <
        /div> <
        /div>
    )
}

export default Customer