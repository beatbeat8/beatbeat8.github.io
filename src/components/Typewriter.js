import React, { useState, useEffect } from "react";

const Typewriter = ({ texts, typingSpeed, deleteSpeed, pauseDuration, loop }) => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let timeout;

    if (isPaused) {
        timeout = setTimeout(() => {
          setIsPaused(false); // Start deleting after pause
          setIsDeleting(true); // Begin deleting the current text
        }, pauseDuration);
      } else {

        const currentText = texts[index];

        if (isDeleting) {
        timeout = setTimeout(() => {
            setText(currentText.slice(0, text.length - 1));
        }, deleteSpeed);
        if (text.length === 0) {
            setIsDeleting(false);
            setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
        } else {
        timeout = setTimeout(() => {
            setText(currentText.slice(0, text.length + 1));
        }, typingSpeed);
        if (text.length === currentText.length) {
            setIsPaused(true);
            setIsDeleting(true);
        }
        }
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, isPaused, texts, typingSpeed, deleteSpeed, index, pauseDuration]);

  return <span>{text}<span style={{ opacity: text.length > 0 ? 1 : 0 }}>|</span></span>;
};

export default Typewriter;
