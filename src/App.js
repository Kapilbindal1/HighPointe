import React, { useState } from "react";
import logo from "./assets/images/logo.svg";
import whYouNeed from "./assets/images/why-you-need.svg";
import footerLogo from "./assets/images/footer-logo.svg";
import icon1 from "./assets/images/icon1.svg";
import icon2 from "./assets/images/icon2.svg";
import icon3 from "./assets/images/icon3.svg";
import icon4 from "./assets/images/icon4.svg";
import icon5 from "./assets/images/icon5.svg";
import faq from "./assets/images/faq.svg";
import star from "./assets/images/star.svg";
import TestimonialsImage from "./assets/images/TestimonialsImage.png";

import {
  NavbarBrand,
  Button,
  Navbar,
  NavLink,
  DropdownMenu,
  NavItem,
  DropdownItem,
  DropdownToggle,
  NavbarToggler,
  Nav,
  UncontrolledDropdown,
  Container,
  Row,
  Col,
  AccordionItem,
  Accordion,
  AccordionHeader,
  FormGroup,
  Form,
  Input,
  Label,
} from "reactstrap";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Collapse, CardBody, Card, CardHeader } from "reactstrap";
function App() {
  const [toggleQuestion, setToggequestion] = useState();

  const toggle = () => {
    setToggequestion(!toggleQuestion);
  };
  return (
    <>
      <Container>
        <Navbar expand="md" light>
          <NavbarBrand href="/">
            <img className="logo" src={logo} alt="logo" />
          </NavbarBrand>
          <NavbarToggler onClick={function noRefCheck() { }} />
          <Collapse navbar>
            <Nav className="ms-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Homesasdasbdjkas</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  Services
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  About Us
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  Testimonials
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  FAQ
                </NavLink>
              </NavItem>
              <UncontrolledDropdown inNavbar nav>
                <Button className="common-btn">Contact Us</Button>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </Container>
      <section className="banner">
        <Container>
          <div className="banner-content">
            <h2>Custom software development Accelerating Your Journey</h2>
            <h4>Innovate. Optimize. Automate.</h4>
            <h5>Software that achieves business results</h5>
            <Button className="common-btn">Contact Us</Button>
          </div>
        </Container>
      </section>
      <section className="why-you-need">
        <Container fluid className="p-0">
          <h3 className="title-head text-center">What do you need</h3>
          <div className="service-outer">
            <div className="why-you-need-img">
              <img src={whYouNeed} alt="whYouNeed" />
            </div>
            <div className="why-you-need-services">
              <div className="need-services-box">
                <img src={icon1} alt="icon1" />
                <h4>A technology partner</h4>
                <h6>Full services, Dev-Team-in-a-box</h6>
                <p>
                  We produce digital transformation roadmaps and implement
                  technologies that become growth drivers for our customers’
                  businesses
                </p>
              </div>
              <div className="need-services-box">
                <img src={icon2} alt="icon2" />
                <h4>A Web Application</h4>
                <h6>Branding UX Development Integration</h6>
                <p>
                  Leverage elegant, intelligent, and immersive digital
                  experiences and similarly as your business goals.
                </p>
              </div>
              <div className="need-services-box">
                <img src={icon3} alt="icon3" />
                <h4>An augmented Dev Team</h4>
                <h6>Top talent Full control Scalable</h6>
                <p>
                  Achieve a bigger business and a quicker time to market by
                  eliminating bottlenecks in package development with Services.
                  Continuous Delivery makes staying sooner than the competition
                  and impressing your customers with products they really want
                  could be a breeze.
                </p>
              </div>
              <div className="need-services-box">
                <img src={icon4} alt="icon4" />
                <h4>A mobile app</h4>
                <h6>Branding・UX・Development・iOS & Android</h6>
                <p>
                  Our software development company delivers company and client
                  applications based on our profound understanding of
                  technologies and therefore the markets they operate in. With
                  our skilled mindset, we glance on the far side technology to
                  offer viable solutions for your specific business context.
                </p>
              </div>
              <div className="need-services-box">
                <img src={icon5} alt="icon5" />
                <h4>A digital transformation</h4>
                <h6>CTO-level expertise Architecturing Development</h6>
                <p>
                  We place along software ecosystems that alter end-to-end
                  method automation, data-driven deciding, and productive
                  collaboration supported growth-ready technologies.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="should-buy">
        <Container>
          <Row>
            <Col md={6}>
              <div className="should-buy-polygon">
                <div>
                  <h3 className="title-head">Should I buy or build?</h3>
                  <p>
                    Once you’ve made the decision to build custom software and
                    subsequently opted to in-source or outsource the
                    development, you’re off to the races, right? Well…not
                    exactly….
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="faq">
        <Container>
          <Row>
            <Col md={4} className="faq-img">
              <img src={faq} alt="faq" />
            </Col>
            <Col md={8} className="faq-content">
              <h3 className="title-head">Frequently Asked Questions</h3>

              <div>
                <div
                  className="accordion-button"
                  onClick={() => setToggequestion(1)}
                  style={{ marginBottom: "1rem" }}
                >
                  What Is Software Development Outsourcing?
                </div>
                <Collapse isOpen={toggleQuestion === 1 ? true : false}>
                  <div className="accordion-item">
                    <p>
                      Software development outsourcing services are used by
                      companies looking to hire a third-party vendor to build
                      custom software. This option is usually more affordable
                      than hiring an in-house development team and provides
                      greater expertise and resources to complete the job.
                    </p>
                  </div>
                </Collapse>
                <div
                  className="accordion-button"
                  onClick={() => setToggequestion(2)}
                  style={{ marginBottom: "1rem" }}
                >
                  What Are the Advantages of Software Outsourcing?
                </div>
                <Collapse isOpen={toggleQuestion === 2 ? true : false}>
                  <div className="accordion-item">
                    <p>
                      Software development outsourcing services are used by
                      companies looking to hire a third-party vendor to build
                      custom software. This option is usually more affordable
                      than hiring an in-house development team and provides
                      greater expertise and resources to complete the job.
                    </p>
                  </div>
                </Collapse>
                <div
                  className="accordion-button"
                  onClick={() => setToggequestion(3)}
                  style={{ marginBottom: "1rem" }}
                >
                  How Does Outsourcing Work?
                </div>
                <Collapse isOpen={toggleQuestion === 3 ? true : false}>
                  <div className="accordion-item">
                    <p>
                      Software development outsourcing services are used by
                      companies looking to hire a third-party vendor to build
                      custom software. This option is usually more affordable
                      than hiring an in-house development team and provides
                      greater expertise and resources to complete the job.
                    </p>
                  </div>
                </Collapse>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="testimonial">
        <Container>
          <Carousel>
            <div className="slider-box">
              <div>
                <img src={TestimonialsImage} />
              </div>
              <div className="slider-content">
                <h3>Love from Clients</h3>
                <h4>Mark Tony</h4>
                <h6>Software Developer</h6>
                <div className="stars">
                  <span><img src={star} /></span>
                  <span><img src={star} /></span>
                  <span><img src={star} /></span>
                  <span><img src={star} /></span>
                  <span><img src={star} /></span>
                </div>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly.
                </p>
              </div>
            </div>
            <div className="slider-box">
              <div>
                <img src={TestimonialsImage} />
              </div>
              <div className="slider-content">
                <h3>Love from Clients</h3>
                <h4>Mark Tony</h4>
                <h6>Software Developer</h6>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly.
                </p>
              </div>
            </div>
            <div className="slider-box">
              <div>
                <img src={TestimonialsImage} />
              </div>
              <div className="slider-content">
                <h3>Love from Clients</h3>
                <h4>Mark Tony</h4>
                <h6>Software Developer</h6>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly.
                </p>
              </div>
            </div>
          </Carousel>
        </Container>
      </section>
      <section className="contact-us">
        <Container>
          <Row>
            <Col md={6} className="">
              <div className="contact-form">
                <h4>
                  Contact us to build the right product with the right team.
                </h4>
                <Form>
                  <FormGroup>
                    <Input placeholder="your name" type="text" />
                  </FormGroup>
                  <FormGroup>
                    <Input placeholder="your Email Address" type="email" />
                  </FormGroup>
                  <FormGroup>
                    <Input placeholder="your Phone Number" type="text" />
                  </FormGroup>
                  <FormGroup>
                    <Input placeholder="Share your thoughtsr" type="text" />
                  </FormGroup>

                  <Button className="common-btn">Submit</Button>
                </Form>
              </div>
            </Col>
            <Col md={6} className="">
              <h3 className="title-head">
                Transform ideas into software system
              </h3>
              <p>
                Feel assured on the market with a top-grade product style. Turn
                your vision into executable options and launch an online or
                mobile app that delights users and solves their issues. Also,
                Engage your audience and build an important connection to your
                brand with eye-catching visual perks.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="footer">
        <Container>
          <Row xs="4">
            <Col md={4} className="">
              <img className="footer-logo" src={footerLogo} alt="footer-img" />
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration.
              </p>
            </Col>
            <Col md={2} className="">
              <h4>Quick Links</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="">About Us</a>
                </li>
                <li>
                  <a href="">Testimonials</a>
                </li>
                <li>
                  <a href="">FAQ</a>
                </li>
                <li>
                  <a href="">Privacy Policy</a>
                </li>
              </ul>
            </Col>
            <Col md={2} className="">
              <h4>Services</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="">A technology partner</a>
                </li>
                <li>
                  <a href="">A web application</a>
                </li>
                <li>
                  <a href="">A mobile app</a>
                </li>
                <li>
                  <a href="">A digital transformation</a>
                </li>
              </ul>
            </Col>
            <Col md={4} className="">
              <h4>Contact Us</h4>
            </Col>
          </Row>
          <p className="copyright">
            Copyright ©2022 High Point. All Rights Reserved.
          </p>
        </Container>
      </section>
    </>
  );
}

export default App;
