import React from 'react';
import * as Icons from './Icons';

const App: React.FC = () => {
  const iconProps: Icons.IconProps = {
    primaryColor: 'blue',
    secondaryColor: 'green',
    className: 'icon-class',
  };

  return (
    <div>
      <Icons.Icon1 {...iconProps} />
      <Icons.Icon2 {...iconProps} />
    </div>
  );
};

export default App;
