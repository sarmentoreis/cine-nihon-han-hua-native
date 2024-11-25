import { useTransition } from "@react-spring/native";
import { useState } from "react";

export const useTransitionLogos = (logos: string[]) => {
  const [index, setIndex] = useState(0);

  const transitions = useTransition(index, {
    key: index,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 4000 },
    onRest: () => {
      setIndex((state) => (state + 1) % logos.length);
    },
    exitBeforeEnter: true,
  });

  return { transitions, index };
};
