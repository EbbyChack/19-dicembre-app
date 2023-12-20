import Row from "react-bootstrap/Row";
import { Form, FormControl, Button } from 'react-bootstrap';

import SingleBook from "../components/SingleBook";

function BookList(props) {

     

  return (
    <>
    <Form className="d-flex m-5">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
         
      />
      <Button variant="outline-success">Search</Button>
    </Form>


    <Row className="g-5">
      {props.genre.map((book,index) => (
        <SingleBook key={`book${index}`} book={book} />
      ))}
    </Row>
    </>
  );
}

export default BookList;
