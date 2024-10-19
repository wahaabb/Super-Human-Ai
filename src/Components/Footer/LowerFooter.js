import React from 'react';
import'../../SCSS/Components/footer.css';
export default function LowerFooter() {
  return (
    <div className='footer'>
      <p >© {new Date().getFullYear()} | All Rights Reserved</p>
    </div>
  );
}



