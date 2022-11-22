import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function AnimatedTitle() {
    const text = 'Animated Text'; // This would normally be passed into this component as a prop!
    
    const ctrls = useAnimation();
    
    const { ref, inView } = useInView({
      threshold: 0.5,
      triggerOnce: true,
    });
    
    useEffect(() => {
      if (inView) {
        ctrls.start("visible");
      }
      if (!inView) {
        ctrls.start("hidden");
      }
    }, [ctrls, inView]);
    
    const characterAnimation = {
      hidden: {
        opacity: 0,
        y: `0.25em`,
      },
      visible: {
        opacity: 1,
        y: `0em`,
        transition: {
          duration: 1,
          ease: [0.2, 0.65, 0.3, 0.9],
        },
      },
    };
    
    return (
      <Title aria-label={text} role="heading">
        {text.split("").map((character, index) => (
          <Character
            ref={ref}
            aria-hidden="true"
            key={index}
            initial="hidden"
            animate={ctrls}
            variants={characterAnimation}
          >
            {character}
          </Character>
          ))
        }
      </Title>
    );
  }