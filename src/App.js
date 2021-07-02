import "./App.css";
import React, { Component} from 'react';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import db from "./db/db.json";
import BookItem from './pages/BookItem';
import AddBook from './pages/AddBook';


const books = db
// const books = [
//   {
//     id:1,
//     book_title: "Do Androids Dream",
//     author_name: "Philip K. Dick",
//     category:"fantasy",
//     isbn: 1231231232
//   },
//   {
//     id: 2,
//     book_title: "Electric Sheep? ",
//     author_name: "Philip revers",
//     category:"fantasy",
//     isbn: 2012313432
//   },
//   {
//     id: 3,
//     book_title: "Dream of Electric Sheep? ",
//     author_name: "Karl Fick",
//     category:"fantasy",
//     isbn: 2088823332
//   },
//   {
//     id: 4,
//     book_title: " Do Androids Dream of Electric Sheep? ",
//     author_name: "Philip K. Dick",
//     category:"horror",
//     isbn: 2008955455
//   }];

localStorage.setItem('books', JSON.stringify(books));


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
  }

  getBooks(){
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
        
        <AddBook onAdd={this.onAdd}/>
        <div> <span> Title book </span> | <span> Author name </span> | <span> ISBN </span>  | <span> Category </span> | <span>Action </span> </div>
        <ul>
          {  
            this.state.books.map(book => {
              return (                        
                <li><BookItem key={book.id} {...book} onDelete={this.onDelete} onEditSubmit={this.onEditSubmit}/></li>
              );
            })
          }
        </ul>     
      </div>
      <Footer/>
    </>
    );
  }
}

export default App;
