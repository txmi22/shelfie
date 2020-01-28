import React, {Component} from 'react';
import axios from "axios";
import {withRouter} from 'react-router-dom'

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  delete = id => {
      axios.delete(`/api/products/${id}`).then(()=>{
          this.props.reRender()
      })
  }

  edit=(id)=>{
      this.props.history.push(`/form/${id}`)
  }

  render() {
    return (
      <div className="inventory-box">
        <img src={`${this.props.image}` || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9jAgW9NT8SwT5h-w6aGtilGIVtjZHnQKGASXY4XjB4KcBtKtwhw&s'} alt="product pic" />
        <p>{this.props.name}</p>
        <p>{this.props.price}</p>
        <button className="button-one" onClick={()=> this.delete(this.props.id)}>Delete</button>
        <button className="button-one"onClick={()=> this.edit(this.props.id)}>Edit</button>
      </div>
    );
  }
}

export default withRouter(Product);