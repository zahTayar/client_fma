import React, { Component } from 'react';
import axios from "../axios";

class SearchResults extends Component {
    constructor(props) {
      super(props);
      this.state = {
          item_id: this.props.item_id,
          apartments: {}
      }
    }
    componentDidMount = () => {
        this.search()
    }

    search = () => {
        const operation = JSON.stringify({
            _id: 'operation_id',
            type: "search",
            invoked_by: 'lidar602@gmail.com', //this.props.user.email
            created_timestamp: '',
            operation_attributes: {
                item_id: this.state.item_id
            }
        });
        axios.post("operations", operation, {headers:{"Content-Type" : "application/json"}})
        .then((response) => {
            this.setState({apartments: response.data})
        })
        .catch((error) => {
            console.log(error.response)
        });
    }

    render() {
        return ( 
            <div>
                
            </div>
        )
    }
}
export default SearchResults;