import React, { Component } from 'react';

class rssForm extends Component {
    
    constructor() {
        super();
        this.start = {
            title:'',
            url: ''

        }
    }
    
    
    render() {
        return (
            <form >
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

export default rssForm;