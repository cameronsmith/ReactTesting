import React, { Component } from 'react';
import { connect } from 'react-redux';

// Higher order component
export default ChildComponent => {
    class ComposedComponent extends Component {
        componentDidMount() {
            this.shouldNavigateAway();
        }
    
        componentDidUpdate() {
            this.shouldNavigateAway();
        }
    
        shouldNavigateAway() {
            if (!this.props.auth) {
                this.props.history.push('/');
            }
        }

        render() {
            return <ChildComponent { ...this.props } />
        }
    }

    const mapStateToProps = (state) => {
        return { auth: state.auth };
    }

    return connect(mapStateToProps)(ComposedComponent);
};