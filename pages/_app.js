import { ThemeProvider,createTheme } from "@mui/material/styles"
import IranYekan from "../public/fonts/iranyekanwebregular.woff2";
import IranYekanBold from "../public/fonts/iranyekanwebbold.woff2";
import { CssBaseline } from "@mui/material";
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import NavBar from "../Components/NavBar";
import { useState } from "react";
import Footer from "../Components/Footer";

// Create rtl cache
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

function RTL(props) {
  return <CacheProvider value={cacheRtl}>{props.children}</CacheProvider>;
}

function MyApp({ Component, pageProps }) {

  const [IsDarkMode, setIsDarkMode] = useState(true);
  const DefaultTheme = createTheme({
    palette:{
      mode:IsDarkMode? 'dark':'light',
      primary:{
        main:'#00e676'
      },
      secondary:{
        main:'#00e5ff'
      }
    },
    typography: {
      fontFamily: 'IranYekan,IranYekanBold, Arial',
      h1:{fontSize:'2rem'},
      h3:{fontSize:'1.17rem'}
    },
    direction: 'rtl',
    shape:{
      borderRadius:20
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
      @font-face {
        font-family: 'IranYekan';
        font-style: normal;
        font-display: swap;
        font-weight: 400;
        src: local('IranYekan'), local('IranYekan'), url('/fonts/iranyekanwebregular.woff2') format('woff2');
        
      }
      @font-face {
        font-family: 'IranYekanBold';
        font-style: normal;
        font-display: swap;
        font-weight: 400;
        src: local('IranYekanBold'), local('IranYekanBold'), url('/fonts/iranyekanwebbold.woff2') format('woff2');
        
      }
    
      ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
        z-index: 1;
    }
    ::-webkit-scrollbar-thumb {
        background: #c4c4c4;
        border-radius: 24px;
    }
    ::-webkit-scrollbar-track {
        background: transparent;
    }
      `,
      }},
  })

  return (
    <RTL>
    <ThemeProvider theme={DefaultTheme}>
      <CssBaseline/>
      <NavBar ToggleThemeMode={()=>setIsDarkMode(cur=>!cur)}/>
      <Component {...pageProps} />
      <Footer/>
    </ThemeProvider>
    </RTL>
  )
}

export default MyApp
