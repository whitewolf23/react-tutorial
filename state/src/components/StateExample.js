import React from 'react';

class StateExample extends React.Component {
   
   
   //초기값 생성
    constructor(props) {
      super(props);

      this.state = {
         header: "Header Initial state",
         content: "Content Initial State"
     };
   }

   //업데이트 시 this.setState() 
   // ES6 class에선 auto binding이 되지 않으므로, setState 메소드를 사용 하게 될 메소드를 bind 해야함
   //(bind 하지 않으면 React Component 가 가지고있는 멤버 함수 및 객체에 접근 불가 )
   updateHeader(text){
       this.setState({
           header: "Header has changed"
       });
   }

   //렌더링 시 { this.state.stateName } 사용
   render() {
      return (
         <div>
            <h1>{this.state.header}</h1>
            <h2>{this.state.content}</h2>
            <button onClick={this.updateHeader.bind(this)}>Update</button>
         </div>
      );
   }
}

export default StateExample;