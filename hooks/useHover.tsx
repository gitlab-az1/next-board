import { useEventListener } from './useEventListener';
import React, { useState } from 'react';


export function useHover<E extends HTMLElement>(ref: React.RefObject<E>): boolean {
  if(!ref.current) return false;
  
  const [hovered, setHovered] = useState(false);

  useEventListener('mouseover', () => setHovered(true), ref.current);
  useEventListener('mouseout', () => setHovered(false), ref.current);

  return hovered;
}

export default useHover;