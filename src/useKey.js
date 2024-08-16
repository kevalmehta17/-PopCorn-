import { useEffect } from "react";
export function useKey(key, action) {
  useEffect(() => {
    const callback = (e) => {
      if (e.code.toLowerCase() === key.toLowerCase()) {
        action();
      }
    };
    document.addEventListener("keydown", callback);

    //here the below is cleanup Function that remove the Event Listener from the React Dom and that is very helpfull for large Application ~ Senior Dev Code Tips
    return () => {
      document.removeEventListener("keydown", callback);
    };
  }, [action, key]);
}
