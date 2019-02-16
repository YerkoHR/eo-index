import React from "react";

const Footer = () => (
  <footer class="footer">
    <div class="content has-text-centered">
      <p>
        <strong>EO Classes</strong> by{" "}
        <a href="https://yerkohr.net">Yerko Henriquez</a> ©{" "}
        {new Date().getFullYear()}
      </p>
    </div>
  </footer>
);

export default Footer;
