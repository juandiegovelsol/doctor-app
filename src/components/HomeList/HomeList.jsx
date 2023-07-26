import PropTypes from "prop-types";
import "./home-list.scss";

const HomeList = ({ title, list, image }) => {
  return (
    <article className="home-list">
      <h2 className="home-list__title">{title}</h2>
      <ul className="home-list__list">
        {list.map((item) => (
          <li key={item} className="home-list__element">
            <img src={image} className="home-list__image" />
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
};

HomeList.propTypes = {
  title: PropTypes.string,
  list: PropTypes.array,
  image: PropTypes.any,
};

export default HomeList;
