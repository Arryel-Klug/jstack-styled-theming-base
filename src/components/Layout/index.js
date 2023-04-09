import React from 'react';
import { useTheme } from 'styled-components';

import Header from '../Header';
import PostsList from '../PostsList';
import Footer from '../Footer';

export default function Layout() {
  
  const theme = useTheme();
  // console.log(`Log aqui`,theme);

  return (
    <>
      <Header/>
      <PostsList />
      <Footer/>

    <div
      style={{
        marginTop:24,
        backgroundColor: theme.footerBackgroundColor,
        padding: 24,
        font: 'white',        
      }}
    >
      Trau
    </div>

  </>
  );
}
