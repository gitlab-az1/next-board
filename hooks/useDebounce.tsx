import type { GenericFunction } from 'typesdk/types';
import { useTimeout } from './useTimeout';
import { useEffect } from 'react';


export function useDebounce(callback: GenericFunction, delay: number, dependencies: any[]): void {
  const { reset, clear } = useTimeout(callback, delay);

  useEffect(reset, [...dependencies, reset]);
  useEffect(clear, []);
}

export default useDebounce;