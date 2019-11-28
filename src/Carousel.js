import React from "react";

class Carousel extends React.Component {
  state = {
    photos: [],
    active: 0
  };

  //getDerivedStateFromProps is invoked right before calling the render
  //method, both on the initial mount and on subsequent updates. It should
  //return an object to update the state, or null to update nothing.
  //This method abstracts logic into a handler.
  static getDerivedStateFromProps({ media }) {
    let photos = ["http://placecorgi.com/600/600"];

    if (media.length) {
      photos = media.map(({ large }) => large);
    }

    return { photos };
  }

  handleIndexClick = event => {
    //When you get a value back from dataset it's a string by default, and by putting
    //a plus before the listener it's becomes a number. Equivalent to parseInt().
    //Getting a dataset is equivalent to let val = e.target.getAttribute('data-index').
    this.setState({
      active: +event.target.dataset.index
    });
  };

  render() {
    const { photos, active } = this.state;

    return (
      <div className="carousel">
        <img src={photos[active]} alt="animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            <img
              key={photo}
              onClick={this.handleIndexClick}
              data-index={index}
              src={photo}
              className={index === active ? "active" : ""}
              alt="animal"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
