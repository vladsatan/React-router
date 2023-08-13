import React from 'react';
import "./Loader.css";
import { ThreeCircles } from 'react-loader-spinner';

const Loader = () => {
    return (
        <div className='loader-container'>
            <ThreeCircles
                height="150"
                width="150"
                color="white"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="three-circles-rotating"
                outerCircleColor=""
                innerCircleColor=""
                middleCircleColor=""
            />
        </div>
    );
}

export default Loader;
