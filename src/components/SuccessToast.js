import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SuccessToast = () => {
  const showToast = () => {
    toast.success('Form submitted successfully!', {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000, 
    });
  };

//   return (
//     <div>
//       <button onClick={showToast}>Submittttt</button>
//     </div>
//   );
};

export default SuccessToast;
