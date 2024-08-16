import React from "react";

const Jumbotron = () => {
  return (
    <div className="jumbotron">
      <div class="container mt-4">
        <div
          class="p-5 rounded w-100"
          style={{ backgroundColor: "#f2f2f2", color: "#333" }}
        >
          <h1 class="pt-5">A Warm Welcome!</h1>
          <p class="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, Ipsam
            eligendi, in quo sunt possimus non incidut odit vero aliquid
            similique quaerat nam nombis illo aspernatur vitae fugiat numquam
            repellat
          </p>
          <a
            class="btn btn-lg btn-primary"
            href="/docs/5.0/components/navbar/"
            role="button"
          >
            Call to Action!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
