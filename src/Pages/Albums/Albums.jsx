import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { REQUEST_URL } from '../../constants';
import { getAlbums } from '../../services/getAlbums';
import { getUser } from '../../services/getUser';
import userLogo from "../../img/user.png"
import AlbomCard from '../../Components/AlbumCard/AlbumCard';
import "./Albums.css"
import Loader from '../../Components/Loader/Loader';


const Albums = () => {

    let [userId, setUserId] = useState()
    let [alboms, setAlboms] = useState([])
    let [user, setUser] = useState({})
    let [isLoader, setIsLoader] = useState(true)
    let location = useLocation()

    useEffect(() => {
        let arr = location.pathname.split('/');
        let id = arr[arr.length - 1];
        setUserId(id);
    }, [location])

    useEffect(() => {
        setTimeout(() => setIsLoader(false), 1000)
    },[])

    useEffect(() => {

        if (userId) {
            let url = `${REQUEST_URL.alboms}?userId=${userId}`
            let url2 = `${REQUEST_URL.users}/${userId}`

            const getAlbumsData = async () => {
                let resAlboms = await getAlbums(url)
                setAlboms(resAlboms)
            }

            const getUserData = async () => {
                let resUser = await getUser(url2)
                setUser(resUser)
            }

            getAlbumsData()
            getUserData()
        }
    }, [userId])

    return (
        <>
            {isLoader ?

                <Loader />

                :

                <div className='container'>
                    <div className='userBox'>
                        <img src={userLogo} alt='user' />
                        <div>
                            <h2>{user.name}</h2>
                            <p>{user.email}</p>
                        </div>
                    </div>
                    {alboms.map((album, index) => <AlbomCard album={album} num={index + 1} />)}
                </div>
            }

        </>

    );
}

export default Albums;
