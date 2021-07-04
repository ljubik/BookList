import React, { useState, useEffect} from 'react';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import BookItem from './pages/BookItem';
import AddBook from './pages/AddBook';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';


function App(props){
  // const [books, setBooks] = useState([])

  let [books, setBooks] = useState([
    { "id": 1, "book_title": "json-server", "author_name": "typicode","category":"fantasy", "isbn": 2008955455},
    { "id": 2, "book_title": "json-server2", "author_name": "revers","category":"horror", "isbn": 20082335488},
    { "id": 3, "book_title": "json-server3", "author_name": "Mark","category":"fantasy", "isbn": 2008955499},
    { "id": 4, "book_title": "json-server4", "author_name": "anderson","category":"horror", "isbn": 2008955400}
  ]);

    useEffect(() => {
      // const books  = getBooks();
      // const books  = [{id:1,name:"test",autor:"22autor",isbn:222},{id:2,name:"test",autor:"22autor",isbn:222},{id:3,name:"test3",autor:"22a33utor",isbn:23322}];
      // setBooks({books});
      // console.log('componentWillMount', books)
    });

    function getBooks(){
        axios.defaults.baseURL = `http://localhost:4000`
        axios
        .get('/books')
        .then(({ data }) => {
          console.log('+++++++', data)
          localStorage.setItem('books', JSON.stringify(data));
          // return setBooks(() => ({ books: [...data] }));
          return setBooks (books);
           })
        .catch((error) => {
          console.log('---------', error)
        })

        // return books;
      }

      function onDelete(id){
          // const books = getBooks();
          console.log("delete", books)
          const filteredBooks = books.filter(book => {
            return book.id !== id;
          });
          // setBooks({books:filteredBooks});  
          // () => setBooks(books => {filteredBooks}) 
           setBooks(()=>({books:filteredBooks})) 
           console.log("delete filteredBooks", filteredBooks)
      }

      function onAdd(book_title, author_name, category, isbn){  
        console.log("onADD", books)     
              // const books = getBooks();
              let id = books.length + 1; /* get last insert id  */
              books.push({
                id, book_title, author_name, category, isbn 
              });
              setBooks({books:books});
              
      }
        
  function onEditSubmit(id, book_title, author_name, category, isbn ){
    console.log("onEdit", books)
          // let books = getBooks();
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
          setBooks({ books:books });
     
    }

  return (
  <>
    <Header/>
    <div className = "App" >
    <AddBook onAdd={onAdd}/>
    <Table books={books}>
      <thead>
        <tr>
          <th>#</th>
          <th>Title book</th>
          <th>Author name</th>
          <th>ISBN</th>
          <th>Category</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>

        {books.map((post) => 
        <tr key={post.id}>
        <td>
          {post.id}
        </td>
        <td>
          {post.book_title}
        </td>
        <td>
          {post.author_name}
        </td>
        <td>
          {post.isbn}
        </td>
        <td>
          {post.category}
        </td>
        <td>
          <BookItem onDelete={()=>onDelete()} onEditSubmit={onEditSubmit}/>
        </td>
        </tr>
        )}

      </tbody>
    </Table>

  </div>
  <Footer/>
  </>)
}



export default App;
