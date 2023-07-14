import PropTypes from "prop-types";
import "./page-section.scss";

const PageSection = ({ isReversed = false, children }) => {
  return (
    <section className={`page-section ${isReversed ? "reversed" : ""}`}>
      <>{children}</>
      <h1>Page1</h1>
      <h1>Page2</h1>
    </section>
  );
};

PageSection.propTypes = {
  isReversed: PropTypes.bool,
  children: PropTypes.node,
};

export default PageSection;
