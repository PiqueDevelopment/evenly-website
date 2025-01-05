import React, { ReactNode } from 'react';
import DocNavbar from './DocNavbar.tsx';

interface DocLayoutProps {
  children: ReactNode;
}

const DocLayout: React.FC<DocLayoutProps> = ({ children }) => {
  return (
    <div className='container'>
      <DocNavbar />
      <div className='doc-content'>
        {children}
      </div>
    </div>
  );
};

export default DocLayout;