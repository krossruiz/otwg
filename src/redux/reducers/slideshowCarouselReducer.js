import { slides } from '../../constants/imageLinks';
import { SLIDESHOW_CAROUSEL_SLIDE_CHANGE, CAROUSEL_CYCLE_RIGHT, CAROUSEL_CYCLE_LEFT, CAROUSEL_SELECT_SLIDE_AT_INDEX } from '../../redux/reducers/actionTypes';

const initialState = {
    activeSlideIndex: 0,
    activeSlide: slides[0],
    slideCount: slides.length
};

const slideshowCarouselReducer = (state = initialState, action) => {
    let newState = {
        ...state
    }
    switch (action.type) {
        case (SLIDESHOW_CAROUSEL_SLIDE_CHANGE):
            switch (action.payload.action) {
                case CAROUSEL_CYCLE_RIGHT:
                    if (newState.activeSlideIndex + 1 >= slides.length) {
                        newState.activeSlideIndex = 0;
                    }
                    else {
                        newState.activeSlideIndex++;
                    }
                    newState.activeSlide = slides[newState.activeSlideIndex];
                    return newState;
                case CAROUSEL_CYCLE_LEFT:
                    if (newState.activeSlideIndex - 1 < 0) {
                        newState.activeSlideIndex = slides.length - 1
                    }
                    else {
                        newState.activeSlideIndex--;
                    }
                    newState.activeSlide = slides[newState.activeSlideIndex];
                    return newState;
                case CAROUSEL_SELECT_SLIDE_AT_INDEX:
                    try {
                        newState.activeSlideIndex = action.payload.newIndex;
                    }
                    catch (e) {
                        console.log("Slide array index out of bounds.");
                    }
                    newState.activeSlide = slides[newState.activeSlideIndex];
                    console.log(newState);
                    return newState;
                default: {
                    return state;
                }
            }
        default:
            return state;
    }
};

export default slideshowCarouselReducer;