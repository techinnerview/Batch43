import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

class CarouselComponent extends React.Component {

    render() {
        return (
            <div className="carousel-wrapper">
                <Carousel>
                    <div>
                        <img src="breakfast.jpg" />
                    </div>
                    <div>
                        <img src="lunch.jpg" />
                    </div>
                    <div>
                        <img src="dinner.png" />
                    </div>
                </Carousel>
            </div>
        );
    }
}

export default CarouselComponent;