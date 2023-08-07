import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { REQUEST_URL } from '../../constants';
import userLogo from "../../img/user.png"
import AlbomCard from '../../Components/AlbumCard/AlbumCard';
import "./Albums.css"


const Albums = () => {

    let [userId, setUserId] = useState()
    let [alboms, setAlboms] = useState()
    let [user, setUser] = useState()
    let location = useLocation()

    useEffect(() => {
        let arr = location.pathname.split('/');
        let id = arr[arr.length - 1];
        setUserId(id);
    })

    useEffect(() => {
        let url = `${REQUEST_URL.alboms}?userId=${userId}`
        let url2 = `${REQUEST_URL.users}/${userId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setAlboms(data))
            .then(
                fetch(url2)
                    .then(res => res.json())
                    .then(data => setUser(data))
            )
    }, [userId])

    return (
        <>
            {user && alboms ?
                <div className='container'>
                    <div className='userBox'>
                       <img src={userLogo} alt='user' />
                       <div>
                        <h2>{user.name}</h2>
                        <p>{user.email}</p>
                       </div>
                    </div>
                    {alboms.map((album,index) => <AlbomCard album={album} num={index + 1} />)}
                </div>
                : null
            }

        </>

    );
}

export default Albums;
