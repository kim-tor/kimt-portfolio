import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">Education</h1>
            <Widecard title="Web Development" where="Penn LPS" from="2020" to=" 2021"/>
            <Widecard title="Programming and Software Development" where="Community College of Philadelphia" from="2018" to="2020"/>
            </div>
            )
        }
    }
    
export default Education
    