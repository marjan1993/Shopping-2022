import React from "react";
import { Link } from "react-router-dom";

export function Product({ data }) {
  return (
    <div className="card mt-5">
      <div className="card-body">
        <img alt={data.title} src={data.pic} className="card-img-top" />
        <h5 className="card-title">{data.title}</h5>
        <p style={{ fontSize: 22, fontWeight: 700 }} className="text-success">
          {data.price}
        </p>
        <Link to={"/detail/" + data.id}>
          <span className="btn btn-primary">Show More</span>
        </Link>
      </div>
    </div>
  );
}
