import React, { Component } from 'react';
import NavigationBar from '../components/navigationBar/navigationBar.js'
import { Pane, Card, Switch, Heading } from 'evergreen-ui';

class PrimaryLayout extends Component {

  handleOnAdd = () => {
    console.log('handleOnAdd');
  }

  render() {
    return (
      <div>
        <NavigationBar handleOnAdd={this.handleOnAdd}/>
        <Pane elevation={0} display="flex" flexDirection="column" padding={16}>
          { this.props.children }
        </Pane>        
      </div>
    );
  }
}

export default PrimaryLayout;