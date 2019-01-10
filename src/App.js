import React from 'react';
import './App.css';
import { fadeIn } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import { connect } from 'react-redux';
import NavBar from './components/NavBar';
import SlideshowCarousel from './components/SlideshowCarousel';
import { Link, Route, withRouter } from 'react-router-dom';
import { HomeRoute, InvestTodayRoute, CurriculumRoute, WorkoutWallsRoute, PodcastRoute, InternsRoute, AboutUsRoute, ContactRoute, BlogRoute } from './constants/routerRoutes';
import HomePage from './pages/HomePage';
import InvestTodayPage from './pages/InvestTodayPage';
import CurriculumPage from './pages/CurriculumPage';
import WorkoutWallsPage from './pages/WorkoutWallsPage';
import PodcastPage from './pages/PodcastPage';
import InternsPage from './pages/InternsPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';


const styles = {
  fade: {
    animation: 'x 0.76s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn')
  }
}

class App extends React.Component {

	constructor(props){
		super(props);
		this.state = {};
	}

	gotoHome(){
		let production_version = false;
		if(!production_version){
			window.location.href = "http://localhost:3000/home";
		}
	}

  render() {
    return (
			<div className="App" style={{ backgroundColor: "#000000" }}>
				{/* <Link to={HomeRoute}>Home</Link> */}
				<StyleRoot>
					<div style={[styles.fade, { 
						// backgroundImage: "#000000",
					height: "8vh" }]}>
						<img
							style={{
								height: '100%',
								cursor: 'pointer',
								userSelect: false	
							}}
							src="OTWG.org-horizontal.png"
							alt="Error loading logo"
							onClick={this.gotoHome}
						></img>
					</div>
					<NavBar/>
					<Route path={HomeRoute} component={HomePage}/>
					<Route path={InvestTodayRoute} component={InvestTodayPage}/>
					<Route path={CurriculumRoute} component={CurriculumPage}/>
					<Route path={WorkoutWallsRoute} component={WorkoutWallsPage}/>
					<Route path={PodcastRoute} component={PodcastPage}/>
					<Route path={InternsRoute} component={InternsPage}/>
					<Route path={AboutUsRoute} component={AboutUsPage}/>
					<Route path={ContactRoute} component={ContactPage}/>
					<Route path={BlogRoute} component={BlogPage}/>
					<footer style={{height: "100px"}}></footer>
				</StyleRoot>
			</div>
    );
  }
}

const mapStateToProps = state => {
	console.log(state);
	return {
		testBool: state.testReducer.testBool,
		navBar: state.navBarReducer
	};
};

export default withRouter(connect(mapStateToProps)(App));
