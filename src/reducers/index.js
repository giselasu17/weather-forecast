import { combineReducers } from 'redux';
import WeatherReducer from '../reducers/WeatherReducer';

const rootReducer = combineReducers({
    weather: WeatherReducer
});

export default rootReducer;