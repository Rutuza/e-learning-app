import React from 'react';
import Done_btn from '../../Buttons/Done_btn';

function Participate() {
  return (
    <>
      <div className='flex items-center gap-12'>
        <div>Participate in discussion</div>
        <button type="button"><Done_btn/></button>
      </div>

      <div className="date_time mt-2 text-xs text-gray-300 flex justify-between">
        <div className="">Jackey Miles</div>
        <div>30 Mar, 11:59 PM</div>
      </div>
    </>
  );
}

export default Participate;
