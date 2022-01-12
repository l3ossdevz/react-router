import React from 'react'
import { useParams } from 'react-router-dom'

const SayHi = () => {
    let params = useParams()
    return (
        <>
            <div>SayHi Page</div>
            <h2>Hello, {params.name}!</h2>
        </>
    )
}

export default SayHi
