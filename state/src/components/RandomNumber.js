import React from 'react';
import ReactDom from 'react-dom';


class RandomNumber extends React.Component{

    //초기화
    //컴포넌트 생성자 super로 상속받은 react.component 의 생성자 메소드를 실행한 후 입력한 코들르 실행 
    constructor(props){
        super(props);
        //update메소드에 접근 가능하도록 bind 해줌
        this.updateNumeber = this.updateNumeber.bind(this);
    }

    //업데이트
    updateNumeber(){
        let value = Math.round(Math.random()*100);
        this.props.onUpdate(value);
    }

    render(){
        return(
            <div>
                <h1> 과거 사귄 이성 횟수 : {this.props.number} </h1>
                {/* 버튼 클릭시 updatenumber 실행 */}
                <button onClick = {this.updateNumeber}> 랜덤변수 생성 </button>
            </div>
        );
    }


}

export default RandomNumber;

//1. number : 랜덤값 
//2. onUpdate : function 형태의 prop 으로서, parent 컴포넌트에 정의된 메소드를 실행 가능 