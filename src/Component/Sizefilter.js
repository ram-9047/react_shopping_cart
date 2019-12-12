import React from "react";

export default function sizefilter() {
  return (
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
  );
}
