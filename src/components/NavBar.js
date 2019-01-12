import React from 'react';
import { zoomInLeft } from 'react-animations';
import { navBarItemOnMouseSet } from '../redux/reducers/actions';
import Radium from 'radium';
import { INVEST_TODAY_MENU_ITEM_ID, CURRICULUM_MENU_ITEM_ID, WORKOUT_WALLS_MENU_ITEM_ID, PODCAST_MENU_ITEM_ID, 
    INTERNS_MENU_ITEM_ID, ABOUT_US_MENU_ITEM_ID, CONTACT_MENU_ITEM_ID, BLOG_MENU_ITEM_ID, HOME_MENU_ITEM_ID } from '../constants/navBarMenuItems';
import { connect } from 'react-redux';
import { store } from '../index';
import './NavBar.css';
import { NavLink } from 'react-router-dom';
import { InvestTodayRoute, CurriculumRoute, WorkoutWallsRoute, PodcastRoute, InternsRoute, AboutUsRoute, ContactRoute, BlogRoute, HomeRoute } from '../constants/routerRoutes';

//Navbar items must be wrapped in a <StyleRoot> component from 'radium'.

const styles = {
    zoomInLeft: {
        animation: 'x 0.5s 0.0s',
        animationName: Radium.keyframes(zoomInLeft, 'zoomInLeft')
    }
}

function onNavBarItemMouseHandler(params, event) {
    let dispatchParams = {};
    switch(params.mouseEventType){
        case("Enter"):
            dispatchParams = {
                itemId: params.itemId,
                newOnMouseValue: true
            }
            console.log(this.props);
            store.dispatch(navBarItemOnMouseSet(dispatchParams));
            break;
        case("Leave"):
            dispatchParams = {
                itemId: params.itemId,
                newOnMouseValue: false
            }
            store.dispatch(navBarItemOnMouseSet(dispatchParams));
            break;
        default:
            break;
    }
}

class MenuItem extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div
                className="menuitem"
                onMouseEnter={onNavBarItemMouseHandler.bind(this, {itemId: this.props.itemId, mouseEventType: "Enter"})}
                onMouseLeave={onNavBarItemMouseHandler.bind(this, {itemId: this.props.itemId, mouseEventType: "Leave"})}
            >
                <NavLink
                    to={this.props.routeName}
                    activeClassName="activeMenuItem"
                    className="menuitem"
                >
                    {this.props.displayName}
                </NavLink>
            </div>
        );
    }
}

function NavBar() {
    return (
        <div style={{display: "flex", backgroundColor: "#000000", alignItems: "center", justifyContent: "center"}}>
            <MenuItem 
                displayName="Home"
                routeName={HomeRoute}
                itemId={HOME_MENU_ITEM_ID}
            />
            <MenuItem displayName="About Us" routeName={AboutUsRoute} itemId={ABOUT_US_MENU_ITEM_ID} />
            <MenuItem displayName="Curriculum" routeName={CurriculumRoute} itemId={CURRICULUM_MENU_ITEM_ID} />
            {/* <MenuItem displayName="Workout Walls" routeName={WorkoutWallsRoute} itemId={WORKOUT_WALLS_MENU_ITEM_ID} /> */}
            {/* <MenuItem displayName="Podcast" routeName={PodcastRoute} itemId={PODCAST_MENU_ITEM_ID} /> */}
            <MenuItem displayName="Interns" routeName={InternsRoute} itemId={INTERNS_MENU_ITEM_ID} />
            <MenuItem displayName="Contact" routeName={ContactRoute} itemId={CONTACT_MENU_ITEM_ID} />
            <MenuItem 
                displayName="Invest"
                routeName={InvestTodayRoute}
                itemId={INVEST_TODAY_MENU_ITEM_ID}
            />
            {/* <MenuItem displayName="Blog" routeName={BlogRoute} itemId={BLOG_MENU_ITEM_ID} /> */}
        </div>
    )
}

const mapStateToProps = state => {
	return {};
};

connect(mapStateToProps)(MenuItem);
export default NavBar;