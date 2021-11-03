import React from "react";
import reactDom from "react-dom";

//CSS
import "./index.css";

// data
import { books } from "./Books";

//components
import Book from "./Book";

//relative path importing
import { greeting } from "./testing/testing";

const BookList = () => {
  console.log(greeting);
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
};

reactDom.render(<BookList />, document.getElementById("root"));

//https://m.media-amazon.com/images/I/91RVshgQn1S._AC_UL480_FMwebp_QL65_.jpg
//The Silent Patient
//Alex Michaelides, Jack Hawkins, et al.
