import React from 'react';

const SectionTitle = ({title,subTitle}) => {
    return (
      <div className='text-center my-10'>
        -----------------------------------------------------------
        <h1 className='font-bold text-red-600 text-3xl'>{title}</h1>
        <h1 className='text-2xl font-bold'>{subTitle}</h1>
        ------------------------------------------------------------
      </div>
    );
};

export default SectionTitle;