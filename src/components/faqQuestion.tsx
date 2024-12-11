"use client";
import { useState } from "react";

export default function FaqQuestion(props: any) {
    const { question, answer } = props.container;

    const [height, setHeight] = useState("70px");
    const [caretStyle, setCaretStyle] = useState("fa-plus");
    return (
        <div className="faq-question"
            style={{
                maxHeight: height
            }}
        >
            <h4
                onClick={() => {
                    setHeight((prev) => {
                        return prev === "70px" ? "100vh" : "70px";
                    });
                    setCaretStyle((prev) => {
                        return prev === "fa-plus" ? "fa-angle-down" : "fa-plus";
                    });
                }} 
            >
                {question}
                <i className={`fa-solid ${caretStyle}`}></i>
            </h4>
            <p>
                {answer}
            </p>
        </div>
    );
}