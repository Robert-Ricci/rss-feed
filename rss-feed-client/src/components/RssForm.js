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
    
    handleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]:value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log("working")
        this.props.addFeed(this.state)
        this.setState({
            
                title:'',
                url:''
            
        })
    }
    
    render() {
        return (
            <form className="rss-form" onSubmit={event => this.handleSubmit(event)}>
                <label>Feed Name</label>
                <input type="text" value = {this.state.title} onChange={event => this.handleChange(event)} name="title" />
                <br/>
                <label>URL</label>
                <input type="text" value = {this.state.url} onChange={event => this.handleChange(event)}  name="url" />
                <br />
                <input type="submit" valur = "submit" name="submit" />
            </form>
        );
    }
}

export default connect(null, {addFeed}) (rssForm);