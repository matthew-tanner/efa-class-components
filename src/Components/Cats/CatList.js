import React from "react";

const CatList = (props) => {
  return (
    <div>
      <ul>
        {props.cats.map((cat) => (
          <li key={cat}>{cat}</li>
        ))}
      </ul>
    </div>
  );
};

export default CatList;
