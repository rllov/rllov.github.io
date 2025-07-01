import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="w-full max-w-4xl space-y-8 mb-16 px-4">
      <h2 className="text-3xl font-bold mb-4 underline text-success">
        Contact
      </h2>
      <p className="text-base-content">
        If you'd like to get in touch, feel free to reach out!
      </p>
      <div className="space-y-4">
        <p className="text-base-content">
          Email:{" "}
          <a
            href="mailto:r.lee.lov@gmail.com"
            className="text-blue-500 hover:underline"
          >
            r.lee.lov@gmail.com
          </a>
        </p>
        <p className="text-base-content">
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/ryanlov/"
            className="text-blue-500 hover:underline"
          >
            ryanlov
          </a>
        </p>
        <p className="text-base-content">
          GitHub:{" "}
          <a
            href="https://github.com/rllov"
            className="text-blue-500 hover:underline"
          >
            rllov
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
