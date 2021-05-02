import React from "react";
import axios from "axios";
import Header from '../../Components/Header/Header'

const Details = (props, i) => {
  

  return (
    <div key={i}>
        <Header/>
        <img src={props.product.imageURL}></img>
      <h2>{props.product.id}</h2>
      <h2>{props.product.price}</h2>
      <h2>{props.product.title}</h2>
    </div>
  );
};

export default Details;

export async function getServerSideProps(context) {
  const {id} = context.query;
  const results = await axios.get(`http://localhost:3002/data/${id}`);
  return {
    props: {
      product: results.data,
    },
  };
}
