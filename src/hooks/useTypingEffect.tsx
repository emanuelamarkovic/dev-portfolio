import { useState, useEffect } from "react";

const useTypingEffect = (
  texts: string[],
  typingSpeed: number = 120,
  deletingSpeed: number = 60,
  pauseTime: number = 5000
) => {
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      if (isDeleting) {
        setCharIndex((prev) => prev - 1);
        setCurrentText(texts[index].substring(0, charIndex - 1));
      } else {
        setCharIndex((prev) => prev + 1);
        setCurrentText(texts[index].substring(0, charIndex + 1));
      }

      if (!isDeleting && charIndex === texts[index].length) {
        setIsDeleting(true);
        setTimeout(() => setIsDeleting(false), pauseTime);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % texts.length);
      }
    };

    const typingInterval = setInterval(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );
    return () => clearInterval(typingInterval);
  }, [charIndex, isDeleting, index]);

  return currentText;
};

export default useTypingEffect;
