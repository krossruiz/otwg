import React from 'react';
import { connect } from 'react-redux';
import './AboutUsPage.css';
import { OTWG_Family, PaulieandMauraBW } from '../constants/imageLinks';

class AboutUsPage extends React.Component {
    constructor(props) {
        super(props);
        console.log("About Us Page constructed.");
    }
    render() {
        return (
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{width: "70%"}}>
                    {/* <h1 className="aboutUsTitle">About Us</h1> */}
                    <div>
                        <img src={OTWG_Family} style={{ width: "100%", maxWidth: "800px" }}></img>
                    </div>
                    <h1 className="aboutUsHeader">Our Mission</h1>
                    <h2 className="aboutUsOrangeText">
                        To generate an educated, global, unified body of artists who are
                        fully self-expressed & on point to change the world through their
                        creativity.
                    </h2>
                    <h2 className="aboutUsOrangeText">
                        To build a global strong hold in art education for urban artists with our unique curriculums.
                    </h2>
                    <h2 className="aboutUsOrangeText">
                        To advocate and build WORKOUT WALLS at parks and in public spaces for mastery and mentoring.
                    </h2>
                    <h2 className="aboutUsOrangeText">
                        To foster competition and sport through our after school programs.
                    </h2>
                    <h2 className="aboutUsOrangeText">
                        To bring art to all through our mobile paint walls at events.
                    </h2>
                    <h2 className="aboutUsOrangeText">
                        To amplify the voices of these students and their stories through our podcasts and filmed content.
                    </h2>
                    <h1>Our Founders</h1>
                    <div>
                        <img src={PaulieandMauraBW} style={{ width: "40vw", maxWidth: "450px" }}></img>
                    </div>
                    <p className="aboutUsWhiteText">
                        Our co-founders, Maura P. McCarthy and Paul A. Nassar are dedicated to the well-being of artists
                        and the development of ground-breaking programs which shift the landscape of higher education,
                        arts opportunity and problem solving while unifying artists across the globe to develop a web of
                        creative thinkers poised to change the world through their work.
                    </p>
                    <p className="aboutUsWhiteText">
                        She has a BFA from the University of Michigan and has worked as a creative director with Warner
                        Bros Records, Disney, and Mattel. She worked for years at Nestle USA managing an annual packaging
                        budget of $13,000,000. She now writes, produces and directs on behalf of the charity and on
                        personal projects in the form of documentaries, shorts and screenplays. He studied economics at
                        the University of Dundee, Scotland, has shown his work across the US in over 50 curated shows.
                        Originated multiple events to serve the creative community in New York City, where he is a native.
                        His dedication to his craft has him collaborating or serving the cause everyday, because he loves
                        it.
                    </p>
                    <p className="aboutUsWhiteText">
                        They hope that Off The Wall becomes a phrase synonymous with daring, self-expressed outrageousness
                        in any medium and that their work in the street art community generates a ground swell of artists
                        for the future unlike anything we have ever witnessed.
                    </p>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return ({});
};

export default connect(mapStateToProps)(AboutUsPage);