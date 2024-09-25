import React from 'react';
import TNB from '../../components/Navigation/TNB';
import Description from './Description';

export default function Profile() {
  return (
    <div className='w-full h-full flex flex-col'>
        {/* Profile TNB */}
        <TNB name='profile'/>
        
        {/* Profile Description */}
        <Description/>

        {/* My Content */}
        <div>
            Contents
        </div>
    </div>
  );
}