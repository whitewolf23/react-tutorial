import React from 'react';
import Header from './Header';
import Content from './Content';


//컴포넌트를 만들 시 React.Component를 상속 받아야함
class App extends React.Component {
   
    render(){
        return  (
            <div>
               <Header title = {this.props.headerTitle}/>
               <Content title = {this.props.contentTitle}
                        body = {this.props.contentBody}/>

            </div>
        );
    }
}


//기본값 설정
App.defaultProps = {
    headerTitle: '기본값 헤더',
    contentTitle : '기본값 내용 제목',
    contentBody : '기본값 내용 바디'
};

//타입 유효성 검사 - 잘못된 값
//개발자 도구에서 콘솔에서 타입이 잘못된 경우 알람이 나옴
// App.defaultProps = {
//     headerTitle : '기본값 헤더',
//     contentTitle : 5,
//     contentBody : undefined
// };

export default App;