import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
class Coverflow extends React.Component
{
    render()
    {
        return (
            <div className="screen">
                <div>
                <FontAwesomeIcon icon={solid('photo-video')} size="4x" className="highlight"  beatFade />
                <div className='title'> <h2>CoverFlow</h2></div>
                </div>
            </div>
        );
    }
};

export default Coverflow;