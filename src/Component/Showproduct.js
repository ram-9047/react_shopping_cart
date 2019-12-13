import React from "react";
import data from "../data.json";

class Showproducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [...data.products],
      sortData: "default"
    };
  }

  changeState = event => {
    this.setState({
      sortData: event.target.value
    });
    this.handleSort();
  };

  sortBy = () => {
    return this.state.data.sort((a, b) => {
      return b.price - a.price;
    });
  };

  handleSort = () => {
    switch (this.state.sortData) {
      case "default":
        this.setState({
          data: [...data.products]
        });
        break;
      case "low-to-high":
        this.setState({
          data: this.sortBy()
        });
        break;
      case "high-to-low":
        this.setState({
          data: this.sortBy().reverse()
        });
        break;
      default:
        this.setState({
          data: [...data.products]
        });
        break;
    }
  };

  render() {
    return (
      <>
        <div className="product-box">
          <div className="product-header">
            <span>16 product(s)found</span>
            <div className="flex sort">
              <p>Order by</p>
              <select className="sort-select" onChange={this.changeState}>
                <option value="default">select</option>
                <option value="low-to-high">Lowest to highest</option>
                <option value="high-to-low">Highest to lowest</option>
              </select>
            </div>
          </div>

          <div className="product-flex">
            {this.state.data.map(item => (
              <div className="single-product">
                <div>
                  <span className="">
                    {item.isFreeShipping ? (
                      <span className="free-shipping">Free Shipping </span>
                    ) : (
                      <span className="not-free-shipping"></span>
                    )}
                  </span>
                  <img
                    src={`static/products/${item.sku}_1.jpg`}
                    alt=""
                    className="product-pic"
                  ></img>
                </div>

                <h3 className="product-name">{item.title}</h3>
                <hr></hr>
                <div>
                  <span>{item.currencyFormat}</span>
                  <span className="product-price">{item.price}</span>

                  <div className="product-emi">
                    <span>or </span>
                    <span>{item.installments} x</span>
                    <span className="product-emi-price"> $1.21</span>
                  </div>
                  <button className="add-btn">Add to cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default Showproducts;
