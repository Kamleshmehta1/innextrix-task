import { useState, useEffect, useCallback } from 'react';
import { throttle } from '../utils/handleThrottling';

function useIsMobileScreen(): boolean {
  const [isMobileView, setIsMobileView] = useState<boolean>(false);

  const handleResize = useCallback((): void => {
    const isMobileDevice = window.innerWidth <= 600;

    setIsMobileView(isMobileDevice);
  }, []);

  useEffect(() => {
    const throttledOutput = throttle(handleResize, 0); // first paramater as call back function and second parameter for time limit to throttle
    window.addEventListener('resize', throttledOutput);
    return () => {
      window.removeEventListener('resize', throttledOutput);
    };
  }, [handleResize]);

  return isMobileView;
}

export default useIsMobileScreen;
