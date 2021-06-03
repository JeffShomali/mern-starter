import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateBook, deleteBook } from "../redux/actions/bookActions";
import BookDataService from "../services/BookService";
import { Link } from "react-router-dom";

const Book = (props) => {
  const initialState = {
    id: null,
    title: "",
    description: "",
  };
  const [currentBook, setCurrentBook] = useState(initialState);
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const getBook = id => {
    BookDataService.get(id)
      .then(response => {
        setCurrentBook(response.data);
        console.log("Book Result:")
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getBook(props.match.params.id);
  }, [props.match.params.id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentBook({ ...currentBook, [name]: value });
  };

  const updateContent = () => {
    dispatch(updateBook(currentBook.id, currentBook))
      .then(response => {
        console.log(response);
        setMessage("Book information updated!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const removeBook = () => {
    dispatch(deleteBook(currentBook.id))
      .then(() => {
        props.history.push("/books");
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div className="ui text container raised segment">
      <h2 className="ui header">Modify Current Book</h2>
      {currentBook ? (
      <div class="ui form">     
          <div class="field">
            <label htmlFor="title">Title</label>
            <div class="ui input">
              <input 
                type="text"
                className="form-control"
                id="title"
                required
                value={currentBook.title}
                onChange={handleInputChange}
                name="title"
               />
            </div>
          </div>
          <div class="field">
          <label htmlFor="description">Description</label>
          <textarea 
              type="text"
              className="form-control"
              id="description"
              required
              value={currentBook.description}
              onChange={handleInputChange}
              name="description"
              rows="4">
          </textarea>
          </div>
          <button className="ui negative button" onClick={removeBook}>
            Delete
          </button>
          <button  onClick={updateContent} class="ui teal button">Update 
          </button>
          { message && 
            <div class="ui positive message">
              <p>{message}</p>
            </div>
          }
      </div>
      ) : (
        <Link
            to={"/books"}
            className="setting icon"
          >
          <p>Please chose another book from book list page.</p> 
        </Link>         
      )}
    </div>
  );
};

export default Book;
