import React, { Component } from "react";
import axios from "axios";
import SimpleCard from "./Card";

import { connect } from "react-redux";

import { GET_HISTORY } from "./../Reducers/historyReducer";
import Paginate from "./Paginate";
import Nav from "./Nav";

class History extends Component {
  constructor(props) {
    super(props);
    this.state = { search: "", currentPage: 1, itemsPerPage: 5 };
  }

  getHistoryData() {
    axios
      .get("https://api.spacexdata.com/v3/history")
      .then((data) => {
        this.props.getHistory(data);
      })
      .catch((error) => console.log(error));
  }

  componentDidMount() {
    this.getHistoryData();
  }

  changePage = (pageNumber) => {
    this.setState({ currentPage: pageNumber });
  };

  render() {
    const { search } = this.state;
    const { currentPage } = this.state;
    const { itemsPerPage } = this.state;

    if (this.props.historyData.data) {
      var indexOfLastItem = currentPage * itemsPerPage;
      var indexOfFirstItem = indexOfLastItem - itemsPerPage;
      var currentItems = this.props.historyData.data.slice(
        indexOfFirstItem,
        indexOfLastItem
      );
    }

    if (this.props.historyData.data) {
      if (this.state.search === "") {
        var filtered = currentItems;
      } else {
        filtered = currentItems.filter((ele) =>
          ele.title.toLowerCase().includes(search.toLowerCase())
        );
      }
    }

    let historyItems = filtered ? (
      filtered.map((key) => (
        <SimpleCard
          key={key.id}
          title={key.title}
          eventDate={key.event_date_utc}
          flightNumber={key.flight_number}
          details={key.details}
        />
      ))
    ) : (
      <h1>loading...</h1>
    );
    // console.log(this.props.historyData.data);
    // console.log("search", this.state.search);

    return (
      <>
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

          {historyItems ? historyItems : 0}
        </div>
        <div>
          {this.props.historyData.data ? (
            <Paginate
              itemsPerPage={this.state.itemsPerPage}
              totalItems={this.props.historyData.data.length}
              changePage={this.changePage}
            />
          ) : null}
        </div>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getHistory: (data) => dispatch({ type: GET_HISTORY, payload: data }),
});

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, mapDispatchToProps)(History);
