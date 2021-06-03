import {Component} from "react";
import {Card, Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    console.log(this.props);
    return (
      <Card
        style={{
          width: "18rem",
          border: this.state.selected ? "3px solid red" : "none",
        }}
        className="m-2"
        onClick={(e) => this.setState({selected: !this.state.selected})}
      >
        <Card.Img
          style={{width: "16rem"}}
          variant="top"
          src={this.props.book.img}
        />

        <Card.Body>
          <Card.Title>{this.props.book.title}</Card.Title>
          <Card.Text>Price: {this.props.book.price}</Card.Text>
          <Button variant="primary">{this.props.book.category} </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
