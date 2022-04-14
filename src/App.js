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
import email from "./assets/images/Email.svg";
import address from "./assets/images/Address.svg";
import plus from "./assets/images/plus.svg";
import minus from "./assets/images/minus.svg";
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

import { Collapse } from "reactstrap";
function App() {
  const [toggleQuestion, setToggequestion] = useState(false);
  const [toggleQuestion1, setToggequestion1] = useState(false);
  const [toggleQuestion2, setToggequestion2] = useState(false);

  const [open, setOpen] = useState(false);

  const handleServices = () => {
    let element = document.getElementById("services");
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };
  const handleAboutUs = () => {
    let element = document.getElementById("aboutUs");
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };
  const handleContactUs = () => {
    let element = document.getElementById("contact-us");
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };
  const handleTestimonials = () => {
    let element = document.getElementById("testimonial");
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };
  const handleFAQ = () => {
    let element = document.getElementById("faq");
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };
  return (
    <>
    <header>
      <Container>
        <Navbar expand="md" light>
          <NavbarBrand href="/">
            <img className="logo" src={logo} alt="logo" />
          </NavbarBrand>
          <NavbarToggler onClick={() => setOpen(!open)} />
          <Collapse isOpen={open} navbar>
            <Nav className="ms-auto" navbar>
              <NavItem>
                <NavLink>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={handleServices}>Services</NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink onClick={handleAboutUs}>About Us</NavLink>
              </NavItem> */}
                 <NavItem>
                <NavLink onClick={handleFAQ}>FAQ</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={handleTestimonials}>Testimonials</NavLink>
              </NavItem>
              <UncontrolledDropdown inNavbar nav>
                <Button onClick={handleContactUs} className="common-btn">Contact Us</Button>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </Container>
      </header>
      <section className="banner">
        <Container>
          <div className="banner-content">
            <h2>Custom software development Accelerating Your Journey</h2>
            <h4>Innovate. Optimize. Automate.</h4>
            <h5>Software that achieves business results</h5>
            <Button onClick={handleContactUs} className="common-btn">Contact Us</Button>
          </div>
        </Container>
      </section>
      <section className="why-you-need" id="services">
        <Container fluid className="p-0">
          <h3 className="title-head text-center">What do you need</h3>
          <div className="service-outer">
            <div className="why-you-need-img">
              <img src={whYouNeed} alt="whYouNeed" />
            </div>
            <div className="why-you-need-services">
              <div className="need-services-box">
                <div className="need-service-head">
                  <img src={icon1} alt="icon1" />
                  <div>
                    <h4>A technology partner</h4>
                    <h6>Full services, Dev-Team-in-a-box</h6>
                  </div>
                </div>

                <p>
                  We produce digital transformation roadmaps and implement
                  technologies that become growth drivers for our customers’
                  businesses
                </p>
              </div>
              <div className="need-services-box">
                <div className="need-service-head">
                  <img src={icon2} alt="icon2" />
                  <div>
                    <h4>A Web Application</h4>
                    <h6>Branding UX Development Integration</h6>
                  </div>
                </div>

                <p>
                  Leverage elegant, intelligent, and immersive digital
                  experiences and similarly as your business goals.
                </p>
              </div>
              <div className="need-services-box">
                <div className="need-service-head">
                  <img src={icon3} alt="icon3" />
                  <div>
                    <h4>An augmented Dev Team</h4>
                    <h6>Top talent Full control Scalable</h6>
                  </div>
                </div>

                <p>
                  Achieve a bigger business and a quicker time to market by
                  eliminating bottlenecks in package development with Services.
                  Continuous Delivery makes staying sooner than the competition
                  and impressing your customers with products they really want
                  could be a breeze.
                </p>
              </div>
              <div className="need-services-box">
                <div className="need-service-head">
                  <img src={icon4} alt="icon4" />
                  <div>
                    <h4>A mobile app</h4>
                    <h6>Branding・UX・Development・iOS & Android</h6>
                  </div>
                </div>

                <p>
                  Our software development company delivers company and client
                  applications based on our profound understanding of
                  technologies and therefore the markets they operate in. With
                  our skilled mindset, we glance on the far side technology to
                  offer viable solutions for your specific business context.
                </p>
              </div>
              <div className="need-services-box">
              <div className="need-service-head">
              <img src={icon5} alt="icon5" />
              <div>
              <h4>A digital transformation</h4>
                <h6>CTO-level expertise Architecturing Development</h6>
              </div>
              
                </div>
               
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
          <Row xs="1" md="1">
            <Col lg={6}>
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
      <section className="faq" id="faq">
        <Container>
          <Row>
            <Col md={4} className="faq-img">
              <img src={faq} alt="faq" />
            </Col>
            <Col md={8} className="faq-content">
              <h3 className="title-head">Frequently Asked Questions</h3>

              <div>
                <div
                  className={
                    toggleQuestion
                      ? "accordion-button  closeTab"
                      : "accordion-button"
                  }
                  onClick={() => setToggequestion(!toggleQuestion)}
                >
                  What Is Software Development Outsourcing?
                </div>
                <Collapse isOpen={toggleQuestion}>
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
                  className={
                    toggleQuestion1
                      ? "accordion-button  closeTab"
                      : "accordion-button"
                  }
                  onClick={() => setToggequestion1(!toggleQuestion1)}
                >
                  What Are the Advantages of Software Outsourcing?
                </div>
                <Collapse isOpen={toggleQuestion1}>
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
                  className={
                    toggleQuestion2
                      ? "accordion-button  closeTab"
                      : "accordion-button"
                  }
                  onClick={() => setToggequestion2(!toggleQuestion2)}
                >
                  How Does Outsourcing Work?
                </div>
                <Collapse isOpen={toggleQuestion2}>
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
      <section className="testimonial" id="testimonial">
        <Container>
          <Carousel showStatus={false} showIndicators={false}>
            <div className="slider-box">
              <div>
                <img className="testi-img" src={TestimonialsImage} />
              </div>
              <div className="slider-content">
                <h3>Love from Clients</h3>
                <h4>Mark Tony</h4>
                <h6>Software Developer</h6>
                <div className="stars">
                  <span>
                    <img src={star} />
                  </span>
                  <span>
                    <img src={star} />
                  </span>
                  <span>
                    <img src={star} />
                  </span>
                  <span>
                    <img src={star} />
                  </span>
                  <span>
                    <img src={star} />
                  </span>
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
                <img className="testi-img" src={TestimonialsImage} />
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
                <img className="testi-img" src={TestimonialsImage} />
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
      <section className="contact-us" id="contact-us">
        <Container>
          <Row xs="1" md="1" className="justify-content-around">
            <Col lg={6} className="">
              <div className="contact-form">
                <h4>Contact us</h4>
                <h5>To build the right product with the right team.</h5>
                <Form>
                  <FormGroup>
                    <Input placeholder="your name" type="text" />
                  </FormGroup>
                  <FormGroup>
                    <Input placeholder="your Email Address" type="email" />
                  </FormGroup>
                  {/* <FormGroup>
                    <Input placeholder="your Phone Number" type="text" />
                  </FormGroup> */}
                  <FormGroup>
                    <Input placeholder="What can we do for you?" type="text" />
                  </FormGroup>

                  <Button className="common-btn">Submit</Button>
                </Form>
              </div>
            </Col>
            <Col lg={5} className="">
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
      {/* <section className="py-5 get-a-quote">
      <Container>
      
          <Row xs="1" md="2">
            <Col lg={6} className="">
            <div className="contact-form">
                <h4>
                Get A Free Quote
                </h4>
                <Form>
                  <FormGroup>
                    <Input placeholder="your name" type="text" />
                  </FormGroup>
                  <FormGroup>
                    <Input placeholder="your Email" type="email" />
                  </FormGroup>
                  <FormGroup>
                    <Input placeholder="your Phone Number" type="text" />
                  </FormGroup>
                  <FormGroup>
                  <Input
     placeholder="Message"
      type="textarea"
    />
                  </FormGroup>
                  <Button className="common-btn">Submit</Button>
                </Form>
              </div>
             </Col>
        </Row>
              </Container>
      </section> */}
      <section className="footer" id="aboutUs">
        <Container>
          <Row xs="1" md="2">
            <Col lg={4} className="">
              <img className="footer-logo" src={footerLogo} alt="footer-img" />
              <p>
              Custom software development Accelerating Your Journey. Innovate. Optimize. Automate. Software that achieves business results
              </p>
            </Col>
            <Col lg={4} className="">
              <h4>Quick Links</h4>
              <ul className="list-unstyled">
              <li>
                  <a onClick={handleServices} >Services</a>
                </li>
                {/* <li>
                  <a onClick={handleAboutUs}>About Us</a>
                </li> */}
                    <li >
                  <a onClick={handleFAQ}>FAQ</a>
                </li>
                <li>
                  <a onClick={handleTestimonials}>Testimonials</a>
                </li>
               
              </ul>
            </Col>
            {/* <Col lg={3} className="">
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
            </Col> */}
            <Col lg={4} className="">
              <h4>Contact Us</h4>
              <p className="contact-details">
                <img src={email} />
                <span>
                  Email:{" "}
                  <a href="mailto:contact@hightpointe.tech">
                  contact@hightpointe.tech
                  </a>
                </span>
              </p>
              <p className="contact-details">
                <img src={address} />
                <span> Address:</span>
                <a href="">548 Market St, Suite #42013, San Francisco, CA 94104</a>
              </p>
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
