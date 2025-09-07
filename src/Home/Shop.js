import { Component } from "react";
import { Product } from "./Product";
import './Shop.css';

export class Shop extends Component {
    constructor() {
        super();
        this.state = {
            allProducts: [],
            filteredProducts: [],
            page: 1,
            selectedCategory: 'All',
            categories: []
        };
    }

    async componentDidMount() {
        const res = await fetch('/sample.json');
        const data = await res.json();
        console.log("Fetched data:", data);
        const allProducts = data.product;

        // Extract unique categories from product data
        const categories = ['All', ...new Set(allProducts.map(item => item.category))];

        this.setState({
            allProducts: allProducts,
            filteredProducts: allProducts,
            categories: categories
        });
    }

    handleCategoryChange = (event) => {
        const selected = event.target.value;
        const filtered = selected === 'All'
            ? this.state.allProducts
            : this.state.allProducts.filter(p => p.category === selected);

        this.setState({
            selectedCategory: selected,
            filteredProducts: filtered,
            page: 1
        });
    }

    handlePrevClick = () => {
        this.setState({ page: this.state.page - 1 });
    }

    handleNextClick = () => {
        this.setState({ page: this.state.page + 1 });
    }

    render() {
        const { filteredProducts, page } = this.state;
        const startIdx = (page - 1) * this.props.pageSize;
        const paginatedProducts = filteredProducts.slice(startIdx, startIdx + this.props.pageSize);

        return (
            <div>
                <h2>Products</h2>
                <div className="dropdown">
                    <label>Category: </label>
                    <select onChange={this.handleCategoryChange} value={this.state.selectedCategory}>
                        {this.state.categories.map((cat, idx) => (
                            <option key={idx} value={cat}>{cat}</option>
                        ))}
                    </select>
                </div>
                <br />
                <div className="products">
                    {paginatedProducts.map((element) => (
                        <div key={element.id}>
                            <Product
                                id={element.id}
                                title={element.title}
                                price={element.price}
                                imageUrl={element.image}
                            />
                        </div>
                    ))}
                </div>
                <div className="btn-prev-next">
                    <button disabled={page <= 1} onClick={this.handlePrevClick}>&larr; Previous</button>
                    <button disabled={page * this.props.pageSize >= filteredProducts.length} onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        );
    }
}
