import React from 'react';
import { connect } from 'react-redux';
import './InvestTodayPage.css';

class InvestTodayPage extends React.Component {
    constructor(props) {
        super(props);
        console.log("Invest Today Page constructed.");
    }
    render() {
        return (
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ width: "70%" }}>
                    <div>
                        {/* <h1 className="investTodayWhiteText">Invest Today</h1> */}
                        <h1 className="curriculumHeader">Please take a moment to consider four questions that we answer everyday with our work.</h1>
                        <h2 className="curriculumQuestion">Why does the design world need our artists?</h2>
                        <p className="investTodayWhiteText">
                            We are filling a very important void which has not been addressed before.
                            Art schools need our kids. They have told us this. Their issue is finding them.
                            They easily get the same type of student, one who is helicoptered in as AP art
                            students, who haven’t lived and struggled like our students have. The curriculums
                            we are developing are essential to continuation high schools and after school programs
                            because they create a road map toward higher education. Our students have real
                            experience with issues that face art and design head on. We have AP Art for the street.
            </p>
                        <h2 className="curriculumQuestion">How does hip-hop pave the way?</h2>
                        <p className="investTodayWhiteText">
                            In the 80’s, the music industry was faced with rap and thought it was a fad. It had a
                            reputation of only being negative and for gangsters. Few knew that hip-hop was just
                            getting started. Urban art is not a fad. Graffiti is not going to die… no matter how
                            many walls the city paints over. You can’t abate a medium. You can only harness it, see
                            where it’s going and direct it as best you can. We provide these artists with more
                            outlets, education and opportunity.
            </p>
                        <h2 className="curriculumQuestion">How did the kids who tresspassed into backyard swimming pools to skate end up getting skateparks?</h2>
                        <p className="investTodayWhiteText">
                            Tony Hawk Foundation. Advocates for youth created the first skatepark. We say, the
                            spray can is their football, but we don’t give them any fields. Adding workout walls to
                            parks is a direct parallel to skate park being added to parks. We are focusing our
                            efforts on having walls erected in all the places that they need to be – public spaces.
                            Workout walls build mastery. Especially when you have programming at the parks to support
                            it. We have equated it to starting AYSO (American Youth Soccer Organization) for the
                            urban arts.
            </p>
                        <h2 className="curriculumQuestion">What's at stake if we don't help?</h2>
                        <p className="investTodayWhiteText">
                            These young people have a road that leads to jail or death without intervention. Our charity
                            is a welcomed and trusted adjustment to that path. We have curbed artist’s recidivism through
                            our work.  Once an artist’s energy is harnessed through art, at the wall, they start to want
                            more for themselves.  We build hope. The average age for starting graffiti is 13 years old.
                            We have asked our students how they thought our program would have helped them in school, one
                            of our artists said, “I would have been a global muralist by now.”
            </p>
                        <p className="investTodayWhiteText">
                            Our charity’s platform supports the STEAM initiative in all schools which means adding ART
                            back into the core standards based learning.
            </p>
                        <p className="investTodayWhiteTExt">
                            We need your belief and investment to get us there.
            </p>
                        <p className="investTodayWhiteText">
                            Every time we engage kids in these exercises, they have a moment where they see themselves
                            differently.  It’s in those split seconds that a person’s path is shifted.
            </p>
                        <p className="investTodayWhiteText">
                            You know it. This is real work, with real impact.
            </p>
                        <p className="investTodayWhiteText">
                            Thank you!
            </p>
                        <p className="investTodayWhiteText">
                            We are a Guidestar Charity gold member. We are a 501c3 charity. All donations are tax deductible
                            and you can help with Paypal, or credit card or mail in a check to our headquarters. You can
                            also choose us as your charity of choice with ebay and smile.amazon.
            </p>
                        <p className="investTodayWhiteText">
                            Remember too that in kind donations of materials, automobiles, homes, computers are all possible
                            and provide much to this community.
            </p>
                        <p className="investTodayWhiteText">
                            5807 Tobias Ave Sherman Oaks, CA 91411
            </p>
                    </div>
                </div>
                <div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return ({});
};

export default connect(mapStateToProps)(InvestTodayPage);