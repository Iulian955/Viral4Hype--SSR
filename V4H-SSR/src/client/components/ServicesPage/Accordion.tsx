import React, { useEffect, useState } from "react";
import { uniqueId } from "lodash";
import ReactGA from "react-ga4";
import styles from "./Accordion.module.scss";
import { FaHandshakeAngle } from "react-icons/fa6";
import plus from "../../media/assets/pics/homepage/orangePlus.svg";

interface cardBoardProps {
  theQuestion: QuestionData;
}
interface QuestionData {
  question: string;
  answer: React.ReactNode;
}
const Accordion = ({ theQuestion }: cardBoardProps) => {
  const [cardboardOpen, setCardOn] = useState<boolean>(false);
  const clickHandler = () => {
    setCardOn(!cardboardOpen);
    ReactGA.event(`user_FAQ_clickedQuestion_${theQuestion.question.substring(0, 16)}`);
  };

  return (
    <div onClick={clickHandler} className={cardboardOpen ? styles.questionCard : styles.collapsed}>
      <div className={styles.primaryLine}>
        <div className={styles.questionIcon}>
          <p className={cardboardOpen ? styles.orange : styles.questionText}>{theQuestion.question}</p>
        </div>
        <div className={styles.detailsPadder}>
          {cardboardOpen ? (
            <img className={styles.pinkArrowDown} src={plus} />
          ) : (
            <img className={styles.pinkArrowDown} src={plus} />
          )}
        </div>
      </div>
      <div className={styles.answerArea}>
        <div className={cardboardOpen ? styles.activePop : styles.inactivePop}>{theQuestion.answer}</div>
      </div>
    </div>
  );
};

export default Accordion;
