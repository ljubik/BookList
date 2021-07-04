import React, {Component} from 'react';
import { Button } from 'react-bootstrap';

class BookItem extends Component {
  constructor(props){
    super (props);
    this.state = {
        isEdit : false
    };
    this.onDelete = this.onDelete.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.onEditSave = this.onEditSave.bind(this);
  }

  onDelete(){
    const {onDelete, id} = this.props;
    onDelete(id);
  }

  onEdit() {
        this.setState({isEdit :true });
    }

  onEditSave(event) {
    event.preventDefault();
    this.props.onEditSubmit(this.props.id, this.bookNameInput.value, this.bookAuthorInput.value, this.bookIsbnInput.value, this.bookCategoryInput.value);
    this.bookNameInput.value = '';
    this.bookAuthorInput.value = '';
    this.bookIsbnInput.value ='';
    this.bookCategoryInput.value ='';
    this.setState({isEdit :false });
  }

  render() {
      const { book_title, author_name, isbn, category } = this.props;
    return (
        <div>
          {
              this.state.isEdit ? (
                <div>
                  <form onSubmit={this.onEditSave}>
                    <div>
                      <span> Edit book </span>
                      <br />
                      <input placeholder="Book Name" ref={bookNameInput => this.bookNameInput = bookNameInput} defaultValue={book_title}/>
                      {`  `}
                      <input placeholder="Book author" ref={bookAuthorInput=>this.bookAuthorInput = bookAuthorInput} defaultValue={author_name}/>
                      {`  `}
                      <input placeholder="Book isbn" ref={bookIsbnInput=>this.bookIsbnInput = bookIsbnInput} defaultValue={isbn}/>
                      {`  `}
                      <br />
                      <input placeholder="Book category" ref={bookCategoryInput=>this.bookCategoryInput = bookCategoryInput} defaultValue={category}/>
                      {`  `}
                      <Button variant="primary" size="sm" onClick={this.onEditSave}> Save</Button>
                      <hr/>
                    </div>
                  </form>
                </div>
              ) : (
                <div>                
                      <span><Button variant="danger" size="sm" onClick={this.onDelete}> Delete </Button> </span>
                      <span><Button variant="warning" size="sm" onClick={this.onEdit}> Edit</Button> </span>
                </div>
              )
          }
        </div>
    );
  }
}

export default BookItem;