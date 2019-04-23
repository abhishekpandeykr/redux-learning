import React, { Component } from 'react'
import {connect} from 'react-redux';
import * as actions from '../action'


export default ChildComponent => {
    class ComposedComponent extends Component {
        componentDidMount(){
            this.shouldNavigateAway();
            this.props.showList();
        }

        shouldComponentUpdate() {
            this.shouldNavigateAway();
            console.log(this.props.auth)
        }

        shouldNavigateAway(){
            if(!this.props.auth){
                this.props.history.push("/")
            }
        }

        render() {
            return <ChildComponent {...this.props} />;
        }
    }

    function mapStateToProps(state) {
        return {
            auth:state.auth.authenticated,
            dataList: state.dataList.data
        }
    }

    return connect(mapStateToProps, actions)(ComposedComponent)
}