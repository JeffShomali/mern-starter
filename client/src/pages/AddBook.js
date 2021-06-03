import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createBook } from "../redux/actions/bookActions";


const AddBook = () => {
  const initialBookState = {
    id: null,
    title: "",
    description: ""
  };
  const [book, setBook] = useState(initialBookState);
  const [submitted, setSubmitted] = useState(false);

  const dispatch = useDispatch();

  const handleInputChange = event => {
    const { name, value } = event.target;
    setBook({ ...book, [name]: value });
  };

  const saveBook = () => {
    const { title, description } = book;

    dispatch(createBook(title, description))
      .then(data => {
        setBook({
          id: data.id,
          title: data.title,
          description: data.description,
        });
        setSubmitted(true);
        console.log('%c ================ setSubmitted ================', 'color: green; font-weight: bold');
        console.log(submitted)
        console.log(data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newBook = () => {
    setBook(initialBookState);
    setSubmitted(false);
  };
  console.log('%c ================ Submitted ================', 'color: green; font-weight: bold');
  console.log(submitted)
  return (
    <div className="ui text container raised segment">
      {submitted ? (
      <div class="ui positive message">
        <p>Submitted a new book successfully.</p>
        <button onClick={newBook} className="ui primary button"> Add Another One</button>
      </div>
      ) : (
      <div>
        <h2 className="ui header">Add New Book</h2>
        <div class="ui form">
          <div class="field">
            <label htmlFor="title">Title</label>
            <div class="ui input">
              <input type="text" className="form-control" id="title"
               required value={book.title} onChange={handleInputChange} name="title" />
            </div>
          </div>
          <div class="field">
            <label htmlFor="description">Description</label>
            <textarea type="text" className="form-control" id="description" required value={book.description} onChange={handleInputChange} name="description" placeholder="Tell us more about your book..." rows="4">
          </textarea>
          </div>
          <button onClick={saveBook} class="ui medium blue button">
            Add New Book
          </button>
        </div>
      </div>
      )}

    </div>
  );
};

export default AddBook;
