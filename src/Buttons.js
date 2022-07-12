import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
const Buttons = (props) =>
{
    return (
        <div className="buttons-container" >
            <button className="center-circle" onClick={props.selectButtonClicked}>
            </button>

            <button className="menu-button common-btn-style" onClick={props.menuButtonClicked}>
                <h5>MENU</h5>
            </button>
            <button className="left-button common-btn-style" onClick={props.leftButtonClicked}>
            <FontAwesomeIcon icon={solid('backward-fast')} />
            </button>
            <button className="right-button common-btn-style" onClick={props.rightButtonClicked}>
            <FontAwesomeIcon icon={solid('forward-fast')} />
            </button>
            <button className="play-pause common-btn-style" onClick={props.playPauseButtonClicked}>
            <FontAwesomeIcon icon={solid('play')} />  &nbsp;<FontAwesomeIcon icon={solid('pause')} />
            </button>
        </div>
    );
}

export default Buttons;