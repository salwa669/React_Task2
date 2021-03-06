import React from "react";
import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import axiosInstance from '../../axiosconfig/asiosinstance';
const ProductDetails = (props) => {
  const location = useLocation();
  const params = useParams();

  const [product, setProduct] = useState({});
  useEffect(() => {
    axiosInstance
      .get(`products/${params.id}`)
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch((err) => console.log(err));
  }, []);


  return (
    <div>
    
      <h2>{product.title}</h2>
      <img src={product.image} />
    </div>
  );
};

export default ProductDetails;
