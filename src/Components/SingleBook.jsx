import {Component} from "react";
import {Card, Button, Form} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false,
    asin: null,
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
      >
        <Card.Img
          style={{width: "16rem"}}
          variant="top"
          src={this.props.book.img}
          onClick={(e) =>
            this.setState({
              selected: !this.state.selected,
              // asin: this.props.state.selected ? this.props.book.asin : null,
              asin: this.props.book.asin,
            })
          }
        />
        <Card.Body>
          <Card.Title>{this.props.book.title}</Card.Title>
          <Card.Text>Price: {this.props.book.price}</Card.Text>
          <Button variant="primary">{this.props.book.category} </Button>
        </Card.Body>
        {/*  Comments area shown when the user clicke on the tile */}

        <CommentArea
          //   asin={this.state.selected ? this.props.book.asin : ""}
          comments={this.state.selected ? 1 : 0}
          id={this.props.book.asin}
        />
      </Card>
    );
  }
}

export default SingleBook;
