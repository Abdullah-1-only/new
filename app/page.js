"use client"
import React from "react";

 const page = () => {
  let frout = [
    "banana",
    "apple",
    "mango",
    "dates",
    "papaya",
    "stroberry",
    "watermalon",
    "gavava",
  ];

  let fruitdata = frout.map((val, ind) => <h1 key={ind}>{val}</h1>);
  let x = "hadi" 

  return (
    <>
      <div>{fruitdata}</div>
      <h1>{x}</h1>
    </>
  );
};

export default page;