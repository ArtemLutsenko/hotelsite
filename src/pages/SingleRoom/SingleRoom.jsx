import React, { Component } from "react";
import defaultBcg from "../../images/room-1.jpeg";
import Banner from "../../components/Banner/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../../context";
import StyledComponent from "../../components/StyledComponent/StyledComponent";

export default class SingleRoom extends Component {
  state = {
    slug: this.props.match.params.id,
    defaultBcg
  };

  static contextType = RoomContext;

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    if (!room) {
      return (
        <div className="error">
          <h3>no such room could be faund</h3>
          <Link to="/rooms" className="btn btn-primary">
            Back to rooms
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images
    } = room;
    const [mainImg, ...defaultBcg] = images;

    return (
      <>
        <StyledComponent img={mainImg || this.state.defaultBcg}>
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn btn-primary">
              Back to rooms
            </Link>
          </Banner>
        </StyledComponent>
        <section className="single-room">
          <div className="single-room-images">
            {defaultBcg.map((item, index) => (
              <img key={index} src={item} alt={name} />
            ))}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price: ${price}</h6>
              <h6>size: ${size}SQFT</h6>
              <h6>
                max capacity :
                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h6>
              <h6>{pets}</h6>
              <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
              <h6>{breakfast && "free breackfast included"}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>extrass</h6>
          <ul className="extras">
            {extras.map((item, index) => (
              <li key={index}>- {item}</li>
            ))}
          </ul>
        </section>
      </>
    );
  }
}
