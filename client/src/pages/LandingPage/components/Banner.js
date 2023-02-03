import { React } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';



export const Banner = () => {
  return (

    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline"><center>Cancer Classification</center></span>
                  <p>When determining the appropriate treatment options, the clinical stage is frequently a crucial factor. It can also be applied when attempting to determine a person's outlook or prognosis. For instance, the stage at the time of diagnosis determines the survival rates for the majority of cancer types.</p>
                  <button onClick={() => console.log('connect')}>Upload below <ArrowRightCircle size={25} /></button>
              
                  
              </div>}
            </TrackVisibility>
          </Col>
          
          <form action="/action_page.php">
                  <input type="file" id="myFile" name="filename" />
                  <input type="submit" />
                  </form>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  {/* <img src={headerImg} alt="Header Img"/> */}
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
    
    
  )


}

