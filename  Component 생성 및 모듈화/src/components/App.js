import React from 'react';
import Header from './Header';
import Content from './Content';



//컴포넌트를 만들 시 React.Component를 상속 받아야함
class App extends React.Component {
   
    render(){
        return  (
            <div>
                <Header/>
                <Content/>
            </div>
        );
    }
}

export default App;