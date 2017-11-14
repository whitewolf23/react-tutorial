// app components
//리액트 모듈은 컴포넌트를 만들 때 , 사용함 
import React from 'react';

//모든 컴포넌트는 React.Component 를 상속 합니다. 
class App extends React.Component {
   
   sayHey(){
       alert("hey");
   }
   
   
    //컴포넌트에 렌더링 될 데이터를 가져온다 .
   render(){

        //JSX 의 중요한 부분
        //따로 "" 표시 하지 않음 
        //react jsx 는 xml-like syntax 를 native javascript로 변환 

        let text = "dev-server";  
        
        let pStyle = {
            //글씨색
            color : 'white',
            //배경색
            backgroundColor : 'black'
        };
       
        return (

            //1. Nested Elmenets
            //2. javascript expression -> {} wrapping
            <div>
               <h1>Hello Minsu</h1>
               <h2> Welcome {text} </h2>
               <button onClick = {this.sayHey}>날 눌러줘 </button>
               <p style = {pStyle}> {1 == 1 ? 'True' : 'False'}</p>
            </div>

          

        );
    }
}

export default App;



//JSX문법에서는 if else문 불가 
// ternary ( condition ? true : false ) 표현을 사용