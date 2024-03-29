
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../../../../assets/img/1.jpg";
import projImg2 from "../../../../assets/img/2.jpg";
import projImg3 from "../../../../assets/img/3.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

    const projects = [
      {
        title: "CT SCAN",
        description: "Stage 1 lung cancer",
        imgUrl: projImg1,
      },
      {
        title: "CT SCAN",
        description: "Stage 1 lung cancer",
        imgUrl: projImg2,
      },
      {  
        title: "CT SCAN",
        description: "Stage 1 lung cancer",
        imgUrl: projImg3,
      },
      {
        title: "CT SCAN",
        description: "Stage 1 lung cancer",
        imgUrl: projImg1,
      },
      {
        title: "CT SCAN",
        description: "Stage 1 lung cancer",
        imgUrl: projImg2,
      },
      {
        title: "CT SCAN",
        description: "Stage 1 lung cancer",
        imgUrl: projImg3,
      },
    ];

    return (
        <section className="projects" id="projects">
          <Container>
            <Row>
              <Col>
                <TrackVisibility>
                  {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                    <h2>CT Scan</h2>
                    <p>stage 0 – the cancer is where it started (in situ) and hasn't spread
                        stage 1 – the cancer is small and hasn't spread anywhere else
                        stage 2 – the cancer has grown, but hasn't spread
                        stage 3 – the cancer is larger and may have spread to the surrounding tissues and/or the lymph nodes (or "glands", part of the immune system)
                        stage 4 – the cancer has spread from where it started to at least 1 other body organ, also known as "secondary" or "metastatic" cancer</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                      <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                          <Nav.Link eventKey="first">Stage 1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">Stage 2</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="third">Stage 3</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="fourth">Stage 4
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <Tab.Content>
                        <Tab.Pane eventKey="first">
                          <Row>
                            {
                              projects.map((project, index) => {
                                return (
                                  <ProjectCard
                                    key={index}
                                    {...project}
                                    />
                                )
                              })
                            }
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="section">
                          <p></p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          <p>.</p>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </div>}
                </TrackVisibility>
              </Col>
            </Row>
          </Container>
          {/* <img className="background-image-right" src={colorSharp2}></img> */}
          <br>
          </br>
          <br>
          </br>
          <br>
          </br>
          <br>
          </br>
        </section>
      )
    }