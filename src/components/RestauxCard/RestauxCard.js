import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import StarRatingComponent from "react-star-rating-component";

const RestauxCard = ({ el }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={el.img} />
      <Card.Body>
        <Card.Title>{el.name}</Card.Title>
        <Card.Text>{el.description}</Card.Text>
        <StarRatingComponent
          name= "rating" /* name of the radio input, it is required */
          value={el.rate} /* number of selected icon (`0` - none, `1` - first) */
          starColor="#F2CD5C" /* color of selected icons, default `#ffb400` */
          editing={false} /* is component available for editing, default `true` */
        />
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default RestauxCard;
