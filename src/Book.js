import React from "react";

const Book = ({ img, author, title, id }) => {
  // const { img, title, author, id } = props;
  // attribute, eventHandler
  // onClick, onMouseOver
  const clickHandler = (e) => {
    alert("Hello World");
    console.log(e);
    console.log(e.target);
  };

  const complexExample = (author) => {
    alert(author);
  };

  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="" />
      <h2 onClick={() => alert(title)}>{title}</h2>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Reference Example
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        more complex example
      </button>
    </article>
  );
};

export default Book;
