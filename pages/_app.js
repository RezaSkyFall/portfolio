import { ThemeProvider,createTheme } from "@mui/material/styles"
import IranYekan from "../public/fonts/iranyekanwebregular.woff2";
import IranYekanBold from "../public/fonts/iranyekanwebbold.woff2";
import { CssBaseline } from "@mui/material";
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import NavBar from "../Components/NavBar";

// Create rtl cache
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

function RTL(props) {
  return <CacheProvider value={cacheRtl}>{props.children}</CacheProvider>;
}

function MyApp({ Component, pageProps }) {

  const DefaultTheme = createTheme({
    palette:{
      primary:{
        main:'#14142B'
      },
      secondary:{
        main:'#4338CA'
      }
    },
    typography: {
      fontFamily: 'IranYekan,IranYekanBold, Arial',
      h1:{fontSize:'2rem'},
      h3:{fontSize:'1.17rem'}
    },
    direction: 'rtl',
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
      <NavBar />
      <Component {...pageProps} />
    </ThemeProvider>
    </RTL>
  )
}

export default MyApp
