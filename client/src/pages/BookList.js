import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { retrieveBooks, findBooksByTitle, deleteAllBooks } from "../redux/actions/bookActions";
import { Link } from "react-router-dom";
import moment from 'moment'

const BooksList = () => {
  const [currentBook, setCurrentBook] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchTitle, setSearchTitle] = useState("");

  const books = useSelector(state => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieveBooks());
  }, []);

  const onChangeSearchBook = e => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
  };

  const refreshData = () => {
    setCurrentBook(null);
    setCurrentIndex(-1);
  };

  const setActiveBook = (book, index) => {
    setCurrentBook(book);
    setCurrentIndex(index);
  };

  const removeAllBooks = () => {
    dispatch(deleteAllBooks())
      .then(response => {
        console.log(response);
        refreshData();
      })
      .catch(e => {
        console.log(e);
      });
  };

  const findByTitle = () => {
    refreshData();
    dispatch(findBooksByTitle(searchTitle));
  };

  return (
    <div className="ui container">  
      <div class="ui buttons">
        <div class="ui huge form">
          <div class="sixteen wide field">
            <input
              type="text"
              className="form-control"
              placeholder="Search by title"
              value={searchTitle}
              onChange={onChangeSearchBook}
            />
          </div>
        </div>
        <button
          type="button"
          onClick={findByTitle} 
          className="ui  button"
          >Search
        </button>
      </div>
      
      <div className="ui hidden divider"></div>

      { books && books.map((book, index) => (
          <a onClick={() => setActiveBook(book, index)} key={index}>
            <div className="ui link card">
            <div className="content">
              <div className="header">{book.title}</div>
              <div className="meta">
                <span className="date">
                  {moment(book.createdAt, "YYYYMMDD").fromNow()}
                </span>
              </div>
              <div className="description">{ book.description.substring(0,120) + ' ...'}</div>
            </div>
            { currentBook && (
            <div className="extra content">
            <Link
              to={"/books/" + currentBook.id}
              className="setting icon"
            >
            <button class="circular ui icon button">
              <i class="icon settings"></i>
            </button>
            </Link>  
            </div> 
            ) }
          </div>
          <div className="ui hidden divider"></div>  
        </a>      
        ))
      }
      <button
         className="ui labeled negative icon button"
         onClick={removeAllBooks}
         >
        <i className="trash icon"></i>
        Remove All Books
      </button>
      <div className="ui hidden divider"></div>  
    </div>
    
  );
};

export default BooksList;
