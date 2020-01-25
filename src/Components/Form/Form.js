import React, {Component} from 'react';
import axios from 'axios';

const initialState = {
    id: 0,
    name: '',
    price: 0,
    image: '',
}

class Form extends Component {
    constructor(props){
        super(props)
        this.state = initialState;
    }
    reset() {
        this.setState(initialState);
    }

    componentDidMount() {
        axios.get('/api/products')
        .then(res => this.setState({
          inventory: res.data,
          id: res.data[0].id,
          name: res.data[0].name,
          price: res.data[0].price,
          image: res.data[0].image
        })
        )
        .catch(err => console.log(err));
    }

    handleChange = e => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }
    handleChange = e => {
        const {price, value} = e.target
        this.setState({
            [price]: value
        })
    }
    handleChange = e => {
        const {image, value} = e.target
        this.setState({
            [image]: value
        })
    }

    handleChange(event) {
        this.setState({
            image: URL.createObjectURL(event.target.image[0])
        })
    }

    addProduct = (name, price, image) => {
        axios.post('/api/products', {name, price, image})
        .then(()=> {
            this.setState({
                id: 0,
                name: '',
                price: 0,
                image: '',
                // editing: false
            })
            this.props.history.push('/products')
        })
    }
    updateProduct = (id, name, price, image) => {
        axios.put(`/api/products/${id}`, {name, price, image})
        .then(()=> {
            this.setState({
                id: 0,
                name: '',
                price: 0,
                image: '',
                // editing: false
            })
            this.props.history.push('/products/:id')
        })
    }
    deleteProduct = (id, name, price, image) => {
        axios.delete(`/api/products/${id}`, {name, price, image})
        .then(()=> {
            this.setState({
                id: 0,
                name: '',
                price: 0,
                image: '',
                // editing: false
            })
            this.props.history.push('/products/:id')
        })
    }

    render(){
        const {name, price, image} = this.state
        return(
            <div className="add-box">
                <div className='image-preview'>
                <input type="image" onChange={this.handleChange} />
                <img src={this.state.image}/>
                </div>
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
                {/* {editing ? ( */}
                    <button className='button-one' onClick={() => this.updateProduct(name, price, image)}>Cancel</button>
                {/* ) : ( */}
                    <button className='button-one' onClick={() => this.addProduct(name, price, image)}>Add to Inventory</button>
                {/* )} */}
                </div>
            </div>
        )
    }
}

export default Form;