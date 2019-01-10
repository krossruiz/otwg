import React from 'react';
import { connect } from 'react-redux';
import './CurriculumPage.css';
import { Link } from 'react-router-dom';
import { ContactRoute } from '../constants/routerRoutes';
class CurriculumPage extends React.Component {
    constructor(props){
        super(props);
        console.log("Curriculum Page constructed.");
    }
    render(){
        return(
            <div style={{display: "flex", justifyContent: "center"}}>
                <div style={{width: "70%"}}>
                {/* <h1 className="curriculumWhiteHeaderText">Curriculum</h1> */}
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Z2we4yyiF5Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <div>
                    <h1 className="curriculumHeader">M2ART & DESIGN</h1>
                    <p className="curriculumWhiteText">
                        A year long 10 session (or your version of a year)
                        college-prep, University of California A-G approved curriculum designed
                        to create young professional artists by focussing on art history,
                        fundamentals in fine art and design on canvas and wall work.
                    </p>
                    <h1 className="curriculumHeader">M2ART4ALL – MAKING MURAL ART</h1>
                    <p className="curriculumWhiteText">
                        After school program designed as 24, 1 hour sessions which build
                        on foundational knowledge of fine art and design, in aerosol, bucket
                        paint and other mediums. We add competition into the program toward
                        the end which fosters a team 
                        environment and elevates the skills of the artists.
                    </p>
                    <h1 className="curriculumHeader">
                        You can license these programs directly from us. You can hire us to
                        teach at your site as well. <Link to={ContactRoute}>Contact</Link> us for more information.
                    </h1>
                </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return({});
};

export default connect(mapStateToProps)(CurriculumPage);