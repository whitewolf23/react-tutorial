// webpack entry point 

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const rootElement = document.getElementById('root');
//기본값 설정 할때, 쓰이는 문구
ReactDOM.render(<App />, rootElement);

// ReactDOM.render(<App  headerTitle = "웳컴 !!!!!" 
//                     contentTitle = "민수야!!!!!" 
//                     contentBody = "내 앱이야 !!!!!"  />, rootElement);




//props 
//변동되지 않는 데이터, immutable
//parent -> child, prop사용

//index -> app -> header, content