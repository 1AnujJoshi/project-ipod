import React from "react";
import MenuItems from "./MenuItems";

class Menu extends React.Component {
  render() {
    const { selectedOption } = this.props;
    return (
      <div className="screen-menu">
        <div className="app-logo">
          <h2>Ipod.js</h2>
        </div>
        <MenuItems
          optionsInMenu={this.props.optionsInMenu}
          selectedOption={selectedOption}
        />
      </div>
    );
  }
}

export default Menu;
