import axios from 'axios'
import React from 'react'

export function getUserListApi() {
    return  axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo`)
 }