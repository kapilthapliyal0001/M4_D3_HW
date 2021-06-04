import {ListGroup} from "react-bootstrap";
const GetComment = (props) => {
  var arr = [];
  try {
    let response = fetch(
      `https://striveschool-api.herokuapp.com/api/comments/${props.id}`,
      {
        method: "GET",
        headers: {
          // headers is the info about the doctype;
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFmODNiYmJlOWIxNTAwMTU1MDZlMTgiLCJpYXQiOjE2MjI3MzIxOTEsImV4cCI6MTYyMzk0MTc5MX0.ZqdgZmULZcI7gjh5daMg5RB8e4ZXiaeO8cFi1Ztz-Ro",
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        arr = data;
        console.log(arr);
      });
  } catch (error) {
    console.log("Some issue with fetch");
  }

  return (
    <ListGroup>
      {arr.map((b) => (
        <ListGroup.Item>{b.comment} </ListGroup.Item>
      ))}
    </ListGroup>
  );

  // arr.map((comment) => <h4>{comment.comment}</h4>);
  // <ListGroup>
  //     {arr.map((b) => (
  //       <ListGroup.Item>{b.comment} </ListGroup.Item>
  //     ))}
  //   </ListGroup>
};

export default GetComment;
