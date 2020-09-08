import React, { Component } from "react";
import axios from "axios";

import { connect } from "react-redux";

import { GET_PAYLOAD } from "./../Reducers/payloadReducer";
import Paginate from "./Paginate";

import SimpleCardForPayloadData from "./CardForPayload";
import Nav from "./Nav";

class Payloads extends Component {
  constructor(props) {
    super(props);
    this.state = { search: "", currentPage: 1, itemsPerPage: 12 };
  }

  getPayloadData() {
    axios
      .get("https://api.spacexdata.com/v3/payloads ")
      .then((data) => {
        this.props.getPayload(data);
      })
      .catch((error) => console.log(error));
  }

  componentDidMount() {
    this.getPayloadData();
  }

  changePage = (pageNumber) => {
    this.setState({ currentPage: pageNumber });
  };

  render() {
    const { search } = this.state;
    const { currentPage } = this.state;
    const { itemsPerPage } = this.state;

    if (this.props.payloadData.data) {
      var indexOfLastItem = currentPage * itemsPerPage;
      var indexOfFirstItem = indexOfLastItem - itemsPerPage;
      var currentItems = this.props.payloadData.data.slice(
        indexOfFirstItem,
        indexOfLastItem
      );
    }

    if (this.props.payloadData.data) {
      if (this.state.search === "") {
        var filtered = currentItems;
      } else {
        filtered = currentItems.filter((ele) =>
          ele.payload_id.toLowerCase().includes(search.toLowerCase())
        );
      }
    }

    let payloadItems = filtered ? (
      filtered.map((key) => (
        <SimpleCardForPayloadData
          key={key.payload_id}
          payload_id={key.payload_id}
          reused={key.reused}
          nationality={key.nationality}
          manufacturer={key.manufacturer}
          payload_type={key.payload_type}
          payload_mass_kg={key.payload_mass_kg}
          orbit={key.orbit}
        />
      ))
    ) : (
      <h1>loading...</h1>
    );
    console.log(this.props.payloadData.data);
    // console.log("search", this.state.search);

    return (
      <div>
        <Nav />
        <br />
        <input
          className="form-control form-control-lg"
          style={{ width: "80%", height: "45px", margin: "auto" }}
          icon="Search"
          placeholder="Search"
          value={this.state.search}
          onChange={(e) => this.setState({ search: e.target.value })}
        />
        <br />
        <br />

        {payloadItems ? payloadItems : 0}
        {this.props.payloadData.data ? (
          <Paginate
            itemsPerPage={this.state.itemsPerPage}
            totalItems={this.props.payloadData.data.length}
            changePage={this.changePage}
          />
        ) : null}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getPayload: (data) => dispatch({ type: GET_PAYLOAD, payload: data }),
});

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, mapDispatchToProps)(Payloads);
