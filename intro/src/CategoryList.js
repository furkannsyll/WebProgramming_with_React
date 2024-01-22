import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'

export default class CategoryList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [
                { catrgoryId: 1, categoryName: "Beverages" },
                { catrgoryId: 2, categoryName: "Condiments" }
            ]
        };
    }
    render() {
        return (
            <div>
                <h2>{this.props.info.title}</h2>
                <ListGroup>
                    {
                        this.state.categories.map(category => (
                            <ListGroupItem key={category.catrgoryId}>{category.categoryName}</ListGroupItem>
                        ))
                    }
                </ListGroup>
            </div>
        )
    }
}
