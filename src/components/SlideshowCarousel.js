import React from 'react';
import { connect } from 'react-redux';
import { store } from '../index';
import { CAROUSEL_CYCLE_RIGHT, CAROUSEL_CYCLE_LEFT, CAROUSEL_SELECT_SLIDE_AT_INDEX } from '../redux/reducers/actionTypes';
import { slideshowCarouselSlideChange } from '../redux/reducers/actions';
import { slides, vhsStatic } from '../constants/imageLinks';
import { leftOrangeArrow, rightOrangeArrow } from '../constants/iconLinks';

class SlideshowCarousel extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            slideshowInterval: setInterval(function(){
                store.dispatch(slideshowCarouselSlideChange({ action: CAROUSEL_CYCLE_RIGHT }));
            }, 4000)
        }
    }

    resetSlideshowInterval(){
        clearInterval(this.state.slideshowInterval);
        this.state.slideshowInterval = setInterval(function(){
            store.dispatch(slideshowCarouselSlideChange({ action: CAROUSEL_CYCLE_RIGHT }));
        }, 4000);
    }

    changeSlide(params){
        switch (params.action){
            case CAROUSEL_CYCLE_RIGHT:
                store.dispatch(slideshowCarouselSlideChange({ action: CAROUSEL_CYCLE_RIGHT }));
                this.resetSlideshowInterval();
                break;
            case CAROUSEL_CYCLE_LEFT:
                store.dispatch(slideshowCarouselSlideChange({ action: CAROUSEL_CYCLE_LEFT }));
                this.resetSlideshowInterval();
                break;
            case CAROUSEL_SELECT_SLIDE_AT_INDEX:
                console.log("PARAMS", params);
                store.dispatch(slideshowCarouselSlideChange({ action: CAROUSEL_SELECT_SLIDE_AT_INDEX, newIndex: params.newIndex }));
                this.resetSlideshowInterval();
                break;
        }
    }

    render(){
        return(
            <div
                style={{
                    padding: "20px 20px 10px 20px"
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >
                    <div
                        style={{
                            fontWeight: "bold",
                            display: "inline-flex",
                            margin: "0% 2% 0% 0%",
                            padding: "10px",
                            cursor: "pointer",
                            userSelect: "none"
                        }}
                        onClick={this.changeSlide.bind(this, {action: CAROUSEL_CYCLE_LEFT})}
                    >
                        <img src={leftOrangeArrow} style={{width:"50px", height: "50px"}}></img>
                    </div>
                    <div style={{
                        display: "inline-flex",
                        alignContent: "center",
                        justifyContent: "center",
                        width: "100%"
                    }}>
                        <img
                            style={{borderRadius: "40px"}}
                            name="slide"
                            height="350px"
                            src={this.props.activeSlide}
                            alt="Error loading carousel images."
                            onClick={this.changeSlide.bind(this, {action: CAROUSEL_CYCLE_RIGHT})}
                        />
                    </div>
                    <div
                        style={{
                            fontWeight: "bold",
                            display: "inline-flex",
                            margin: "0% 0% 0% 2%",
                            padding: "10px",
                            cursor: "pointer",
                            userSelect: "none"
                        }}
                        onClick={this.changeSlide.bind(this, {action: CAROUSEL_CYCLE_RIGHT})}
                    >
                        <img src={rightOrangeArrow} style={{width:"50px", height: "50px"}}></img>
                    </div>
                </div>
                <div>{
                    slides.map(function (element, i) {
                        return (
                            <div
                                key={i}
                                style={{
                                    display: "inline-flex",
                                    width: "10px",
                                    height: "10px",
                                    backgroundColor: this.props.activeSlideIndex == i ? "#ffa500" : "#ffffff",
                                    borderRadius: "10px",
                                    margin: "20px 10px 0px 10px",
                                    cursor: "pointer",
                                    userSelect: "none"
                                }}
                                onClick={this.changeSlide.bind(this, {action: CAROUSEL_SELECT_SLIDE_AT_INDEX, newIndex: i})}
                            />
                        )
                    }, this)
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        slides: state.slideshowCarouselReducer.slides,
        activeSlide: state.slideshowCarouselReducer.activeSlide,
        activeSlideIndex: state.slideshowCarouselReducer.activeSlideIndex,
        slideCount: state.slideshowCarouselReducer.slideCount
    }
}

export default connect(mapStateToProps)(SlideshowCarousel);