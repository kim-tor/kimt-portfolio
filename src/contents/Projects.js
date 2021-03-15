import React, { Component} from 'react';
import project from "../data/project";
import Card from "../components/Card/Card";
import Row from "../components/Row";
class Project extends Component {
    state = {
        project
    }

    render() {
        return (
            
            <div className ="projects">
            <br />
          {this.state.project.map(project => (
          <Row>
            <Card
                title={project.title}
                image={project.image}
                description={project.description}
                deployed={project.deployed}
                github={project.github}
            />
            </Row>
          ))}
        </div>
        )};
}

export default Project;
