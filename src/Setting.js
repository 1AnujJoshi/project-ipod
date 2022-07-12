import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
class Setting extends React.Component{
    render(){
        return (
            <div className="screen ">
                <FontAwesomeIcon icon={solid('gears') } size="4x" className="highlight"   beatFade />
               <div className='title'> <h2>Settings</h2></div>
            </div>
        );
    }
};

export default Setting;