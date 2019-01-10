import React from 'react';
import { connect } from 'react-redux';
import './ContactPage.css'

class ContactPage extends React.Component {
    constructor(props){
        super(props);
        console.log("Contact Page constructed.");
    }
    render(){
        return(
            <div>
                <h1 className="contactPageHeader">Contact</h1>
                <div>
                    <h3 className="contactInfo">Name</h3>
                    <input type="text"></input>
                    <h3 className="contactInfo">Email</h3>
                    <input type="text"></input>
                    <h3 className="contactInfo">Message</h3>
                    <textarea></textarea>
                </div>
                <input
                    type="button"
                    value="Send Message"
                    style={{
                        backgroundColor: "#ffa500",
                        borderColor: "transparent",
                        padding: "20px",
                        fontSize: "1.5em",
                        margin: "20px 0px",
                        borderRadius: "10px",
                        fontWeight: "bolder"
                    }}
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return({});
};

export default connect(mapStateToProps)(ContactPage);