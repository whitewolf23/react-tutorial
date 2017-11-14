import React from 'react';


class Content extends React.Component{
    render(){
        return(
            <div>
                <h2>{this.props.title}</h2>
                <p>{this.props.body}</p>
            </div>
        );
    }
}

//타입 검증하기
// Content.propTypes = {
//     title : React.propTypes.string,
//     body : React.propTypes.string.isRequired
// };

export default Content;