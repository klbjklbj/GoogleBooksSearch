import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import Card from "../components/Card";
import SavedBookInfo from "../components/SavedBookInfo";

class SavedBooks extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data },
          console.log(res.data))
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };


  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Card>
              <h1>Saved Books</h1>
            </Card>
            {this.state.books.length ? (
              <Card>
                {this.state.books.map(book => (
                  <SavedBookInfo key={book._id}
                    title={book.title}
                    authors={book.authors.join(", ")}
                    link={book.link}
                    src={book.src}
                    description={book.description}
                    deleteBook={() => this.deleteBook(book._id)}
                  />
                  
                ))}
              </Card>
            ) : (
                <h3>No Results to Display</h3>
              )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SavedBooks;
