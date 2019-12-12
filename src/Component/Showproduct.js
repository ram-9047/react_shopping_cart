import React from "react";
import data from "../data.json";

class Showproducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data
    };
  }
  //   var a = data.products;
  //   a.sort(function(a, b) {
  //     return a.price - b.price;
  //   });
  //   console.log(a);
  render() {
    return (
      <>
        <div className="product-box">
          <div className="product-header">
            <span>16 product(s)found</span>
            <div className="flex sort">
              {/* <span> */}
              <p>Order by</p>
              {/* </span> */}
              {/* <span> */}
              <select className="sort-select">
                <option>select</option>
                <option>Lowest to highest</option>
                <option>Highest to lowest</option>
              </select>
              {/* </span> */}
            </div>
          </div>

          <div className="product-flex">
            {data.products.map(item => (
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
