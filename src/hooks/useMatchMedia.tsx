import { useState, useEffect } from "react"

export const useMatchMedia = () => {
    const [isNarrowScreen, setIsNarrowScreen] = useState(false);

    useEffect(() => {
      const mediaWatcher = window.matchMedia("(max-width: 576px)")
      setIsNarrowScreen(mediaWatcher.matches);
  
      function updateIsNarrowScreen(e: any) {
        setIsNarrowScreen(e.matches);
      }

      if(mediaWatcher.addEventListener) {
        mediaWatcher.addEventListener('change', updateIsNarrowScreen)

        return function cleanup() {
          mediaWatcher.removeEventListener('change', updateIsNarrowScreen)
        }
      } else {
        mediaWatcher.addListener(updateIsNarrowScreen)
        return function cleanup() {
          mediaWatcher.removeListener(updateIsNarrowScreen)
        }
      }
    }, [isNarrowScreen])
  
    return {isNarrowScreen};
}