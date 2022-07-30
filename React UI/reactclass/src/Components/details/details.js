import React from 'react';
import axios from 'axios';
import '../../Styles/details.css';
import queryString from 'query-string';

// Class Component
class Details extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            restaurantData: {}
        }
    }

    componentDidMount() {
        const qs = queryString.parse(this.props.location.search);
        const restaurantId = qs.restaurant;
        axios(
            {
                method: 'GET',
                url: `http://localhost:3000/restaurant/getRestaurantById/${restaurantId}`,
                headers: { 'Content-Type': 'application/json' }
            }
        ).then(response => this.setState({ restaurantData: response.data })).catch()
    }


    render() {
        const { restaurantData } = this.state;
        return (<div>
            <div>
                <img src={restaurantData.image} className="detailMainPic" alt="" />
            </div>
            <h1 className='DetailHeader'>{restaurantData.name}</h1>
            <div className='tabs'>
                <div className='tab'>
                    <input id="tab-1" type="radio" checked name="tab-group-1" />
                    <label for="tab-1">Overview</label>
                    <div class="content">
                        <div class="about">About this place</div>
                        <div class="Detailhead">Cuisine</div>
                        <div class="Detailvalue">{restaurantData.cuisine}</div>
                        <div class="Detailhead">Average Cost</div>
                        <div class="Detailvalue">{`${restaurantData.min_price} for two people (approx)`}</div>
                    </div>
                </div>
                <div className='tab'>
                    <input id="tab-2" type="radio" name="tab-group-1" />
                    <label for="tab-2">Contact</label>
                    <div class="content">
                        <div class="Detailhead">Phone</div>
                        <div class="Detailvalue">{restaurantData.contact}</div>
                        <div class="Detailhead">Locality</div>
                        <div class="Detailvalue">{`${restaurantData.locality}, ${restaurantData.address}`}</div>
                        <div class="Detailhead">City</div>
                        <div class="Detailvalue">{`${restaurantData.city}`}</div>
                    </div>
                </div>
            </div>
        </div>);
    }
}

export default Details;
