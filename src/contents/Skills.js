import React, { Component } from 'react';
import Widecard from "../components/Widecard";
class Skills extends Component {
    // constructor(props)
    // {
    //     super(props);
    //     this.state={
    //         'myskills':['HTML','CSS','JS','NODE','REACT JS','EXPRESS','GITHUB']
    //     };
    // }

    render() {
        return (
            <div className="condiv skills">
            <h1 className="subtopic">Skills</h1>
            {/* <ul> 
            {this.state.myskills.map((value)=>{
                return <li >{value}</li>
            })}
            </ul> */}
            <Widecard title="HTML"/>
            <Widecard title="CSS"/>
            <Widecard title="JAVASCRIPT"/>
            <Widecard title="REACT.JS"/>
            <Widecard title="NODE.JS"/>
            <Widecard title="MONGODB"/>
            <Widecard title="GITHUB"/>

            </div>
            )
        }
    }
    
    export default Skills
    