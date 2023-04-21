import { useEffect, useRef, useState } from 'react';

export const usePopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const popUp = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClickOutside = ({ target }: MouseEvent) => {
    if (!popUp.current.contains(target as Node)) {
      setShowPopup(false);
    }
  };

  return [popUp, showPopup, setShowPopup] as const;
};
