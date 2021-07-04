import React, {Component} from 'react';
import { Button, Form } from 'react-bootstrap';



class AddBook extends Component {

    constructor(props) {
        super (props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();                 
        this.props.onAdd(this.bookNameInput.value, this.bookAuthorInput.value, this.bookIsbnInput.value, this.bookCategoryInput.value);
        this.bookNameInput.value = '';
        this.bookAuthorInput.value = '';
        this.bookIsbnInput.value ='';
        this.bookCategoryInput.value ='';
    }

  render() {
      return (
        <>

            <Form onSubmit={this.onSubmit}>
            <div>            
            <span> Add a book </span>
            <br />
            <input placeholder="Book Name" ref={bookNameInput => this.bookNameInput = bookNameInput} required/>
            
            <input placeholder="Book author" ref={bookAuthorInput=>this.bookAuthorInput = bookAuthorInput} required/>
            
            <input placeholder="Book isbn" ref={bookIsbnInput=>this.bookIsbnInput = bookIsbnInput} required/>
            
            <input placeholder="Book category" ref={bookCategoryInput=>this.bookCategoryInput = bookCategoryInput} required/>
            
            <Button variant="primary" size="sm" onClick={this.onSubmit}>Add Book</Button>

            <hr/>
            </div>
            </Form>

        </>
    );
  }
}

export default AddBook;

