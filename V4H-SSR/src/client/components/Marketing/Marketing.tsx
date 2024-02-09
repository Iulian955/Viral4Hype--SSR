import React, { useState } from "react";
import styles from "../Marketing/Marketing.module.scss";
import Accordion from "./Accordion";
import { uniqueId } from "lodash";
import street from "../../media/assets/pics/marketing/street.svg";
import it from "../../media/assets/pics/marketing/it.svg";
import marketingPhoto from "../../media/assets/pics/marketing/marketing.jpg";
import target from "../../media/assets/pics/marketing/target.svg";
import dataDriven from "../../media/assets/pics/marketing/diagram.svg";
import creative from "../../media/assets/pics/marketing/creative.svg";
import collaboration from "../../media/assets/pics/marketing/transparent.svg";
import dot from "../../media/assets/pics/marketing/bullet.svg";

const Marketing = () => {
  const [selectedCity, setSelectedCity] = useState("PPC Marketing");
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
      <div className={styles.servicesMainTitle}>PPC Marketing</div>
      <div className={styles.servicesSmallText}>
        Our proficiency in PPC Marketing is your key to unlocking sustainable growth. As certified experts in PPC, we
        leverage cutting-edge tools and methodologies to engineer campaigns that not only stand out but deliver tangible
        results.
        <br />
        <br />
        Benefits :
      </div>
      <ul>
        <li>
          <img src={dot} alt="" />
          Granular Targeting
        </li>
        <li>
          {" "}
          <img src={dot} alt="" />
          Responsive and Dynamic Ads
        </li>
        <li>
          {" "}
          <img src={dot} alt="" />
          Strategic Keyword Optimization
        </li>
        <li>
          {" "}
          <img src={dot} alt="" />
          Conversion Tracking Expertise
        </li>
        <li>
          {" "}
          <img src={dot} alt="" />
          Constant reporting
        </li>
        <li>
          {" "}
          <img src={dot} alt="" />
          Competitive Analysis
        </li>
        <li>
          {" "}
          <img src={dot} alt="" />
          Continuous Performance Analysis
        </li>
        <li>
          {" "}
          <img src={dot} alt="" />
          Adaptive Budget Management
        </li>
      </ul>
    </div>
  );

  let contentDiv2 = (
    <div className={styles.servicesContent}>
      <div className={styles.servicesMainTitle}> Social Media Advertising</div>
      <div className={styles.servicesSmallText}>
        Having a community of people who love your brand and stay loyal to it is important for every business. Achieve
        this with Social Media Marketing
        <br />
        <br />
        Benefits :
      </div>
      <ul>
        <li>
          {" "}
          <img src={dot} alt="" />
          Adaptive service for your needs
        </li>
        <li>
          {" "}
          <img src={dot} alt="" />
          Communication strategy
        </li>
        <li>
          {" "}
          <img src={dot} alt="" />
          Time saved
        </li>
        <li>
          {" "}
          <img src={dot} alt="" />
          AI involved
        </li>
        <li>
          {" "}
          <img src={dot} alt="" />
          Video & photo editing
        </li>
        <li>
          {" "}
          <img src={dot} alt="" />
          Video & photo content
        </li>
      </ul>
    </div>
  );

  let contentDiv3 = (
    <div className={styles.servicesContent}>
      <div className={styles.servicesMainTitle}> Search engine optimization services</div>
      <div className={styles.servicesSmallText}>
        Organic traffic has the highest conversion rate. That is why SEO is a top priority for you website/platform.
        More than the classic methods of doing SEO we introduced data extraction and analysis for your market.
        <br />
        <br />
        Benefits :
      </div>
      <ul>
        <li>
          {" "}
          <img src={dot} alt="" />
          More organic traffic
        </li>
        <li>
          {" "}
          <img src={dot} alt="" />
          Higher ranking
        </li>
        <li>
          {" "}
          <img src={dot} alt="" />
          Valuable market insights
        </li>
        <li>
          {" "}
          <img src={dot} alt="" />
          Valuable data about competitors
        </li>
        <li>
          {" "}
          <img src={dot} alt="" />
          Traffic forecast
        </li>
        <li>
          {" "}
          <img src={dot} alt="" />
          Monthly reporting
        </li>
      </ul>
    </div>
  );

  const handleCityClick = (city: React.SetStateAction<string>) => {
    setSelectedCity(city);
  };

  if (selectedCity === "PPC Marketing") {
    contentDiv = (
      <div className={styles.servicesContent}>
        <div className={styles.servicesMainTitle}>PPC Marketing</div>
        <div className={styles.servicesSmallText}>
          Our proficiency in PPC Marketing is your key to unlocking sustainable growth. As certified experts in PPC, we
          leverage cutting-edge tools and methodologies to engineer campaigns that not only stand out but deliver
          tangible results.
          <br />
          <br />
          Benefits :
        </div>
        <ul>
          <li>
            <img src={dot} alt="" />
            Granular Targeting
          </li>
          <li>
            {" "}
            <img src={dot} alt="" />
            Responsive and Dynamic Ads
          </li>
          <li>
            {" "}
            <img src={dot} alt="" />
            Strategic Keyword Optimization
          </li>
          <li>
            {" "}
            <img src={dot} alt="" />
            Conversion Tracking Expertise
          </li>
          <li>
            {" "}
            <img src={dot} alt="" />
            Constant reporting
          </li>
          <li>
            {" "}
            <img src={dot} alt="" />
            Competitive Analysis
          </li>
          <li>
            {" "}
            <img src={dot} alt="" />
            Continuous Performance Analysis
          </li>
          <li>
            {" "}
            <img src={dot} alt="" />
            Adaptive Budget Management
          </li>
        </ul>
      </div>
    );
  } else if (selectedCity === "Social Media Marketing") {
    contentDiv = (
      <div className={styles.servicesContent}>
        <div className={styles.servicesMainTitle}> Social Media Advertising</div>
        <div className={styles.servicesSmallText}>
          Having a community of people who love your brand and stay loyal to it is important for every business. Achieve
          this with Social Media Marketing
          <br />
          <br />
          Benefits :
        </div>
        <ul>
          <li>
            {" "}
            <img src={dot} alt="" />
            Adaptive service for your needs
          </li>
          <li>
            {" "}
            <img src={dot} alt="" />
            Communication strategy
          </li>
          <li>
            {" "}
            <img src={dot} alt="" />
            Time saved
          </li>
          <li>
            {" "}
            <img src={dot} alt="" />
            AI involved
          </li>
          <li>
            {" "}
            <img src={dot} alt="" />
            Video & photo editing
          </li>
          <li>
            {" "}
            <img src={dot} alt="" />
            Video & photo content
          </li>
        </ul>
      </div>
    );
  } else if (selectedCity === "SEO") {
    contentDiv = (
      <div className={styles.servicesContent}>
        <div className={styles.servicesMainTitle}> Search engine optimization services</div>
        <div className={styles.servicesSmallText}>
          Organic traffic has the highest conversion rate. That is why SEO is a top priority for you website/platform.
          More than the classic methods of doing SEO we introduced data extraction and analysis for your market.
          <br />
          <br />
          Benefits :
        </div>
        <ul>
          <li>
            {" "}
            <img src={dot} alt="" />
            More organic traffic
          </li>
          <li>
            {" "}
            <img src={dot} alt="" />
            Higher ranking
          </li>
          <li>
            {" "}
            <img src={dot} alt="" />
            Valuable market insights
          </li>
          <li>
            {" "}
            <img src={dot} alt="" />
            Valuable data about competitors
          </li>
          <li>
            {" "}
            <img src={dot} alt="" />
            Traffic forecast
          </li>
          <li>
            {" "}
            <img src={dot} alt="" />
            Monthly reporting
          </li>
        </ul>
      </div>
    );
  }

  return (
    <div className={styles.marketingContainer}>
      <div className={styles.marketingWrapper}>
        <div className={styles.marketingFirstSection}>
          <div className={styles.marketingTexts}>
            <div className={styles.marketingTitle}>The Digital Marketing Experience</div>
            <div className={styles.marketingSubTitle}>
              Unlock success with Viral 4 Hype: where tailored branding meets high conversion rates. Experience
              marketing that goes beyond, delivering tailored strategies for viral success.
            </div>
            <div className={styles.marketingBtn}>
              <button>Let’s work together</button>
            </div>

            <div className={styles.marketingClients}>
              <div className={styles.client}>
                <div>20 +</div>
                <div>Clients</div>
              </div>
              <div className={styles.client}>
                <div>5 +</div>
                <div>Years of activity</div>{" "}
              </div>
            </div>
          </div>

          <div className={styles.marketingPhoto}>
            <img src={marketingPhoto} alt="marketing" />
          </div>
        </div>

        <div className={styles.marketingSecondSection}>
          <div className={styles.servicesBtn}>
            <button>SERVICES</button>
          </div>
          <div className={styles.titleContainer}>
            <div className={styles.mainTitle}>Digital marketing services</div>
            <div className={styles.subTitle}>Empowering your business with our cutting-edge software solutions</div>
          </div>
          <div className={styles.judeteContainer}>
            <div className={styles.judetName}>
              <div
                onClick={() => handleCityClick("PPC Marketing")}
                className={selectedCity === "PPC Marketing" ? styles.activeCity : styles.inactiveCity}
              >
                PPC Marketing
              </div>
              <div
                onClick={() => handleCityClick("Social Media Marketing")}
                className={selectedCity === "Social Media Marketing" ? styles.activeCity : styles.inactiveCity}
              >
                Social Media Marketing
              </div>
              <div
                onClick={() => handleCityClick("SEO")}
                className={selectedCity === "SEO" ? styles.activeCity : styles.inactiveCity}
              >
                SEO
              </div>
            </div>

            <div className={styles.judeteText}>{contentDiv}</div>
          </div>

          <div className={styles.judeteResponsive}>
            <div className={styles.cardsFAQ}>
              <div className={styles.cardsWrapper}>
                <Accordion key={uniqueId()} theQuestion={{ question: "PPC Marketing", answer: contentDiv1 }} />
                <Accordion key={uniqueId()} theQuestion={{ question: "Social Media Marketing", answer: contentDiv2 }} />
                <Accordion key={uniqueId()} theQuestion={{ question: "SEO", answer: contentDiv3 }} />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.marketingThirdSection}>
          <div className={styles.marketingMainTitle}>Our 4 Principals we care about most in digital marketing</div>
          <div className={styles.marketingCards}>
            <div className={styles.cardAdv}>
              <div className={styles.cardLogo}>
                <img src={target} />
              </div>
              <div className={styles.cardTitle}>Targeted Precision</div>

              <div className={styles.cardText}>
                We believe in precision targeting, ensuring that every campaign reaches the right audience at the right
                time. Our strategies are crafted to resonate with specific demographics, behaviors, and interests,
                maximizing engagement and conversions.
              </div>
            </div>
            <div className={styles.cardAdv}>
              <div className={styles.cardLogo}>
                <img src={dataDriven} />
              </div>
              <div className={styles.cardTitle}>Data-Driven Insights</div>

              <div className={styles.cardText}>
                Data is at the core of our decision-making process. We rely on in-depth analytics and data-driven
                insights to optimize campaigns, leveraging real-time information to refine strategies and drive
                measurable results.
              </div>
            </div>

            <div className={styles.cardAdv}>
              <div className={styles.cardLogo}>
                <img src={creative} />
              </div>
              <div className={styles.cardTitle}>Creative Innovation</div>

              <div className={styles.cardText}>
                Innovation fuels our campaigns. We continuously explore creative avenues, integrating new technologies
                and approaches to captivate audiences, create engagement, and amplify brand impact in the ever-evolving
                digital landscape.
              </div>
            </div>

            <div className={styles.cardAdv}>
              <div className={styles.cardLogo}>
                <img src={collaboration} />
              </div>
              <div className={styles.cardTitle}>Transparent Collaboration</div>

              <div className={styles.cardText}>
                Transparent communication and collaboration lie at the heart of our client relationships. We believe in
                fostering open dialogue, providing clear insights, and collaborating closely with our clients every step
                of the way to achieve shared objectives and success.
              </div>
            </div>
          </div>
        </div>

        <div className={styles.marketingForthSection}>
          <div className={styles.servicesBtn}>
            <button>PROCESS</button>
          </div>
          <div className={styles.titleContainer}>
            <div className={styles.mainTitle}>Ready to go Viral?</div>
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
                  Have a discussion with you about your needs during a introductory call
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
                  we analyse our first call see if your needs are in accordance with your wants and then create a
                  sustainable plan proposal for your business
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
                  We set up another call with you to tell you what your opportunities are, how they can be put into
                  action and decide if we can work together to achieve your vision.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.btnSteps}>
            <button>Book a call</button>
          </div>
        </div>

        <div className={styles.marketingFifthSection}>
          <div className={styles.servicesBtn2}>
            <button>SERVICES</button>
          </div>
          <div className={styles.titleContainer}>
            <div className={styles.mainTitle2}>Other services we provide</div>
            <div className={styles.subTitle2}>Want to see the whole picture we can paint for you? Check out</div>
          </div>

          <div className={styles.cardContainer}>
            <div className={styles.cards}>
              <div className={styles.cardX2}>
                <div className={styles.headCard2}>
                  <img src={it} alt="it" />
                  <div>IT Services</div>
                </div>
                <div className={styles.cardText2}>
                  Outdoor advertising spots on digital screens all over Romania. If you target the Romanian Market, this
                  might be the service you need, we offer diverse locations that will fit your goals. Be it a mall, the
                  metro or a screen in a high traffic intersection. Is it worth being seen by millions of people on a
                  monthly basis? Short answer, yes it is. <br />
                  We will help you choose the best locations for your brand.
                  <br /> The question still remains…
                  <br />
                  <span className={styles.bold2}>What does your business need to grow? </span>
                </div>
                <div className={styles.cardLink2}>
                  <a href="/services"> See details </a>
                </div>
              </div>
              <div className={styles.cardX2}>
                <div className={styles.headCard2}>
                  <img src={street} alt="street" />
                  <div>Outdoor advertising</div>
                </div>
                <div className={styles.cardText2}>
                  Outdoor advertising spots on digital screens all over Romania. If you target the Romanian Market, this
                  might be the service you need, we offer diverse locations that will fit your goals. Be it a mall, the
                  metro or a screen in a high traffic intersection. Is it worth being seen by millions of people on a
                  monthly basis? Short answer, yes it is.
                  <br /> We will help you choose the best locations for your brand.
                  <br /> The question still remains…
                  <br />
                  <span className={styles.bold2}>What does your business need to grow? </span>
                </div>
                <div className={styles.cardLink2}>
                  <a href="/advertising"> See details </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.marketingSixthSection}>
          <div className={styles.subscribeContainer}>
            <div className={styles.subscribeTitle}>Digital marketing secrets</div>
            <div className={styles.subscribeSubTitle}>Learn more, Subscribe to our newsletter</div>
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

export default Marketing;
