import axios from "axios";
import React, {useState } from "react";

const Home = () => {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  const handleImageUrlChange = (event) => {
    setImageUrl(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    const newBook = {
      name: name,
      author: author,
      image: imageUrl,
    };

    axios
      .post("http://localhost:8080/book", newBook)
      .then((response) => {
        console.log(response);
        // Perform any necessary actions after adding the book
      })
      .catch((error) => {
        console.error(error);
      });

    // Reset the form fields
    setName("");
    setAuthor("");
    setImageUrl("");
  };
  return (
    <div>
      {/* Book form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={handleAuthorChange}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={imageUrl}
          onChange={handleImageUrlChange}
        />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default Home;
