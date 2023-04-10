import React from 'react';
import { useTheme } from 'styled-components';

import Header from '../Header';
import PostsList from '../PostsList';
import Footer from '../Footer';

export default class Layout extends React.Component{
  componentDidMount(){
    document.addEventListener('scroll', this.handleScroll);
  }
  
  componentWillUnmount(){
    console.log('componente vai de base');
    document.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    console.log('scrolled...')
  }

  render(){
    return(
      <>
        <Header />
        <PostsList />
        <Footer />
      </>
    );
  }
}