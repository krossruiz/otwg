import React from 'react';
import { connect } from 'react-redux';
import SlideshowCarousel from '../components/SlideshowCarousel';
import { vhsStatic } from '../constants/imageLinks';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        console.log("Invest Today Page constructed.");
    }
    render() {
        return (
            <div>
                <div style={{ display: "flex", justifyContent: "center", backgroundImage: "url(" + vhsStatic + ")", width: "100vw" }}>
                    <SlideshowCarousel />
                </div>
                <div style={{ padding: "20px 0px 0px 0px" }}>
                    <h1
                        style={{ display: "inline", color: "#ffffff" }}
                    >
                        The spray can is their football,&nbsp;
						</h1>
                    <h1
                        style={{ display: "inline", color: "#ffa500" }}
                    >
                        and they need a field to play on.
						</h1>
                </div>
                <div style={{ padding: "20px" }}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/yLFeaTD2syg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div>
                    <h1
                        style={{ display: "inline", color: "#ffffff" }}
                    >
                        We must build #WORKOUTWALLS in parks for their mentoring and mastery.
						</h1>
                </div>
                <div style={{ backgroundColor: "#ffffff", padding: "10px", marginTop: "30px" }}>
                    <div>
                        <h1
                            style={{ display: "inline" }}
                        >
                            Posts From Our Blog
							</h1>
                    </div>
                </div>
                <h1 style={{color: "#ffa500"}}>Follow Us On Social Media</h1>
                    <a style={{fontSize: "2em", margin: "0px 15px"}} href="https://www.facebook.com/offthewallgraffiti">Facebook</a>
                    <a style={{fontSize: "2em", margin: "0px 15px"}} href="https://www.instagram.com/offthewallgraffiti/">Instagram</a>
                    <a style={{fontSize: "2em", margin: "0px 15px"}} href="https://twitter.com/offthewallgraff">Twitter</a>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return ({});
};

export default connect(mapStateToProps)(HomePage);