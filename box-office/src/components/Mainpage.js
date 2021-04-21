import React from 'react';
import Navs from './Navs';
import Title from './Title';

const Mainpage = ({ children }) => {
  return (
    <div>
      <Title title="Box office" subtitle="movies" />
      <Navs />
      {children}
    </div>
  );
};

export default Mainpage;
