import React from 'react'

import ImgOcCho from '../../static/image/9999521de6e71db944f6.jpg'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

import './css/statistical.css'

const dataUserAccess = [{
        title: 'Jan',
        timeAccess: 2000
    },
    {
        title: 'Feb',
        timeAccess: 3000
    },
    {
        title: 'Mar',
        timeAccess: 2200
    },
    {
        title: 'Apr',
        timeAccess: 3000
    },
    {
        title: 'May',
        timeAccess: 4000
    },
    {
        title: 'Jun',
        timeAccess: 2700
    },
    {
        title: 'Jul',
        timeAccess: 2400
    },
    {
        title: 'Aug',
        timeAccess: 3800
    },
    {
        title: 'Sep',
        timeAccess: 2500
    },
    {
        title: 'Oct',
        timeAccess: 3500
    },
    {
        title: 'Nov',
        timeAccess: 5000
    },
    {
        title: 'Dec',
        timeAccess: 4600
    }
]

const dataNumberSearch = [

    {
        title: 'Jan',
        numberSearch: 200
    },
    {
        title: 'Feb',
        numberSearch: 300
    },
    {
        title: 'Mar',
        numberSearch: 220
    },
    {
        title: 'Apr',
        numberSearch: 400
    },
    {
        title: 'May',
        numberSearch: 500
    },
    {
        title: 'Jun',
        numberSearch: 340
    },
    {
        title: 'Jul',
        numberSearch: 400
    },
    {
        title: 'Aug',
        numberSearch: 600
    },
    {
        title: 'Sep',
        numberSearch: 500
    },
    {
        title: 'Oct',
        numberSearch: 550
    },
    {
        title: 'Nov',
        numberSearch: 500
    },
    {
        title: 'Dec',
        numberSearch: 700
    }

]

const Statistical = () => {
    return ( 
        <div className = 'statistical' >
        <div className = 'statistical__user-access' >
        <h3 > Time User Access </h3> <div className = 'statistical__user-access-chart'>
        <LineChart width = { 800 }
        height = { 228 }
        data = { dataUserAccess }
        margin = {
            {
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }
        } >
        <CartesianGrid strokeDasharray = "3 3" />
        <XAxis dataKey = "title" /> 
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type = "monotone"
        dataKey = "timeAccess"
        stroke = "#8884d8"
        activeDot = {
            { r: 8 } }
        /> 
        </LineChart> 
        </div> 
        </div> 
        <div className = 'statistical__number-search' >
        <h3 > Number Search </h3> 
        <div className = 'statistical__number-search-chart' >
        <LineChart width = { 800 }
        height = { 228 }
        data = { dataNumberSearch }
        margin = {
            {
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }
        }>
        <CartesianGrid strokeDasharray = "3 3" />
        <XAxis dataKey = "title" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type = "monotone"
        dataKey = "numberSearch"
        stroke = "red"
        activeDot = {
            { r: 8 } }
        /> </LineChart> 
        </div> 
        </div> 
        </div>
    )
}

export default Statistical