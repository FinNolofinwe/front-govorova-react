import { useState, useLayoutEffect, ReactNode, FC } from "react";
import { createPortal } from "react-dom";

interface IPortal {
  children: ReactNode;
  wrapperId: string;
}

interface TPortalDiv {
  elem: HTMLElement | null;
}

const Portal: FC<IPortal> = ({ children, wrapperId }) => {
  function createAndAppend(wrapperId: string): HTMLElement {
    const wrapperElem = document.createElement("div");
    wrapperElem.setAttribute("id", wrapperId);
    document.body.appendChild(wrapperElem);
    return wrapperElem;
  }

  const [wrapperElem, setWrapperElem] = useState<TPortalDiv>({
    elem: null,
  });

  useLayoutEffect(() => {
    let elem: HTMLElement | null = document.getElementById(wrapperId);
    let systemCreated = false;
    if (!elem) {
      systemCreated = true;
      elem = createAndAppend(wrapperId);
    }

    setWrapperElem({ elem });

    return () => {
      if (systemCreated && elem && elem.parentNode) {
        elem.parentNode.removeChild(elem);
      }
    };
  }, [wrapperId]);

  if (wrapperElem.elem === null) return null;

  const { elem } = wrapperElem; 

  return createPortal(children, elem);
};

export default Portal;