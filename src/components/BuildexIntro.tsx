import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';

/**
 * Full-page intro reproduced from the reference site. A 3s eased progress
 * run locks scrolling while greeting words cycle, then the final brand word
 * holds before the overlay fades out and unlocks scroll. Every value mirrors
 * the reference; the only content change is the final word (BuildexNow).
 */
const WORDS = ['Namaste', 'Hello', 'Hola', 'Bonjour', 'নমস্কাৰ', 'BuildexNow'];
const DURATION = 3000;

export function BuildexIntro() {
  const reduced = useReducedMotion();
  const [visible, setVisible] = useState(!reduced);
  const introRef = useRef<HTMLDivElement>(null);
  const wordRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const percentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // The reference disables intro motion for reduced-motion users; skip the
    // overlay entirely so scroll is never locked and nothing flashes.
    if (reduced) {
      setVisible(false);
      return;
    }

    const intro = introRef.current;
    const word = wordRef.current;
    const progress = progressRef.current;
    const percent = percentRef.current;
    if (!intro || !word || !progress || !percent) return;

    const root = document.documentElement;
    const body = document.body;
    const previousRootOverflow = root.style.overflow;
    const previousBodyOverflow = body.style.overflow;
    const restoreOverflow = () => {
      if (previousRootOverflow) root.style.setProperty('overflow', previousRootOverflow);
      else root.style.removeProperty('overflow');
      if (previousBodyOverflow) body.style.setProperty('overflow', previousBodyOverflow);
      else body.style.removeProperty('overflow');
    };
    root.style.setProperty('overflow', 'hidden');
    body.style.setProperty('overflow', 'hidden');

    let frame = 0;
    let wordIndex = 0;
    let finished = false;
    const timers: number[] = [];

    const changeWord = () => {
      if (wordIndex >= WORDS.length - 1) return;
      word.classList.remove('word-in');
      word.classList.add('word-out');
      timers.push(
        window.setTimeout(() => {
          wordIndex += 1;
          word.textContent = WORDS[wordIndex];
          word.classList.remove('word-out');
          void word.offsetWidth;
          word.classList.add('word-in');
        }, 220),
      );
    };

    const wordInterval = window.setInterval(() => {
      if (wordIndex < WORDS.length - 1) changeWord();
    }, 430);

    const finishIntro = () => {
      if (finished) return;
      finished = true;
      window.clearInterval(wordInterval);
      word.classList.remove('word-in', 'word-out');
      word.textContent = WORDS[WORDS.length - 1];
      timers.push(
        window.setTimeout(() => {
          intro.classList.add('buildexnow-popup-start');
          timers.push(
            window.setTimeout(() => {
              setVisible(false);
              restoreOverflow();
            }, 800),
          );
        }, 450),
      );
    };

    const updateProgress = (now: number) => {
      const elapsed = Math.max(0, now - startTime);
      const percentage = Math.min((elapsed / DURATION) * 100, 100);
      let visualPercentage = Math.round(100 * (1 - Math.pow(1 - percentage / 100, 1.35)));
      if (percentage >= 100) visualPercentage = 100;
      progress.style.width = `${visualPercentage}%`;
      percent.textContent = String(visualPercentage);
      if (percentage < 100) frame = requestAnimationFrame(updateProgress);
      else finishIntro();
    };

    const startTime = performance.now();
    frame = requestAnimationFrame(updateProgress);

    return () => {
      cancelAnimationFrame(frame);
      window.clearInterval(wordInterval);
      timers.forEach(window.clearTimeout);
      restoreOverflow();
    };
  }, [reduced]);

  if (!visible) return null;

  return (
    <div id="buildexnow-page-intro" ref={introRef} className="buildexnow-page-intro" aria-hidden="true">
      <div className="buildexnow-intro-word-wrap">
        <div id="buildexnow-intro-word" ref={wordRef} className="buildexnow-intro-word">
          Namaste
        </div>
      </div>
      <div className="buildexnow-intro-loader">
        <div className="buildexnow-intro-loader-line">
          <div id="buildexnow-intro-progress" ref={progressRef} className="buildexnow-intro-loader-fill" />
        </div>
        <div id="buildexnow-intro-percent" ref={percentRef} className="buildexnow-intro-percent">
          0
        </div>
      </div>
      <div id="buildexnow-popup-transition" className="buildexnow-popup-transition" />
    </div>
  );
}
