import React, { Component } from 'react';
import Social from '../components/Social';
class Contact extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">Let's work together!</h1>
            <h3>Email  : kimberley.5118@gmail.com </h3>
            <p> Please feel free to click on the social links located at the bottom of
                the page to connect! I look forward to hearing from you <span role="img" aria-label="peace">✌🏽</span> </p>
            <Social />
            </div>
            )
        }
    }
    
    export default Contact
    