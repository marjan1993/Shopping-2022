import React, { Component } from "react";
import { CreateComment } from "../components/comment";
import { CommentList } from "../components/comment/list";
import { addToCart, cartStore, productService } from "../components/product";

export class DetailPage extends Component {
  state = {};

  componentDidMount() {
    const id = this.props.match.params.id;

    productService
      .getProductById(id)
      .then(({ data }) => this.setState({ data }));

    this.unsubscribe = cartStore.subscribe(() => {});
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  async submitComment(comment) {
    const reponse = await productService.addComment(
      this.state.data.id,
      comment
    );
    if (reponse.status === 200) {
      const { data } = await productService.getComment(this.state.data.id);
      this.setState({ data: { ...this.state.data, comments: data } });
    }
  }

  addToCartHandler() {
    cartStore.dispatch(addToCart(this.state.data));
  }

  render() {
    const data = this.state.data;
    if (!data) {
      return <div className="text-center mt-5">Loading...</div>;
    }
    return (
      <>
        <div className="container m-5 w-65 ">
          <div className="row mt-100">
            <div className="col-5">
              {<img alt={data.title} src={data.pic} width="100%" />}
            </div>
            <div className="col-7">
              <h1>{data.title}</h1>
              <p>{data.desc}</p>
              <span style={styles.price}>{data.price}</span>
              <br />
              <button
                type="button"
                onClick={this.addToCartHandler.bind(this)}
                className=" btn btn-primary mt-4"
              >
                Add to Cart
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-10 mx-auto">
              <CommentList comments={data.comments || []} />
              <hr className="my-5" />
              <CreateComment onComment={this.submitComment.bind(this)} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

const styles = {
  price: {
    color: "green",
    fontSize: 24,
  },
};
