import axios from "axios";
import React, { useEffect, useState } from "react";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    requestBooks();
  }, []);

  function requestBooks() {
    axios.get("http://localhost:8080/book/all")
      .then(response => {
        console.log(response);
        setBooks(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <div>
      {books.map((book) => (
        <div  key={book.id}>
          <span>{book.id}</span>
          <h3>{book.name}</h3>
          <h2>{book.author}</h2>
          <img src={book.image} alt={book.name} />
        </div>
      ))}
    </div>
  );
};

export default Books;
