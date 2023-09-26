import PropTypes from "prop-types";
import "./page-section.scss";

const PageSection = ({ isReversed = false, children }) => {
  return (
    <section className={`page-section ${isReversed ? "reversed" : ""}`}>
      <>{children}</>
    </section>
  );
};

PageSection.propTypes = {
  isReversed: PropTypes.bool,
  children: PropTypes.node,
};

export default PageSection;
