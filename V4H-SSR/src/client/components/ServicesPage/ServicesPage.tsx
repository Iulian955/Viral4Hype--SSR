import React, { useState } from "react";
import styles from "../ServicesPage/ServicesPage.module.scss";
import Accordion from "./Accordion";
import { uniqueId } from "lodash";
import { FaReact, FaNode, FaJava, FaPython } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { FaCss3 } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import digital from "../../media/assets/pics/homepage/digital.svg";
import street from "../../media/assets/pics/homepage/street.svg";
import it from "../../media/assets/pics/homepage/it.svg";
import mindset from "../../media/assets/pics/servicesPage/mind.svg";
import communication from "../../media/assets/pics/servicesPage/comunication.svg";
import quality from "../../media/assets/pics/servicesPage/quality.svg";
import time from "../../media/assets/pics/servicesPage/time.svg";
import dot from "../../media/assets/pics/marketing/bullet.svg";

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState("Web development");
  const [email, setEmail] = useState("");
  const [inputError, setInputError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.trim() === "") {
      setInputError(true);
      setErrorMessage("");
    } else if (!emailRegex.test(email)) {
      setInputError(true);
      setErrorMessage("Invalid email format.");
    } else {
      setInputError(false);
      setErrorMessage("");
      setIsSubscribed(true);
    }
  };

  let contentDiv;

  let contentDiv1 = (
    <div className={styles.servicesContent}>
      <div className={styles.svsMainTitle}>Web development services</div>
      <div className={styles.svsSmallText}>
        We use REACT in our Web development projects. This will ensure that you will have a high-end digital asset that
        will produce value for your brand. One of the best options you can find out there. <br /> <br />
        Having a website/platform developed using REACT means: <br /> <br />
      </div>
      <ul>
        <li>
          <img src={dot} alt="" /> More cashflow for your business
        </li>
        <li>
          {" "}
          <img src={dot} alt="" /> Become Unique in your industry
        </li>
        <li>
          {" "}
          <img src={dot} alt="" /> Time saved for your priorities
        </li>
        <li>
          {" "}
          <img src={dot} alt="" /> Cost effective solutions for your budget
        </li>
        <li>
          {" "}
          <img src={dot} alt="" />
          Solutions Aligned with Your Vision
        </li>
        <li>
          {" "}
          <img src={dot} alt="" />
          Flexibility for future growth
        </li>
        <li>
          {" "}
          <img src={dot} alt="" />
          Exceptional Experience for Your Visitors
        </li>
        <li>
          {" "}
          <img src={dot} alt="" />
          Peace of mind
        </li>
      </ul>
    </div>
  );

  let contentDiv2 = (
    <div className={styles.servicesContent}>
      <div className={styles.svsMainTitle}>BUSINESS DIGITIZATION SERVICES </div>
      <div className={styles.svsSmallText}>
        Traditional software is expensive and hard to build for many companies. We came forward with a solution:
        web-based digitization solutions. Be it a digital archive, a document generator that will automate work or
        anything else your business might need, we can develop it for you.
        <br />
        <br />
        The benefits of choosing a web-based digitization solution:
      </div>
      <ul>
        <li>
          {" "}
          <img src={dot} alt="" />
          Cheaper than traditional software
        </li>
        <li>
          {" "}
          <img src={dot} alt="" />
          Flexible to change
        </li>
        <li>
          {" "}
          <img src={dot} alt="" />
          Cost-effective
        </li>
        <li>
          {" "}
          <img src={dot} alt="" />
          Faster to develop
        </li>
        <li>
          {" "}
          <img src={dot} alt="" />
          Secured
        </li>
        <li>
          {" "}
          <img src={dot} alt="" />
          Cloud based
        </li>
        <li>
          {" "}
          <img src={dot} alt="" />
          Not expensive to maintain
        </li>
      </ul>
    </div>
  );

  const handleServiceClick = (service: string) => {
    setSelectedService(service);
  };

  if (selectedService === "Web development") {
    contentDiv = (
      <div className={styles.servicesContent}>
        <div className={styles.svsMainTitle}>Web development services</div>
        <div className={styles.svsSmallText}>
          We use REACT in our Web development projects. This will ensure that you will have a high-end digital asset
          that will produce value for your brand. One of the best options you can find out there. <br /> <br />
          Having a website/platform developed using REACT means: <br /> <br />
        </div>
        <ul>
          <li>
            <img src={dot} alt="" /> More cashflow for your business
          </li>
          <li>
            {" "}
            <img src={dot} alt="" /> Become Unique in your industry
          </li>
          <li>
            {" "}
            <img src={dot} alt="" /> Time saved for your priorities
          </li>
          <li>
            {" "}
            <img src={dot} alt="" /> Cost effective solutions for your budget
          </li>
          <li>
            {" "}
            <img src={dot} alt="" />
            Solutions Aligned with Your Vision
          </li>
          <li>
            {" "}
            <img src={dot} alt="" />
            Flexibility for future growth
          </li>
          <li>
            {" "}
            <img src={dot} alt="" />
            Exceptional Experience for Your Visitors
          </li>
          <li>
            {" "}
            <img src={dot} alt="" />
            Peace of mind
          </li>
        </ul>
      </div>
    );
  } else if (selectedService === "Digitalization services") {
    contentDiv = (
      <div className={styles.servicesContent}>
        <div className={styles.svsMainTitle}>BUSINESS DIGITIZATION SERVICES </div>
        <div className={styles.svsSmallText}>
          Traditional software is expensive and hard to build for many companies. We came forward with a solution:
          web-based digitization solutions. Be it a digital archive, a document generator that will automate work or
          anything else your business might need, we can develop it for you.
          <br />
          <br />
          The benefits of choosing a web-based digitization solution:
        </div>
        <ul>
          <li>
            {" "}
            <img src={dot} alt="" />
            Cheaper than traditional software
          </li>
          <li>
            {" "}
            <img src={dot} alt="" />
            Flexible to change
          </li>
          <li>
            {" "}
            <img src={dot} alt="" />
            Cost-effective
          </li>
          <li>
            {" "}
            <img src={dot} alt="" />
            Faster to develop
          </li>
          <li>
            {" "}
            <img src={dot} alt="" />
            Secured
          </li>
          <li>
            {" "}
            <img src={dot} alt="" />
            Cloud based
          </li>
          <li>
            {" "}
            <img src={dot} alt="" />
            Not expensive to maintain
          </li>
        </ul>
      </div>
    );
  }
  return (
    <div className={styles.servicesContainer}>
      <div className={styles.servicesWrapper}>
        <div className={styles.servicesFirstSection}>
          <div className={styles.servicesMainTitle}>
            <span className={styles.white}> Information and Technology </span>
          </div>
          <div className={styles.servicesSubTitle}>
            We use the latest technology in our projects, ensuring automation and sustainable growth for your brand
          </div>
          <div className={styles.sectionBtn}>
            <button>Have a meeting with us</button>
          </div>
        </div>

        <div className={styles.servicesSecondSection}>
          <div className={styles.servicesBtn}>
            <button>SERVICES</button>
          </div>
          <div className={styles.titleContainer}>
            <div className={styles.mainTitle}>Our services</div>
            <div className={styles.subTitle}>
              Our services are always personalised based on your needs. If you need something more complex that is not
              listed below, we can still help you. Listed below are the services we provide most of the time to our
              partners
            </div>
          </div>

          <div className={styles.svsContainer}>
            <div className={styles.svsName}>
              <div
                onClick={() => handleServiceClick("Web development")}
                className={selectedService === "Web development" ? styles.activeSVS : styles.inactiveSVS}
              >
                Web development
              </div>
              <div
                onClick={() => handleServiceClick("Digitalization services")}
                className={selectedService === "Digitalization services" ? styles.activeSVS : styles.inactiveSVS}
              >
                Digitalization services
              </div>
            </div>

            <div className={styles.svsText}>{contentDiv}</div>
          </div>

          <div className={styles.svsResponsive}>
            <div className={styles.cardsFAQ}>
              <div className={styles.cardsWrapper}>
                <Accordion key={uniqueId()} theQuestion={{ question: "Web development", answer: contentDiv1 }} />

                <Accordion
                  key={uniqueId()}
                  theQuestion={{ question: "Digital transformation services", answer: contentDiv2 }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.servicesThirdSection}>
          <div className={styles.svsBigTitle}>
            Sustainable growth solutions means that we provide the most value out of your budget
          </div>
          <div className={styles.svsSmallTitle}>What you can expect</div>
          <div className={styles.svsCards}>
            <div className={styles.cardAdv}>
              <div className={styles.cardLogo}>
                <img src={mindset} />
              </div>
              <div className={styles.cardTitle}>Business Mindset</div>

              <div className={styles.cardText2}>
                We put ourselves in your shoes so we can come up with the best solutions based on your opportunities and
                challenges
              </div>
            </div>
            <div className={styles.cardAdv}>
              <div className={styles.cardLogo}>
                <img src={communication} />
              </div>
              <div className={styles.cardTitle}>On point communication</div>

              <div className={styles.cardText2}>We like to communicate in an organized and time efficient manner.</div>
            </div>

            <div className={styles.cardAdv}>
              <div className={styles.cardLogo}>
                <img src={quality} />
              </div>
              <div className={styles.cardTitle}>Competitive quality</div>

              <div className={styles.cardText2}>
                We always strive to deliver the best quality. We constantly challenge ourselves to deliver in time and
                satisfy expectations
              </div>
            </div>

            <div className={styles.cardAdv}>
              <div className={styles.cardLogo}>
                <img src={time} />
              </div>
              <div className={styles.cardTitle}>Time efficiency</div>

              <div className={styles.cardText2}>We create realistic deadlines and respect them.</div>
            </div>
          </div>
        </div>

        <div className={styles.servicesForthSection}>
          <div className={styles.servicesBtn}>
            <button>PROCESS</button>
          </div>
          <div className={styles.titleContainer}>
            <div className={styles.mainTitle}>Interested in what we offer?</div>
            <div className={styles.subTitle}>Here are the steps</div>
          </div>{" "}
          <div className={styles.stepsContainer}>
            <div className={styles.stepsWrapper}>
              <div className={styles.stepBtn}>
                <button>Step 1</button>
              </div>

              <div className={styles.stepTexts}>
                <div className={styles.stepTitle}>Consultation</div>
                <div className={styles.stepSubTitle}>
                  We organize an introductory call where we will gather all the data needed in order to come up with a
                  solution.
                </div>
              </div>
            </div>
            <div className={styles.interLine}></div>

            <div className={styles.stepsWrapper}>
              <div className={styles.stepBtn}>
                <button>Step 2</button>
              </div>

              <div className={styles.stepTexts}>
                <div className={styles.stepTitle}>Analysis and planning</div>
                <div className={styles.stepSubTitle}>
                  We will analyse your needs and come up with an initial development plan, estimated budget & deadline.
                </div>
              </div>
            </div>
            <div className={styles.interLine}></div>

            <div className={styles.stepsWrapper}>
              <div className={styles.stepBtn}>
                <button>Step 3</button>
              </div>

              <div className={styles.stepTexts}>
                <div className={styles.stepTitle}>Final Call</div>
                <div className={styles.stepSubTitle}>
                  We will present our first hand plan and estimated budget & deadline. If our proposal is what your
                  company needs we will start working on final details and then start building the best solution for
                  your business.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.btnSteps}>
            <button>Book a call</button>
          </div>
        </div>

        <div className={styles.servicesFifthSection}>
          <div className={styles.svsBigTitle}>Frameworks and programming languages we love</div>
          <div className={styles.programming}>
            <div className={styles.frameworks}>
              <FaReact className={styles.frameworkLogo} />
              <div className={styles.frameworkTitle}>React</div>
            </div>

            <div className={styles.frameworks}>
              <FaNode className={styles.frameworkLogo} />
              <div className={styles.frameworkTitle}>Nodejs</div>
            </div>

            <div className={styles.frameworks}>
              <IoLogoFirebase className={styles.frameworkLogo} />
              <div className={styles.frameworkTitle}>Firebase</div>
            </div>

            <div className={styles.frameworks}>
              <FaCss3 className={styles.frameworkLogo} />
              <div className={styles.frameworkTitle}>CSS</div>
            </div>

            <div className={styles.frameworks}>
              <FaJava className={styles.frameworkLogo} />
              <div className={styles.frameworkTitle}>Java</div>
            </div>

            <div className={styles.frameworks}>
              <IoLogoJavascript className={styles.frameworkLogo} />
              <div className={styles.frameworkTitle}>JavaScript</div>
            </div>

            <div className={styles.frameworks}>
              <FaPython className={styles.frameworkLogo} />
              <div className={styles.frameworkTitle}>Python</div>
            </div>
          </div>
        </div>

        <div className={styles.servicesSixthSection}>
          <div className={styles.servicesBtn}>
            <button>SERVICES</button>
          </div>
          <div className={styles.titleContainer}>
            <div className={styles.mainTitle}>Other services we provide</div>
            <div className={styles.subTitle}>Want to see the whole picture we can paint for you? Check out</div>
          </div>
          <div className={styles.cardContainer}>
            <div className={styles.cards}>
              <div className={styles.cardX}>
                <div className={styles.headCard}>
                  <img src={digital} alt="digital" />
                  <div>Digital marketing</div>
                </div>
                <div className={styles.cardText}>
                  We get to know your business, your audience, then we tailor a solution based on the opportunities you
                  have in the market that will provide you with results. We do PPC, SEO, SEM, Social Media Marketing and
                  branding for our clients, but the question remains…
                  <br />
                  <span className={styles.bold}>What does your business need to grow? </span>
                </div>
                <div className={styles.cardLink}>
                  <a href="/marketing"> See details </a>
                </div>
              </div>
              <div className={styles.cardX}>
                <div className={styles.headCard}>
                  <img src={street} alt="street" />
                  <div>Outdoor advertising</div>
                </div>
                <div className={styles.cardText}>
                  Outdoor advertising spots on digital screens all over Romania. If you target the Romanian Market, this
                  might be the service you need, we offer diverse locations that will fit your goals. Be it a mall, the
                  metro or a screen in a high traffic intersection. Is it worth being seen by millions of people on a
                  monthly basis? Short answer, yes it is. We will help you choose the best locations for your brand.
                  <br /> The question still remains…
                  <br />
                  <span className={styles.bold}>What does your business need to grow? </span>
                </div>
                <div className={styles.cardLink}>
                  <a href="/advertising"> See details </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.servicesSeventhSection}>
          <div className={styles.subscribeContainer}>
            <div className={styles.subscribeTitle}>
              Want to learn how to technologically advance your business and stay ahead of your competition?
            </div>
            <div className={styles.subscribeSubTitle}>Don’t miss out on our newsletter</div>
            <div className={styles.subscribeFlex}>
              <div className={isSubscribed ? styles.subscribeNone : styles.subscribeInput}>
                <input
                  placeholder={inputError ? "Email invalid or required" : "Email"}
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className={inputError ? styles.inputError : ""}
                  onInput={() => setInputError(false)}
                />{" "}
                {errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}
              </div>
              <div className={styles.sectionBtn}>
                <button onClick={isSubscribed ? undefined : handleSubscribe}>
                  {isSubscribed ? "Thank you for subscribing!" : "Subscribe"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
