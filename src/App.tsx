import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as Icons from './Icons';

const App: React.FC = () => {
  const iconProps: Icons.IconProps = {
    primaryColor: 'blue',
    secondaryColor: 'green',
    className: 'icon-class',
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <img
          src={logo}
          className='App-logo'
          alt='logo'
        />
        <Icons.Icon1 {...iconProps} />
        <Icons.Icon2 {...iconProps} />
      </header>
    </div>
  );
};

export default App;
