import React, { Component } from 'react';
import RssForm from '../components/RssForm.js';
import { fetchFeed } from '../actions/feedActions';
import { connect} from 'react-redux';

class RssContainer extends Component {
    
    componentDidMount() {
        this.props.fetchFeed()
    }

    render() {
        return (
            <div>
               <RssForm />
            </div>
        );
    }
}

export default connect(null, {fetchFeed}) (RssContainer);