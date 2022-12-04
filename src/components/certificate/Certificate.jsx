import { forwardRef } from "react";
import "./certificate.css";
const Certificate = forwardRef(({ candidateName }, ref) => {
  return (
    <div ref={ref} className="parent-container">
      <div className="cerificate-details-display">
        <div>
          <div className="common-flex-row center">
            <img
              alt=""
              className="logo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV7ZnY5alr7HtwttOJyPNUWOJTyg-mpquMzA&usqp=CAU"
            />
            <h3>vodafone</h3>
          </div>
          <div className="common-flex-column excellence">
            <h2>CERTIFICATE OF EXCELLENCE</h2>
            <span>Awarded to </span>
          </div>
          <div>
            <h1 id="username">{candidateName.replaceAll("_", " ")}</h1>
          </div>
          <div className="graduating-from">
            <p>For graduating from</p>
            <h3>Code like a Girl</h3>
          </div>
          <div className="desc">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus fugiat, non enim
              distinctio a sed, porro modi unde, sint repellat repudiandae nobis vel laborum
              obcaecati. Accusantium sequi quaerat possimus deleniti.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});
export { Certificate };
