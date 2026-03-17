import { useState, useEffect, useCallback } from "react";

export function useTypewriter(words: string[], typingSpeed = 100, deletingSpeed = 50, pauseTime = 2000) {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  const tick = useCallback(() => {
    const currentWord = words[wordIndex % words.length];

    if (isDeleting) {
      setText(prev => currentWord.substring(0, prev.length - 1));
    } else {
      setText(prev => currentWord.substring(0, prev.length + 1));
    }
  }, [isDeleting, wordIndex, words]);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];

    let delay: number;

    if (!isDeleting && text === currentWord) {
      delay = pauseTime;
      const timeout = setTimeout(() => setIsDeleting(true), delay);
      return () => clearTimeout(timeout);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex(prev => prev + 1);
      delay = typingSpeed;
      const timeout = setTimeout(tick, delay);
      return () => clearTimeout(timeout);
    } else {
      delay = isDeleting ? deletingSpeed : typingSpeed;
      const timeout = setTimeout(tick, delay);
      return () => clearTimeout(timeout);
    }
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime, tick]);

  return text;
}
