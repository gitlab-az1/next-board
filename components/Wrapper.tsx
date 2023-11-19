import { useTheme } from '@context/theme';
import React from 'react';
import Dialog from './Dialog';
import { useSelector } from 'react-redux';


export type WrapperProps = {
  readonly children: React.ReactNode;
}

const Wrapper = (props: WrapperProps) => {
  const { theme } = useTheme();
  const { isAuthModalOpen } = useSelector((state: any) => state.appState);

  return (
    <>
      <Dialog
        open={isAuthModalOpen}
        filter={theme === 'dark' ? 'blur(1px)' : undefined}
        bg={theme === 'light' ? 'rgba(0, 0, 0, 0.068)' : 'rgba(245, 245, 245, 0.068)'}
        sx={{
          maxWidth: '450px',
          width: '100%',
          margin: '20px',
          padding: '12.5px 18px',
        }}
      >
        ...
      </Dialog>
      <div className="wrapper">
        {props.children}
      </div>
    </>
  );
};

export default Wrapper;