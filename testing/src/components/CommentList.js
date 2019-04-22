import React, {Component} from 'react';
import {connect} from 'react-redux'

const a = [{name:'A', isEnable:true}, {name:'A', isEnable:true}];

class CommentList extends Component {
    renderComments() {
        return a.map(comment => {
            return <li key={comment.name} onClick={this.changeColor}>{comment.name}</li>
        })
    };

    changeColor(item){
        console.log(item.isEnable = !item.isEnable );
    }
    

    render(){
        return(
            <div>
                <h4>Comment List</h4>
                <ul>
                    {this.renderComments()}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        comments:state.comments
    }
}
export default connect(mapStateToProps, null)(CommentList)