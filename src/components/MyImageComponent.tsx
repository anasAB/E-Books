import React, { Suspense } from 'react'
import { useImage } from 'react-image'

import { Img } from 'react-image'; // Import Img component

interface MyImageComponentProps {
    srcImag: string;
  }


  const MyImageComponent: React.FC<MyImageComponentProps> = ({ srcImag }) => {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Img src={srcImag} alt="Book Cover" />
      </Suspense>
    );
  };

  export default MyImageComponent