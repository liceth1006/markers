
import PropTypes from "prop-types";


const Wave = ({colorLight,colorDark}) => {
  


  return (
    <div style={{ height: "150px", overflow: "hidden" }}>
      <svg
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        style={{ height: "100%", width: "100%" }}
       
      >
        <path
          d="M0.00,49.98 C203.43,186.03 354.68,-78.44 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
          style={{
            stroke: "none"
            
          }}
          className={`fill-current ${colorLight} ${colorDark}`}
        />
      </svg>
    </div>
  );
};

Wave.propTypes = {
  colorDark: PropTypes.func.isRequired,
  colorLight: PropTypes.string.isRequired,
};
export default Wave;
