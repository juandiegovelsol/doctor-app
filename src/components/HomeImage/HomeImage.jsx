import PropTypes from "prop-types";
import "./home-image.scss";

const HomeImage = ({ img }) => {
  return (
    <article className="home-image">
      <img src={img} className="home-image__image" />
    </article>
  );
};
HomeImage.propTypes = {
  img: PropTypes.any,
};

export default HomeImage;
