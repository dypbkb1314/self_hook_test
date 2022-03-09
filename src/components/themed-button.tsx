import React from 'react'
import {ThemeContext} from './theme-context';

interface P{
  onToggle: ()=>{}
}

class ThemedButton extends React.Component<P> {
  render() {
    let props = this.props;
    let theme = this.context;
    return (
      <button
        {...props}
        style={{backgroundColor: theme.background, color: theme.color}}
        onClick={()=>props.onToggle()}
      />
    );
  }
}
ThemedButton.contextType = ThemeContext;

export default ThemedButton;