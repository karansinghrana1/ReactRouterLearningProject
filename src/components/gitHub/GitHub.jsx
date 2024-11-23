import React, { useEffect, useState } from 'react'

function GitHub() {

    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https:/api.github.com/users/karansinghrana1')
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
    }, [])
    return (
        <>
            <div className='text-center m-4 bg-gray-700 text-white p-4 text-3xl'>GitHub Repo: {data.public_repos} </div>
            <div className='text-center m-4 bg-gray-700 text-white p-4 text-3xl'>GitHub Followers: {data.followers} </div>
            <center>    <img src={data.avatar_url} alt="Git pfp" width="200px" />
            </center>
        </>

    )
}

export default GitHub