import React, { useContext } from 'react';
import { useGlobalContext } from './context';

const Hi = () => {
  const { sel, setSel } = useGlobalContext();
  // console.log(sel, setSel, 'na');
  return <>{sel} </>;
};

export default Hi;
