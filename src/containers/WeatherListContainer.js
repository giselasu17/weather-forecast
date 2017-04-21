import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/googleMap';

class WeatherListContainer extends Component {
    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map((weather) => weather.main.temp);
        const pressures = cityData.list.map((weather) => weather.main.pressure);
        const humiditys = cityData.list.map((weather) => weather.main.humidity);
        const lon = cityData.city.coord.lon;
        const lat = cityData.city.coord.lat;
        return (
            <tr key = {name}>
                <td>{<GoogleMap lon = {lon} lat = {lat}/>}</td>
                <td><Chart data = {temps}  color = "blue" units = "K" /></td>
                <td><Chart data = {pressures}  color = "orange" units = "hPa" /> </td>
                <td><Chart data = {humiditys}  color = "green" units = "%" /></td>
            </tr>
        )
    }

    render () {
        return (
            <div className = "table-responsive">
                <table className = "table table-hover"> 
                    <thead>
                        <tr>
                            <th>City</th>
                            <th>Temperature (K)</th>
                            <th>Pressure (hPa)</th>
                            <th>Humidity (%)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.weather.map(this.renderWeather)}
                    </tbody>
                </table>
            </div>
        );
    }
}
function mapStateToProps (state) {
    return {
        weather: state.weather
    }
}

export default connect(mapStateToProps)(WeatherListContainer);