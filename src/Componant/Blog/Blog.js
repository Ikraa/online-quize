import React from "react";
import Nav from "../Nav/Nav";

const Blog = () => {
  return (
    <div>
      <div>
        <Nav />
        <h1 className="text-center text-3xl font-bold my-10 text-black">
          Queasion & Answer
        </h1>
        <section className="mx-20 text-xl my-2 text-black">
          <h1 className="font-semibold pb-3">
            1.What is the purpose of react router?
          </h1>
          <p>
            <span className="font-semibold">Ans:</span> The Router in React JS
            is primarily used to create Single Page Web Apps. This is used to
            define multiple routes in the application. When a user enters a URL
            into your browser and the URL route equals one of several 'pathways'
            as in the router folder, the user is sent to that route.
          </p>
          <h1 className="font-semibold py-3">2. How does context api work?</h1>
          <p>
            <span className="font-semibold">Ans: </span> 
            The Context API helps share data between components which can't
            easily share with props. 
            For example, complex data objects, React.
            Context API provides a way to send data like user id, auth, and theme
            data through the component tree without sending any props manually
            at every level.
          </p>
          <h1 className="font-semibold py-3">3.Write about the "useRef" hook.</h1>
          <p>
            <span className="font-semibold">Ans:</span> 
          </p>
        </section>
      </div>
    </div>
  );
};

export default Blog;
