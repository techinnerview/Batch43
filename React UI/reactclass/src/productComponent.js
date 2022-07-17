import './App.css';
import React from 'react';
import CarouselComponent from './carouselComponent';

class ProductComponent extends React.Component {
    render() {
        return (
            <div className="carousel-wrapper">
                <h1>This is a Product Component</h1>
                <CarouselComponent />
            </div>
        );
    }
}

export default ProductComponent;