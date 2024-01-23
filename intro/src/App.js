import React, { Component } from 'react'
import Navi from './Navi';
import CategoryList from './CategoryList';
import ProductList from './ProductList';
import { Col, Container, Row } from 'reactstrap';

export default class App extends Component {
  state = { currentCategory: "", products: [] }

  componentDidMount() {
    this.getProducts();
  }

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName })
  };

  getProducts = () => {
    fetch("http://localhost:3000/products")
      .then(response => response.json())
      .then(data => this.setState({ products: data }));
  }

  render() {
    let categoryInfo = { title: "Category List" };
    let productInfo = { title: "Product List" };
    return (
      <div>
        <Container>
          <Row>
            <Navi></Navi>
          </Row>
          <Row>
            <Col xs="3">
              <CategoryList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={categoryInfo} />
            </Col>
            <Col xs="9">
              <ProductList currentCategory={this.state.currentCategory} products={this.state.products} info={productInfo} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}