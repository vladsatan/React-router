import React from 'react';
import "./AlbumCard.css";
import { REQUEST_URL } from '../../constants';
import { useState } from 'react';

const AlbomCard = (props) => {

    let { album, num } = props;
    const [photo, setPhoto] = useState()
    const [isOpen, setIsOpen] = useState(false)

    const getPhoto = () => {
        fetch(`${REQUEST_URL.photo}?albumId=${album.id}`)
            .then(res => res.json())
            .then(photo => setPhoto(photo[0].thumbnailUrl))
        setIsOpen(!isOpen)
    }

    return (
        <div className='albom-card'>
            <div className='albom-card-flex'>
                <h2>{num}</h2>
                <p>{album.title}</p>
                <button onClick={() => getPhoto()}>{isOpen? "Close" : "Photo"}</button>
            </div>
            {isOpen && photo ?
                <div className='photo-box'>
                    <h3>album photo</h3>
                    <img src={photo} alt='photo' />
                </div>
                : null}

        </div>
    );
}

export default AlbomCard;
