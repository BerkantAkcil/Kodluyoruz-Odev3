import React from "react";
import { useParams } from "react-router-dom";
export default function ProductDetail(props) {
  const params = useParams();
  return <h1>ID : {params.id}</h1>;
}
