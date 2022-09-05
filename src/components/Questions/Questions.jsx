import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import FAQ from "../../assets/images/FAQtag.svg"
import FAQImage from "../../assets/images/Faq_photo.png"
import { QuestionsStyled } from "./Questions.styled";

const arrowRight = <FontAwesomeIcon icon={faPlus} />;
const arrowDown = <FontAwesomeIcon icon={faMinus} />;

const questionData = [
    {
        question: "How much is online therapy?",
        answer:
            "The cost of online therapy varies by platform. Haven ranges from $60 to $90 per week (billed every four weeks) for unlimited messaging and weekly video, phone (talk therapy), or chat appointments with a licensed mental health professional not simply social workers. ",
    },
    {
        question: "How can online therapy help me?",
        answer:
            "Online therapy holds all the same mental health benefits as in-person therapy, with the added convenience of being able to talk to your therapist anytime, anywhere. With options for messaging, live chat, phone calls, and video calls, you can choose a method of communication that is most comfortable for you, all with a licensed therapist just as qualified as one you would see in an office. After filling out a questionnaire and being matched with a therapist who fits your needs, you can meet and start working on yourself right away.",
    },
    {
        question: "Does insurance cover online therapy?",
        answer:
            "This depends on a few factors and varies among insurance plans. Haven does not officially accept insurance or partner with any insurance providers and partners. However, the Mental Health Parity Act currently requires that employers and others who provide access to group health plans must offer equal benefits for medical and mental health-related services. As a result, some major health insurance providers now cover online behavioral and mental health services; all of which is covered by insurance. The best way to find out if you can have online therapy covered by your health insurance is to ask your provider by either calling them or reviewing your coverage plan online. From there, your provider can help you find a therapist's office with their insurance accepted that lines up with your insurance plan.",
    },
    {
        question: "Is online therapy as effective as in-person?",
        answer:
            "Many studies have confirmed the effectiveness of online therapy for making positive life changes. For example, research published by JMIR Publications and the Berkeley Well-Being Institute found that online therapy is just as effective as in-person therapy. Whether you decide to seek therapy in-person or online, working with an experienced and licensed therapist can help you understand their methodology to help you overcome various mental health and life challenges. ",
    },
];

function QuestionsList() {
    const [selected, setSelected] = useState(null);

    const toggle = (index) => {
        if (selected === index) {
            return setSelected(null);
        }
        return setSelected(index);
    };
    return (
        <QuestionsStyled>
            <div className="list__title">
                <FAQ/>
            </div>
            <div className="list-wrapper">
                <div className="accordion">
                {questionData.map((item, index) => (
                    <div className="item" key={index}>
                        <div
                            className={
                                selected === index ? "item-title" : "item-title not-selected"
                            }
                            onClick={() => toggle(index)}
                            key={index}
                        >
                            <h2>{item.question}</h2>
                            {selected === index ? arrowDown : arrowRight}
                        </div>
                        <div
                            className={
                                selected === index ? "item-content show" : "item-content hidden"
                            }
                        >
                            <p>{item.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </QuestionsStyled>
    );
}

export default QuestionsList;
