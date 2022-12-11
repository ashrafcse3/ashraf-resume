import React from 'react';

const Slider = ({ image, index, length }) => {
    return (
        <div id={`slide${index}`} className="carousel-item relative w-full">
            <img src={image} className="w-full" alt={`alt: ${image}`} />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={`#slide${index === 0 ? (length - 1) : (index - 1)}`} className="btn btn-circle">❮</a>
                <a href={`#slide${index === (length - 1) ? 0 : (index + 1)}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default Slider;