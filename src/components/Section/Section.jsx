import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <section className="statistics">
      <div>
        {title && <h2 className="title">{title}</h2>}
        {children}
      </div>
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
