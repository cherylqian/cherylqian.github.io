import React, { Component } from "react";
import ReactModal from "react-modal";
import { Hexagon, Text } from "react-hexgrid";

import "./Post.css";

ReactModal.setAppElement("#root");

class Post extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal = () => {
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <React.Fragment>
        <Hexagon
          onClick={this.handleOpenModal}
          q={this.props.post.q}
          r={this.props.post.r}
          s={this.props.post.s}
          className={this.props.post.label}
        >
          <Text>{this.props.post.label}</Text>
        </Hexagon>
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel={this.label}
          className="Modal"
          overlayClassName="Overlay"
          onRequestClose={this.handleCloseModal}
        >
          <span className="row">
            <h1>{this.props.post.title}</h1>
            <span onClick={this.handleCloseModal} className="close">
              <i className="fas fa-times" />
            </span>
          </span>
          <p dangerouslySetInnerHTML={this.props.post} />
        </ReactModal>
      </React.Fragment>
    );
  }
}

export default Post;
