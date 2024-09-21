import { useEffect, useRef } from "react";

export function useOutsideClick(handler, listenCapture = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          console.log("click outside.");
          handler();
        }
      }

      document.addEventListener("click", handleClick);

      return () =>
        document.removeEventListener("click", handleClick, listenCapture);
    },
    [handler, listenCapture]
  );

  return ref;
}
