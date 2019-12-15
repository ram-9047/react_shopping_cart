import React from "react";
import { render } from "react-dom";

import "../src/stylesheet/style.css";
import data from "../src/data.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [...data.products],
      sortData: "default",
      filterData: [],
      cart: [],
      isCartOpen: false
    };
  }

  //add to cart
  addToCart = item => {
    if (this.state.cart.length) {
      var itemQuantIncresed = false;
      let cartClone = this.state.cart;

      cartClone.forEach(prod => {
        if (prod.id === item.id) {
          prod.quantity++;
          itemQuantIncresed = true;
        }
      });

      if (!itemQuantIncresed) {
        cartClone.push({ ...item, quantity: 1 });
      }

      this.setState({ cart: cartClone });
    } else {
      this.setState({ cart: [{ ...item, quantity: 1 }] });
    }
  };
  //delete item from cart

  deleteItem = item => {
    let delCart = Object.assign([], this.state.cart);
    delCart.splice(item, 1);
    this.setState({ cart: delCart });
  };
  // decrese quantity
  decreaseQuantity = item => {
    // let cartProd = this.state.cart;
    // cartProd.find(prod => {
    //   if (prod.id === item.id) {
    //     prod.quantity = prod.quantity - 1;
    //   }
    // });
    // this.setState({ cart: cartProd });
    let copyCart = Object.assign([], this.state.cart);
    if (copyCart.find(item.id)) {
      copyCart.quantity = copyCart.quantity - 1;
    }
    this.setState({ cart: copyCart });
  };

  //manage cart
  manageCart = () => {
    this.setState(
      {
        isCartOpen: !this.state.isCartOpen
      },
      () => console.log(this.state.isCartOpen)
    );
  };

  // filtering data
  handleSize = size => {
    console.log("handle", size);
    const filterData = this.state.data.filter(singleData => {
      return singleData.availableSizes.includes(size);
    });
    console.log(filterData);
    this.setState({ filterData });
  };

  //

  subTotal = () => {
    this.state.cart.reduce((acc, item) => acc + item.price, 0);
  };
  // sorting data

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
    const { data, filterData } = this.state;
    const mylist = filterData.length ? filterData : data;
    console.log(this.state.cart);
    return (
      <>
        <div className="wrapper">
          {/* left */}
          <div>
            <div className="filter">
              <h4 className="title">Sizes</h4>
              <div className="flex">
                <div className="filter-avail-size">
                  <label>
                    <input
                      type="checkbox"
                      value="XS"
                      className="filter-avail-size-input"
                      onClick={() => this.handleSize("XS")}
                    ></input>
                    <span className="checkmark">XS</span>
                  </label>
                </div>
                <div className="filter-avail-size">
                  <label>
                    <input
                      type="checkbox"
                      value="S"
                      className="filter-avail-size-input"
                      onClick={() => this.handleSize("S")}
                    ></input>
                    <span className="checkmark">S</span>
                  </label>
                </div>
                <div className="filter-avail-size">
                  <label>
                    <input
                      type="checkbox"
                      value="M"
                      className="filter-avail-size-input"
                      onClick={() => this.handleSize("M")}
                    ></input>
                    <span className="checkmark">M</span>
                  </label>
                </div>
                <div className="filter-avail-size">
                  <label>
                    <input
                      type="checkbox"
                      value="ML"
                      className="filter-avail-size-input"
                      onClick={() => this.handleSize("ML")}
                    ></input>
                    <span className="checkmark">ML</span>
                  </label>
                </div>
              </div>
              <div className="flex">
                <div className="filter-avail-size">
                  <label>
                    <input
                      type="checkbox"
                      value="L"
                      className="filter-avail-size-input"
                      onClick={() => this.handleSize("L")}
                    ></input>
                    <span className="checkmark">L</span>
                  </label>
                </div>
                <div className="filter-avail-size">
                  <label>
                    <input
                      type="checkbox"
                      value="XL"
                      className="filter-avail-size-input"
                      onClick={() => this.handleSize("XL")}
                    ></input>
                    <span className="checkmark">XL</span>
                  </label>
                </div>
                <div className="filter-avail-size">
                  <label>
                    <input
                      type="checkbox"
                      value="XXL"
                      className="filter-avail-size-input"
                      onClick={() => this.handleSize("XXL")}
                    ></input>
                    <span className="checkmark">XXL</span>
                  </label>
                </div>
              </div>
              <div className="para">
                <p>Leave a star on Github if this repository was useful :</p>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="product-box">
            <div className="product-header">
              <span>{mylist.length} product(s)found</span>
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
              {mylist.map(item => (
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
                    <button
                      className="add-btn"
                      onClick={() => this.addToCart(item)}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* !!!!!!!!!-------------CART--------------!!!!!!!!!! */}
        {/* <div> */}
        <div className={this.state.isCartOpen ? "close-cart" : "cart-section"}>
          <span className="quantity-box" onClick={this.manageCart}>
            <img src="static/bag-icon.png" alt="cart-icon"></img>
            <span className="quantity-content">{this.state.cart.length}</span>
          </span>
          <div className={this.state.isCartOpen ? "" : "sho-cart"}>
            <div className="close-cart-btn" onClick={this.manageCart}>
              X
            </div>
            <div className="cart-content">
              <div className="cart-header">
                <span className="bag">
                  <img src="static/bag-icon.png" alt="cart-icon"></img>
                  <span className="bag-quantity">{this.state.cart.length}</span>
                </span>
                <span className="header-title">CART</span>
              </div>

              {/* mapp these  */}
              {this.state.cart.map(item => (
                <div className=".cart-single-item ">
                  <hr className="cart-bar"></hr>
                  <div className="selected-items-box">
                    <div className="delete-item" onClick={this.deleteItem}>
                      {/* <img
                        src="https://image.flaticon.com/icons/png/512/32/32178.png"
                        alt="del-icon"
                      ></img> */}
                    </div>
                    <div className="selected-items-image">
                      <img
                        src={`static/products/${item.sku}_1.jpg`}
                        alt={item.title}
                        className="item-image"
                      ></img>
                    </div>
                    <div className="selected-items-details">
                      <p className="items-title">{item.title}</p>
                      <p className="description">
                        {item.availableSizes[0]} | {item.style} <br />
                        Quantity: {item.quantity}
                      </p>
                    </div>
                    <div className="selected-items-price">
                      <p>${item.price * item.quantity}</p>
                      <div>
                        <button
                          className="decrease-item-btn"
                          onClick={this.decreaseQuantity}
                        >
                          -
                        </button>
                        <button className="increase-item-btn">+</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* untill this */}
              <div className="cart-footer">
                <div className="cart-total">SUBTOTAL</div>
                <div className="cart-total-price">
                  <p className="cart-total-price-value">
                    $
                    {this.state.cart.reduce(
                      (acc, item) => acc + item.price * item.quantity,
                      0
                    )}
                    {/* {this.subTotal(item)} */}
                  </p>
                  <small className="cart-total-price-installment">
                    <span>OR UPTO 9 X $ 2.34</span>
                  </small>
                </div>
                <div className="cart-buy-btn">checkout</div>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </>
    );
  }
}

render(<App />, document.getElementById("root"));
