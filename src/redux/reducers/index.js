import { combineReducers } from "redux";
import testReducer from "./testReducer";
import navBarReducer from "./navBarReducer";
import slideshowCarouselReducer from "./slideshowCarouselReducer";
export default combineReducers({ testReducer, navBarReducer, slideshowCarouselReducer });