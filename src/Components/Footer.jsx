import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="footer text-center text-light px-5 border-1 shadow ">
        <p className="text-danger my-2">
          Designed by <span className="text-info">Mina Nady</span>
        </p>
        <p className="text-danger m-1">Contact me</p>
        <p>
          <span className="fs-4 m-1">
            <a
              href="https://www.linkedin.com/in/mina-nady-523506151/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </span>
          <span className="fs-4 m-1">
            <a
              href="https://github.com/Dr-developer-mina"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa-brands fa-github"></i>
            </a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
