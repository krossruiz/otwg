import React from 'react';
import { connect } from 'react-redux';
import './InternsPage.css';
import { jodiIntern, perlaIntern, cailaIntern } from '../constants/imageLinks';

class InternsPage extends React.Component {
    constructor(props){
        super(props);
        console.log("Interns Page constructed.");
    }
    render(){
        return(
            <div style={{display: "flex", justifyContent: "center"}}>
                <div
                    style={{width: "70%"}}
                >
                    {/* <h1 className="internsWhiteHeaderText">Interns</h1> */}
                    <h1 className="internsOrangeHeaderText">Karla Ponce</h1>
                    <p className="internsWhiteParagraphText">
                        Our Fall 2017 intern was Karla Ponce and she was a force!
                        She received credits for makin’ art and changin’ lives
                        with us! (seen above with Maura)
                    </p>
                    <h1 className="internsOrangeHeaderText">Jodi</h1>
                    <p className="internsWhiteParagraphText">
                        But first we forgot way back when to acknowledge our
                        first intern – JODI! She was a high school intern and we
                        adored her! She organized, scanned, printed tee shirts,
                        told us about synesthesia and entertained us with her
                        quick, quiet wit. WE MISS YOU GIRL!
                    </p>
                    <img style={{maxHeight: "390px"}} src={jodiIntern}></img>
                    <h1 className="internsOrangeHeaderText">Perla</h1>
                    <p className="internsWhiteParagraphText">
                        Next is PERLA – She is an undergrad Student at California
                        State University Northridge, where she is studying
                        Creative Writing and the Arts. Perla is also involved with
                        Young Warriors, a non-profit at Tia Chucha’s cultural
                        bookstore, where the youth help youth through the arts and
                        healing. This spring she is volunteering for Tia Chucha’s
                        in their grant committee.
                    </p>
                    <img style={{maxHeight: "390px"}} src={perlaIntern}></img>
                    <p className="internsWhiteParagraphText">
                        She is grateful for her community and how the arts have 
                        changed her life in transformative ways. She is going to
                        continue giving back to her community after college and so
                        forth. Lover of the arts!
                    </p>
                    <p className="internsWhiteParagraphText">
                        Here’s where her focus will be:
                    </p>
                    <p className="internsWhiteParagraphText">
                        Brand Management : how to work inside an existing brand language via social media and business? How to add value from an outside observer P.O.V.
                    </p>
                    <p className="internsWhiteParagraphText">
                        Curriculum Development : what does it take to write unique programs which are proprietary and relevant to the business/customer base.
                    </p>
                    <p className="internsWhiteParagraphText">
                        Non-profit Management : audit what work is needed on a daily basis and within a quarter/semester’s length of time. Where are your current skill sets already at an advantage? What other skills are needed from your view.
                    </p>
                    <h1 className="internsOrangeHeaderText">Caila</h1>
                    <p className="internsWhiteParagraphText">
                        And you all know CAILA – the reason the charity was started to begin with… Here is what we hope to have happen from her University of Oregon, School of Art internship :
                    </p>
                    <img style={{maxHeight: "390px"}} src={cailaIntern}></img>
                    <p className="internsWhiteParagraphText">
                        Community Liaison: Caila helped establish relations with the Park’s department in Eugene on behalf of our M2ART – Making Mural Art program. This required her to take meetings with the representatives and with us to coordinate conversations. She also is our liaison for the Sunshine Sessions, Eugene’s second music festival where we are featured for uniting community through paint. She will also help oversee a talk that the co-founder will give at the event. There is building; coordinating and meetings needed for this event on June 24th that she will do on our behalf.
                    </p>
                    <p className="internsWhiteParagraphText">
                        Artist Relations: Caila worked with local and Los Angeles based artists about their work. She routinely was available for critique on work via instagram and text. Her insights are based in her education and experience as a working student artist. She understands the student’s backgrounds and drive to create so she is a great asset when they seek guidance. She is more than a peer to them.
                    </p>
                    <p className="internsWhiteParagraphText">
                        Guest Social Media Influencer: Caila took over our instagram and snapchat to show to our fans what it looks like to be in college studying art. This is invaluable because many of our students have not graduated high school and are already in their 20’s and college seems very un-relatable, she makes it seem normal and achievable.
                    </p>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return({});
};

export default connect(mapStateToProps)(InternsPage);