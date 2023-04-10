import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export class ThemeProvider extends React.Component {
  constructor(props){
    super(props);

    let theme = 'dark';

    try{
      
      theme = JSON.parse(localStorage.getItem('theme'));  
      
    } catch(erro){
      console.log(erro);
    } 

    this.state= {
      theme,
    }
  }  

  componentDidMount(){}

  componentDidUpdate(prevProps, prevState){
    if(prevState.theme !== this.state.theme){
      localStorage.setItem('theme', JSON.stringify(this.state.theme));
    }
  }

  handleToggleTheme =() => {
    this.setState(prevState => ({
      theme: prevState.theme === 'dark' ? 'light' : 'dark' }));
  }

  render (){
    return(
      <ThemeContext.Provider 
        value={{
          theme: this.state.theme, 
          handleToggleTheme: this.handleToggleTheme}}
        >
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}
