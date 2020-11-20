import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFeed } from '../actions/feedActions';

class rssForm extends Component {
    
    constructor() {
        super();
        this.state = {
            title:'',
            url: ''

        }
    }
    
    handleSubmit = e => {
        e.preventDefault();
        this.props.addFeed(this.state)
    }
    
    render() {
        return (
            <form className="rss-form" onSubmit={event => this.handleSubmit(event)}>
                <label>Feed Name</label>
                <input type="text" name="title" />
                <br/>
                <label>URL</label>
                <input type="text" name="url" />
                <br />
                <input type="submit" name="submit" />
            </form>
        );
    }
}

export default connect(null, {addFeed}) (rssForm);