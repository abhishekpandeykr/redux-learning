import  React, {Component}  from "react";
import {Route, Link} from 'react-router-dom';
import {connect} from 'react-redux'
import  CommentBox  from "components/CommentBox";
import CommentList from "components/CommentList";
import * as actions from 'actions'

class App extends Component {

    renderButton() {
        if(this.props.auth) {
            return (
                <button onClick={() => this.props.changeAuht(false)}>
                    Sign Out
                </button>
            )
        } else {
            return (
                <button onClick={() => this.props.changeAuht(true)}>
                    Sign In
                </button>
            )
        }

    }

    renderHeader() {
        return(
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/post">Post a Comment</Link>
                </li>
                <li>
                    {this.renderButton()}
                </li>
            </ul>
        )
    }
    render() {
        console.log(this.props.auth)
        return (
            <div>
                {this.renderHeader()}
                <Route path="/post" component={CommentBox} />
                <Route exact path="/" component={CommentList} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth:state.auth
    }
}

export default connect(mapStateToProps, actions)(App);