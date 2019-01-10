import React from 'react';
import { connect } from 'react-redux';
import './WorkoutWallsPage.css';
import { workoutWall } from '../constants/imageLinks';

class WorkoutWallsPage extends React.Component {
    constructor(props){
        super(props);
        console.log("Workout Walls page constructed.");
    }
    render(){
        return(
            <div style={{display: "flex", justifyContent: "center"}}>
                <div style={{width: "70%"}}>
                {/* <h1 className="workoutWallsWhiteHeader">Workout Walls</h1> */}
                <h1 className="workoutWallsOrangeHeader">
                    What if every park in the world had workout walls –
                    just like they have fields to practice on? What if
                    mural was a sport?
                </h1>
                <p className="workoutWallsWhiteText">
                    Somewhere in the middle is where you will find us,
                    cheering on the artist who practices like an athlete
                    and heroically goes big on walls which the city
                    builds for them to paint.
                </p>
                <img src={workoutWall} style={{width: "60%", maxWidth: "390px"}}></img>
                <p className="workoutWallsWhiteText">
                    We have partnered with ZGF Architects, specifically
                    Christopher Locke and Johnathan Sharp through their
                    A+ probono program to design the walls. We have
                    multiple iterations for different opportunities. We
                    are working with Great Western Park to install our
                    first wall… which has yet to be funded.
                </p>
                <p className="workoutWallsWhiteText">
                    The city of Los Angeles spends $1100 every hour on
                    graffiti abatement. We abate when we educate.
                </p>
                <p className="workoutWallsWhiteText">
                    #Workoutwalls and #muralwalls need to be built and 
                    we are out there advocating for just that. We work 
                    with your park department to start and then grow 
                    from there.
                </p>
                <p className="workoutWallsWhiteText">
                    Adding our M2ART4ALL program at the wall we ensure
                    that the artists develop and start to harness their
                    given talents, at the wall and off the wall. It is
                    our promise that this will alter the public
                    perception of many young artists and build the
                    self-esteem of all who participate with the walls.
                    It’s vital to a city’s youth to give the hidden
                    street artist a place to create and grow, just like
                    it is to give other’s a basketball court.                   
                </p>
                <p className="workoutWallsWhiteText">
                    The alternative is possibly jail or death for our
                    artists and we cannot afford that any longer. It’s
                    our parental responsibility, as city dwellers, to
                    provide and nurture these unseen artists.
                </p>
                <p className="workoutWallsWhiteText">
                    When we harness their energy, they start to behave
                    differently toward themselves. This will provide a
                    direct and positive impact on their education, just 
                    like sports do.                   
                </p>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return({});
};

export default connect(mapStateToProps)(WorkoutWallsPage);