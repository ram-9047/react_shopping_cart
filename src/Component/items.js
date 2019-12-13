import React from "react";

import data from "../data.json";
import Sizefilter from "../Component/Sizefilter";
import Showproducts from "../Component/Showproduct";

// const items = () => {

// };
class items extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [...data.products],
      filterData: []
    };
  }

  handleXS = props => {
    console.log("handle", props);
    const filterData = this.state.data.filter(singleData => {
      return singleData.availableSizes.includes(props);
    });
    console.log(filterData);
    this.setState({ filterData });
  };

  render() {
    const { data, filterData } = this.state;
    const mylist = filterData.length ? filterData : data;
    return (
      <>
        <div className="flex">
          <Sizefilter handleXS={this.handleXS} />

          <Showproducts mylist={mylist} />
        </div>
      </>
    );
  }
}
export default items;
