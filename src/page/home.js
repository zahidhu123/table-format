import React, { useEffect, useState } from 'react'
import { getUserListApi } from '../apiService';
import './home.css'


export default function Home() {

    const [user, setUser] = useState([]);


    useEffect(() => {
        console.log('zahid');
        getUserList();
    }, []);

    function getUserList() {
        getUserListApi().then((result) => {
            console.log(result.data);
            console.log(result.data['Time Series (5min)']);
            console.log(Object.keys(result.data['Time Series (5min)']).map((key, index) => [key, result.data['Time Series (5min)'][key]]));

            setUser(Object.keys(result.data['Time Series (5min)']).map((key) => [key, result.data['Time Series (5min)'][key]]));

        })
    }



    return (
        <div>
            <div className="container-fluid">
                <div className="row justify-content-center pt-5">
                    <div className="col-md-10">
                        <h1 className="heading pb-4">Demo</h1>
                    </div>
                    <div className="col-lg-10">
                        <table className='mb-5'>
                            <thead>
                                <tr>
                                    <th>DateTime</th>
                                    <th>Open</th>
                                    <th>High</th>
                                    <th>low</th>
                                    <th>Close</th>
                                    <th>Volume</th>
                                </tr>
                            </thead>
                            <tbody>
                                {user.map((data) => {
                                    return <tr>
                                        <td>{data[0]}</td>
                                        <td>{data[1]['1. open']}</td>
                                        <td>{data[1]['2. high']}</td>
                                        <td>{data[1]['3. low']}</td>
                                        <td>{data[1]['4. close']}</td>
                                        <td>{data[1]['5. volume']}</td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
