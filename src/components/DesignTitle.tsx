import React from 'react';

const DesignTitle = ({ desginTitle = "title", textColor = "black" }) => {

  const title = desginTitle
  const color = textColor

  return (
    <div className=' flex justify-start pt-12 sm:pt-16 fixed'>
      <h1 className=' p-4 font-roboto font-bold text-xl sm:text-2xl text-stone-800'>{title}</h1>
    </div>
  );
};

export default DesignTitle;