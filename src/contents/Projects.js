import React, { Component } from 'react';
import project from "../data/project";
import Card from "../components/Card/Card";
import Row from "../components/Row";
import Wrapper from '../components/Wrapper/Wrapper';

class Project extends Component {
  state = {
    project
  }

  render() {
    return (

      <div className="condiv projects">
        <h1 className="subtopic">Projects</h1>
        <br />
      <Wrapper>
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
        </Wrapper>
      </div>
    )
  };
}

export default Project;
