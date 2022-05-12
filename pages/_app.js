import { ThemeProvider,createTheme,responsiveFontSizes } from "@mui/material/styles"
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
import './mainStyle.css'
import Head from "next/head";
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
  let DefaultTheme = createTheme({
    palette:{
      mode:IsDarkMode? 'dark':'light',
      primary:{
        main:IsDarkMode? '#4CB3CA' : '#26a69a'
      },
      secondary:{
        main:'#4A6BA0'
      },
      background:{
        default : IsDarkMode ? '#121212':'#f8f9fa',
        paper: IsDarkMode ? '#121212':'#FCFCFC',
      }
    },
    typography: {
      fontFamily: 'IranYekan,IranYekanBold,Satoshi-Medium',
      
      h1:{fontSize:'48px',lineHeight:1.4},
      h2:{fontSize:'32px',lineHeight:1.3},
      h3:{fontSize:'24px'},
      h4:{fontSize:'1.272em'},
      h5:{fontSize:'1.333em'},
      body1:{lineHeight:1.6}
    },
    shadows:{
      "0":"none",
      "1":"2px 2px 8px rgba(71, 82, 115,.1), -2px -2px 8px rgba(76, 179, 202,.2)",
      "2":"4px 4px 18px rgba(71, 82, 115,.1), -4px -4px 18px rgba(76, 179, 202,.2)",
      // '3:''20px 20px 60px #bebebe, -20px -20px 60px #ffffff'},
      // '4:''20px 20px 60px #bebebe, -20px -20px 60px #ffffff'},
      // '5:''20px 20px 60px #bebebe, -20px -20px 60px #ffffff'},
      // '6:''20px 20px 60px #bebebe, -20px -20px 60px #ffffff'},
      // '7:''20px 20px 60px #bebebe, -20px -20px 60px #ffffff'},
      // '8:''20px 20px 60px #bebebe, -20px -20px 60px #ffffff'},
      // '9':20px 20px 60px #bebebe, -20px -20px 60px #ffffff'},
      // '10':'20px 20px 60px #bebebe, -20px -20px 60px #ffffff'},
      // '11':'20px 20px 60px #bebebe, -20px -20px 60px #ffffff'},
      // '12':'20px 20px 60px #bebebe, -20px -20px 60px #ffffff'},
      // '13':'20px 20px 60px #bebebe, -20px -20px 60px #ffffff'},
      // '14':'20px 20px 60px #bebebe, -20px -20px 60px #ffffff'},
      // '15':'20px 20px 60px #bebebe, -20px -20px 60px #ffffff'},
      // '16':'20px 20px 60px #bebebe, -20px -20px 60px #ffffff'},
      // '17':'20px 20px 60px #bebebe, -20px -20px 60px #ffffff'},
      // '18':'20px 20px 60px #bebebe, -20px -20px 60px #ffffff'},
      // '19':'20px 20px 60px #bebebe, -20px -20px 60px #ffffff'},
      // '20':'20px 20px 60px #bebebe, -20px -20px 60px #ffffff'},
      // '21':'20px 20px 60px #bebebe, -20px -20px 60px #ffffff'},
      // '22':'20px 20px 60px #bebebe, -20px -20px 60px #ffffff'},
      // '23':'20px 20px 60px #bebebe, -20px -20px 60px #ffffff'},
      // '24':'20px 20px 60px #bebebe, -20px -20px 60px #ffffff'},
    },
    direction: 'rtl',
    shape:{
      borderRadius:12
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
      @font-face {
        font-family: 'Satoshi-Medium';
        font-style: normal;
        font-display: swap;
        font-weight: 400;
        src: local('Satoshi-Medium'), local('Satoshi-Medium'), url('/fonts/Satoshi-Medium.woff2') format('woff2');
        
      }
    
      ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
        z-index: 1;
    }
    ::-webkit-scrollbar-thumb {
        background: #475273;
        border-radius: 24px;
    }
    ::-webkit-scrollbar-track {
        background: transparent;
    }
      `,
      }},
  })
  DefaultTheme = responsiveFontSizes(DefaultTheme)
  return (
    <RTL>
      <Head>
      <title>
 FireDev.ir | ارائه خدمات نرم افزاری و برنامه نویسی در اصفهان
 </title>
      </Head>
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
