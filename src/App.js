import "./App.css";
import React, { Component, lazy, Suspense } from 'react';
import { Route } from 'react-router';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// import db from "./db/db.json";
import BookItem from './pages/BookItem';
import AddBook from './pages/AddBook';

import axios from 'axios';
import { Button, Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// const BookItem = lazy(() => import('./pages/BookItem'));
// const AddBook = lazy(() => import('./pages/AddBook'));
// const About = lazy(() => import('./pages/About'));
// localStorage.setItem('books', JSON.stringify(books));


class App extends Component {


  constructor(props){
    super (props);
    this.state = { books: JSON.parse(localStorage.getItem('books')) , term:'' };
    this.onDelete = this.onDelete.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
  }

  componentWillMount(){
    const books  = this.getBooks();
    this.setState({books});
    console.log('componentWillMount', books)

  }

  componentDidUpdate(prevProps, prevState) {
    const { books } = this.state;
    if (books !== prevState.books) {
      localStorage.setItem("books", JSON.stringify(this.state.books));
    }
  }

  getBooks(){
    axios.defaults.baseURL = `http://localhost:4000`
    axios
    .get('/books')
    .then(({ data }) => {
      console.log('+++++++', data)
      localStorage.setItem('books', JSON.stringify(data));
      return this.setState(() => ({ book: [...data] }));
     
       })
    .catch((error) => {
      console.log('---------', error)
    })
    
    return this.state.books;
  }

  onDelete(id){
      const books = this.getBooks();
      const filteredBooks = books.filter(book => {
        return book.id !== id;
      });
      this.setState({books:filteredBooks});    
  }

  onAdd(book_title, author_name, category, isbn ){       
      const books = this.getBooks();
      let id = books.length + 1; /* get last insert id  */
      books.push({
        id, book_title, author_name, category, isbn 
      });
      this.setState({books});
      
  }

  onEditSubmit(id, book_title, author_name, category, isbn ){
  let books = this.getBooks();
  books = books.map(book => {
    if(book.id === id){
      book.id = id;
      book.book_title = book_title;
      book.author_name = author_name;
      book.category = category;
      book.isbn = isbn;
    }
    return book;
  });
  this.setState({ books });
  }

  render() {

    return (
      <>
      <Header/>
      <div className = "App" >
        
      {/* <Suspense fallback={"Waiting..."}>
          <Route exact path="/" render={props => 
            <About 
              {...props} 
              onChangePath={this.onChangePath}
            />}
          />
          <Route exact path="/booklist" render={props => 
            <BookItem 
              {...props} 
              onChangePath={this.onChangePath}
            />}
          />
          <Route exact path="/AddBook" render={props => 
            <AddBook 
              {...props} 
              onChangePath={this.onChangePath}
            />}
          />
      </Suspense> */}

        <AddBook onAdd={this.onAdd}/>
        <Table striped bordered hover books={this.state.books}>
            <thead>
              <tr>
                <th>#</th>
                <th>Title book</th>
                <th>Author name</th>
                <th>Category</th>
                <th>ISBN</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.books.map((book) => 
              <tr key={book.id}>
              <td key={book.id}>
                {book.id}
              </td>
              <td>
                {book.book_title}
              </td>
              <td>
                {book.author_name}
              </td>
              <td>
                {book.category}
              </td>
              <td>
                {book.isbn}
              </td>
              <td>
                <span><BookItem key={book.id} {...book} onDelete={this.onDelete} onEditSubmit={this.onEditSubmit}/></span>
                {/* <span><Button variant="danger" size="sm" onDelete={this.onDelete}> Delete </Button> </span>
                <span><Button variant="warning" size="sm" onEditSubmit={this.onEditSubmit}> Edit</Button> </span> */}
               </td>
              </tr>
              )}
            </tbody>
          </Table>
        </div>
      <Footer/>
      
    </>
    );
  }
}

export default App;
