import React from 'react';
import { connect } from 'react-redux';

class PodcastPage extends React.Component {
    constructor(props){
        super(props);
        console.log("Podcast Page constructed.");
    }
    render(){
        return(
            <div style={{display: "flex", justifyContent: "center"}}>
                <div 
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "0 20px",
                        backgroundColor: "#ff4400",
                        color: "#ffffff",
                        marginTop: "5vh"
                    }}
                >
                    <h1>Podcast Page Under Construction</h1>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return({});
};

export default connect(mapStateToProps)(PodcastPage);