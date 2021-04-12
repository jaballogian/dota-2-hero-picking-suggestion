import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'  ;
import App from './App';
import reportWebVitals from './reportWebVitals';
// import {AppContextProvider} from './contexts/AppContext'
import {HeroListContextProvider} from './contexts/HeroListContext'
import {TeamInformationContextProdiver} from './contexts/TeamInformationContext'

ReactDOM.render(
  // <AppContextProvider>
  <HeroListContextProvider>
    <TeamInformationContextProdiver>
      <App />
    </TeamInformationContextProdiver>
  </HeroListContextProvider>
  // </AppContextProvider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
