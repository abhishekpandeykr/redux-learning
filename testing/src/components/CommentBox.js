import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';
import RequireComponent from 'components/requireComponent'


class CommentBox extends Component {
    state = {
        comment:''
    }



    handleChange = e => {
        this.setState({comment:e.target.value})
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.saveComment(this.state.comment)
        this.setState({comment:''})
    }
    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h4>Add A Comment</h4>
                    <textarea value={this.state.comment} onChange={this.handleChange}/>
                    <div>
                        <button>Submit Comment</button>
                    </div>
                </form>
                <button className="fetch-comment" onClick={this.props.fetchComment}>Fetch Comment</button>
            </div>
        )
    }
}



export default connect(null, actions)(RequireComponent(CommentBox));