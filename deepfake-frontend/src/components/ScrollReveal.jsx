import { useEffect, useRef, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './ScrollReveal.css';

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.3,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = '',
  textClassName = '',
  rotationEnd = 'bottom bottom',
  wordAnimationEnd = 'bottom bottom'
}) => {
  const containerRef = useRef(null);

  const splitText = useMemo(() => {
    const text = typeof children === 'string' ? children : '';
    return text.split(/(\s+)/).map((word, index) => {
      if (word.match(/^\s+$/)) return word;
      return (
        <span className="word" key={index}>
          {word}
        </span>
      );
    });
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Wait for next tick to ensure DOM is ready
    const timer = setTimeout(() => {
      const scroller = scrollContainerRef && scrollContainerRef.current ? scrollContainerRef.current : window;

      // Set initial states - start more visible
      gsap.set(el, { transformOrigin: '0% 50%', rotate: baseRotation });
      
      const wordElements = el.querySelectorAll('.word');
      
      // Set initial opacity higher for better visibility
      gsap.set(wordElements, { 
        opacity: Math.max(baseOpacity, 0.5), 
        willChange: 'opacity',
        filter: enableBlur ? `blur(${blurStrength * 0.5}px)` : 'blur(0px)'
      });

      // Rotation animation
      gsap.to(el, {
        ease: 'none',
        rotate: 0,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: 'top bottom',
          end: rotationEnd,
          scrub: true,
          invalidateOnRefresh: true
        }
      });

      // Opacity animation - start from current state
      gsap.to(wordElements, {
        ease: 'none',
        opacity: 1,
        stagger: 0.05,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: 'top bottom-=20%',
          end: wordAnimationEnd,
          scrub: true,
          invalidateOnRefresh: true
        }
      });

      // Blur animation
      if (enableBlur) {
        gsap.to(wordElements, {
          ease: 'none',
          filter: 'blur(0px)',
          stagger: 0.05,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: 'top bottom-=20%',
            end: wordAnimationEnd,
            scrub: true,
            invalidateOnRefresh: true
          }
        });
      }

      // Refresh ScrollTrigger after a short delay to ensure proper initialization
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars && trigger.vars.trigger === containerRef.current) {
          trigger.kill();
        }
      });
    };
  }, [scrollContainerRef, enableBlur, baseRotation, baseOpacity, rotationEnd, wordAnimationEnd, blurStrength]);

  return (
    <h2 ref={containerRef} className={`scroll-reveal ${containerClassName}`}>
      <p className={`scroll-reveal-text ${textClassName}`}>{splitText}</p>
    </h2>
  );
};

export default ScrollReveal;
