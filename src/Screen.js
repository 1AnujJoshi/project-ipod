import React from 'react';
import Menu from './Menu';
import Game from './Games';
import Setting from './Setting';
import Coverflow from './Coverflow';
import Music from './Music';


class Screen extends React.Component{

    render(){
        return(
            <div className="screen-container">
                
                 <Menu
                    selectedOption={this.props.selectedOption}
                    optionsInMenu={this.props.optionsInMenu}
                />
                {this.props.showPage === 0 && this.props.optionsInMenu.length === 4 ? <Game /> : ''}
                {this.props.showPage === 1 && this.props.optionsInMenu.length === 4 ? <Music /> : ''}
                {this.props.showPage === 2 && this.props.optionsInMenu.length === 4 ? <Setting /> : ''}
                {this.props.showPage === 3 && this.props.optionsInMenu.length === 4 ? <Coverflow /> : ''}
                
            </div>
        );
    }
}


export default Screen;