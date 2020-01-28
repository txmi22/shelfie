import React, {Component} from 'react';
import Product from "../Product/Product";
import axios from "axios";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount = () => {
    this.reRender();
  };

  reRender = () => {
    axios.get("/api/products").then(res =>
      this.setState({
        products: res.data
      })
    );
  };

  render() {
    return (
      <div>
        {this.state.products.map(e => {
          return (
            <Product
              key={e.id}
              name={e.name}
              price={e.price}
              image={e.image}
              id={e.id}
              reRender={this.reRender}
            />
          );
        })}
      </div>
    );
  }
}

export default Dashboard;