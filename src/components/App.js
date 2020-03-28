import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import * as actions from 'actions';

/**
 * Normally we would have the route paths togeather, but to save refactoring this simple example we are placing it here!
 */
class App extends Component {
    renderButton() {
        if (this.props.auth) {
            return (
                <button onClick={() => this.props.changeAuth(false)}>
                    Sign Out
                </button>
            );
        }

        return (
            <button onClick={() => this.props.changeAuth(true)}>
                Sign In
            </button>
        );
    }

    renderHeader() {
        return (
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/post">Post A Comment</Link></li>
                <li>{ this.renderButton() }</li>
            </ul>
        );
    }

    render() {
        return (
            <div>
                { this.renderHeader() }
                <Route path="/post" component={CommentBox} />
                <Route path="/" exact component={CommentList} />
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return { auth: state.auth }
};

export default connect(
    mapStateToProps,
    actions)
(App);