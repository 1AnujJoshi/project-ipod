import './App.css';
import React from 'react';
import Screen from './Screen';
import Buttons from './Buttons';
import ZingTouch from 'zingtouch';
import $ from 'jquery';

class App extends React.Component{
    constructor(){
        super();
        this.temp_change_in_angle = 0;
        this.temp_selected = 0;
        this.state = {
            options: ['Games', 'Music', 'Settings', 'CoverFlow'],
            change_in_angle: 0,
            selected: 0,
            showPage: -1,
            general_menu: ['Games', 'Music', 'Settings', 'Cover Flow'],
        }
  }

  componentDidMount(){
        var containerElement = new ZingTouch.Region(document.getElementsByClassName('buttons-container')[0]);

        // function to bring zingtouch's rotate functionality to ipod 
        containerElement.bind(document.getElementsByClassName('buttons-container')[0], 'rotate', (event) =>{
            if (document.getElementsByClassName('screen-menu')[0].classList.contains('width-50')){
                let dist = event.detail.distanceFromLast;
                this.temp_change_in_angle += dist;
                if (this.temp_change_in_angle > 45){
                    this.temp_selected++;
                    this.temp_selected = this.temp_selected % this.state.options.length;
                    this.setState({
                        selected: this.temp_selected,
                    });
                    this.temp_change_in_angle = 0;
                }
                else if (this.temp_change_in_angle < -45){
                    this.temp_selected--;
                    if (this.temp_selected === -1)
                        this.temp_selected = this.state.options.length - 1;

                    this.temp_selected = this.temp_selected % this.state.options.length;
                    this.setState({
                        selected: this.temp_selected, 
                    });
                    this.temp_change_in_angle = 0;
                }
            }
        });
    }

    // if menu button clicked , show or hide menu
    menuButtonClicked = () =>{ 
        if(this.state.options.length === 4 && this.state.showPage !== -1){
            this.setState({
                showPage: -1
            });  
        }
       let screenMenuClassList = document.getElementsByClassName('screen-menu')[0].classList;
        if (screenMenuClassList.contains('width-50')){
            $('.screen-menu').removeClass('width-50');//hide menu
            
        }
        else{
            $('.screen-menu').addClass('width-50');//show menu  
        }
    }

    // select the listed option from the menu
    selectButtonClicked = () =>{
        this.setState({
            showPage: this.state.selected,
            selected: 0,
        });
        this.temp_selected = 0;
        this.menuButtonClicked();
    }

    // render the app and its components
    render(){
        return(
        <div className="App">
            <Screen
            selectedOption={this.state.selected}
            showPage={this.state.showPage}
            optionsInMenu={this.state.options}
            />
            <Buttons
            menuButtonClicked={this.menuButtonClicked}
            selectButtonClicked={this.selectButtonClicked}
            />
        </div>
        );
    }
}

export default App;
