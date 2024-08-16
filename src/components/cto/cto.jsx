import React from "react";
import banner4 from "../../assets/images/banner4.png";
import "./cto.css";

export default function cto() {
  return (
    <div className="container-fluid mt-4 mb-4 bgImg">
      <div className="d-flex flex-column flex-md-row align-items-center py-5">
        <div className="text-section px-4">
          <h1 className="display-5 fw-bold text-dark">Buy your Dream Home</h1>
          <p className="display-5 fw-bold text-dark">
            Make your Dream comes true with us
            <br /> We provide all types of Houses,Bunglows,Villa,Apartment
            <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br /> Alias sapiente, repellendus corporis harum labor
            <br />e numquam dicta, earum dignissimos
            <br /> provident eius rem dolores iure doloremque qui distinctio
            facere maiores odio beatae? 
            <br />
          </p>
          <div
            className="d-grid gap-2 d-sm-flex justify-content-sm-start   
 justify-content-start"
          >
            {/* <button type="button" className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold " fdprocessedid="vtfwn4">Custom button</button>
            <button type="button" className="btn btn-outline-light btn-lg px-4" fdprocessedid="u8w00k">Secondary</button> */}
          </div>
        </div>
        <div className="image-section">{/* Your image here */}</div>
      </div>
    </div>
  );
}
