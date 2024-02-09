import React, { useState } from "react";
import styles from "../Homepage/Homepage.module.scss";
import { Q } from "./string.json";
import Accordion from "./Accordion";
import { uniqueId } from "lodash";
import digital from "../../media/assets/pics/homepage/digital.svg";
import street from "../../media/assets/pics/homepage/street.svg";
import it from "../../media/assets/pics/homepage/it.svg";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
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

  let navigate = useNavigate();

  function navigateCalendly() {
    navigate("/calendly");
  }
  return (
    <div className={styles.homepageContainer}>
      <div className={styles.firstContainer}>
        <div className={styles.mainText}>
          Nature needs water for Growth <span className={styles.orange}>Your Business </span> need sustainable growth
          solutions
        </div>

        <div className={styles.mainSubTitle}>
          {" "}
          At Viral 4 Hype we offer growth oriented services, We work on optimization daily so that no resources go to
          waste.
        </div>

        <div className={styles.homeBtn}>
          <button>Schedule a meeting with us</button>
        </div>
      </div>
      {/* <div className={styles.logosContainer}>
        <img src={images.homepage.accenture} alt="accenture" />
        <img src={images.homepage.zara} alt="zara" />
        <img src={images.homepage.thales} alt="thales" />
        <img src={images.homepage.dell} alt="dell" />
        <img src={images.homepage.luxoft} alt="luxoft" />
      </div> */}
      <div className={styles.secondContainer}>
        <div className={styles.servicesBtn}>
          <button>SERVICES</button>
        </div>

        <div className={styles.titleContainer}>
          <div className={styles.mainTitle}>How can we help your business?</div>
          <div className={styles.subTitle}>
            We don’t like to be called an agency. We are both a consulting and services company. Our main focus is on
            sustainable growth, real value and scaling the brands we work with. See below our main areas of focus.
          </div>
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
                <img src={it} alt="it" />
                <div>IT services</div>
              </div>
              <div className={styles.cardText}>
                We stated earlier that we save you time, in our first meeting we will analyse your business, then we can
                propose the best solutions for your business. After that we code it! Websites, web-based software
                solutions are just two examples of custom solutions we can offer you. <br />
                The question still remains…
                <br />
                <span className={styles.bold}>What does your business need to grow? </span>
              </div>
              <div className={styles.cardLink}>
                <a href="/services"> See details </a>
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
                <br /> <span className={styles.bold}>What does your business need to grow? </span>
              </div>
              <div className={styles.cardLink}>
                <a href="/advertising"> See details </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.thirdContainer}>
        <div className={styles.thirdWrapper}>
          <div className={styles.firstSection}>
            <div className={styles.firstSectionTitle}>
              Viral 4 Hype is an exclusive company that offers sustainable growth solutions for business.
            </div>
            <div className={styles.firstSectionText}>
              We’ve covered what we considered sustainable growth solutions for business, now let’s talk about what we
              mean when we say exclusive. <br />
              <br />
              We carefully select our projects and clients. We focus on both already developed companies that need help
              in scaling and start-ups which are just starting. We seek long-term partnerships that will ensure
              sustainability and stability. <br />
              <br />
              As we are not the ordinary agency we don’t focus on quantity but the quality of our clients. This will
              ensure that all our partners will receive all the attention they need.
            </div>
            <div className={styles.sectionBtn}>
              <button>Let’s talk about your business</button>
            </div>
          </div>
          <div className={styles.secondSection}>
            <div className={styles.cardsFAQ}>
              <div className={styles.cardsWrapper}>
                {Object.values(Q.questionList).map((item: any) => (
                  <Accordion key={uniqueId()} theQuestion={{ question: item.question, answer: item.answer }} />
                ))}{" "}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.forthContainer}>
        <div className={styles.forthWrapper}>
          <div className={styles.servicesBtn}>
            <button>PROCESS</button>
          </div>
          <div className={styles.titleContainer}>
            <div className={styles.mainTitle}>How can you work with us?</div>
            {/* <div className={styles.subTitle}>The process</div> */}
          </div>

          <div className={styles.stepsContainer}>
            <div className={styles.stepsWrapper}>
              <div className={styles.stepBtn}>
                <button>Step 1</button>
              </div>

              <div className={styles.stepTexts}>
                <div className={styles.stepTitle}>Have a meeting with us</div>
                <div className={styles.stepSubTitle}>
                  In this meeting we will get to know each other and analyse the way we can help your business grow.
                </div>
              </div>
            </div>

            <div className={styles.interLine}></div>
            <div className={styles.stepsWrapper}>
              <div className={styles.stepBtn}>
                <button>Step 2</button>
              </div>

              <div className={styles.stepTexts}>
                <div className={styles.stepTitle}>Analysis and planning phase</div>
                <div className={styles.stepSubTitle}>
                  After collecting all the data we need we will start analysing the best options for your business and
                  prepare our proposal to you.
                </div>
              </div>
            </div>
            <div className={styles.interLine}></div>
            <div className={styles.stepsWrapper}>
              <div className={styles.stepBtn}>
                <button>Step 3</button>
              </div>

              <div className={styles.stepTexts}>
                <div className={styles.stepTitle}>NDA and GO!</div>
                <div className={styles.stepSubTitle}>
                  During this phase we will sign an NDA, present our proposal and if both parties decide we can move
                  forward together we will go on with preparing the last details and start working on growing your
                  business.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.btnSteps}>
            <button>Book a call</button>
          </div>
        </div>
      </div>

      <div className={styles.fifthContainer}>
        <div className={styles.fifthWrapper}>
          <div className={styles.bigText}>Want to learn how you can optimise your business on your own?</div>
          <div className={styles.subscribeContainer}>
            <div className={styles.subscribeTitle}>
              Subscribe to our newsletter, you might win more than just knowledge
            </div>
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
  );
};

export default Homepage;
