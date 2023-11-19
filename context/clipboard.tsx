import React, { createContext, useContext } from 'react';
import { VirtualClipboard } from 'typesdk';

export const ClipboardContextRoot = createContext({} as VirtualClipboard);


export function ClipboardProvider({ children }: { readonly children: React.ReactNode }) {
  const vc = new VirtualClipboard();

  return (
    <ClipboardContextRoot.Provider value={vc}>
      {children}
    </ClipboardContextRoot.Provider>
  );
}


export function useClipboard(): VirtualClipboard {
  const ctx = useContext(ClipboardContextRoot);

  if(!ctx) {
    throw new Error('useClipboard must be used within a ClipboardProvider');
  }
  
  return ctx;
}