import axios from 'axios'
import React, { useEffect } from 'react'
import apiUrl from "../core/api"

const Home = () => {
    useEffect(() => {
        axios.get(`${apiUrl}/Category/GetAllCategories`)
            .then(res => {
                console.log("res : ", res)
            })
    }, [])
    return (
        <div>
            Home
        </div>
    )
}

export default Home
