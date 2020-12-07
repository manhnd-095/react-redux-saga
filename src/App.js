import React, { useEffect } from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getItemsListAction } from './services/items/actions';
import './App.css';

const App = (props) => {
    const { actions, items } = props

    useEffect(() => {
        actions.getItemsListAction();
    }, []);

    return (
		<div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                {items.map((r, index) => (<span>{r.value}</span>))}
            </header>
		</div>
	);
};

function mapStateToProps(state) {
    return {
        items: state.items.items,
    };
}

function mapDispatchToProps(dispatch) {
    const actions = {
        getItemsListAction,
    };
    return {
        actions: bindActionCreators(actions, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

