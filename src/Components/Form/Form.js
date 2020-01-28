import React, {Component} from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom'

class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            id: 0,
            name: '',
            price: 0,
            image: '',
            editing: false
        };
    }

      componentDidMount = () => {
      console.log(this.props.match.params.id);
      if (this.props.match.params.id) {
          axios.get(`api/products/${this.props.match.params.id}`).then(res =>
            this.setState({
                id: res.data.id,
                name: res.data.name,
                price: res.data.price,
                image: res.data.image,
                editing: true
            })
            );
    }
  };

  componentDidUpdate=(prevProps)=>{
    if (!this.props.match.params.id && prevProps.match.params !== this.props.match.params)
    this.setState({
        id: 0,
        name: '',
        price: 0,
        image: '',
        editing: false
    })
}

    handleChange = e => {

    const { name, value } = e.target;
    console.log(name, value)
    this.setState({ [name]: value });
  };

    handleCancel() {
      this.setState({image: '', name: '', price: 0})
  }

    addProduct = (name, price, image) => {
        axios.post('/api/products', {name, price, image})
        .then(()=> {
            this.setState({
                name: '',
                price: 0,
                image: '',
                editing: false
            })
            this.props.history.push('/')
        })
    }

    updateProduct = () => {
        const {id, name, price, image} = this.state
        axios.put(`/api/products/${id}`, {name, price, image})
        .then(()=> {
            this.setState({
                name: '',
                price: 0,
                image: '',
                editing: false
            })
            this.props.history.push('/')
        })
    }

    render(){
        const {name, price, image, editing, id} = this.state
        return(
            <div className="add-box">
                <p>Image URL:</p>
                <input 
                    name='image'
                    onChange={e => this.handleChange(e)}
                    value={this.state.image}
                />
                <p>Product Name:</p>
                <input
                    name='name'
                    onChange={e => this.handleChange(e)}
                    value={this.state.name}
                />
                <p>Price:</p>
                <input
                    name='price'
                    onChange={e => this.handleChange(e)}
                    placeholder='0'
                    value={this.state.price}
                />
                <div className='button-box'>
                    <button className='button-one' onClick={() => this.handleCancel()}>Cancel</button>
                {editing ? (
                    <button onClick={() => this.updateProduct()}>
                    Save Changes
                  </button>
                    ) : ( 
                    <button className='button-one' onClick={() => this.addProduct(name, price, image)}>Add to Inventory</button>
                )} 
                </div>
            </div>
        )
    }
}

export default withRouter(Form);