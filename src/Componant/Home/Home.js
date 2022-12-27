import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import QuizeCard from "./QuizeCard";

const Home = () => {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/quiz")
      .then((res) => res.json())
      .then((data) => setQuestions(data.data));
  }, []);
  return (
    <div>
      <Nav />
      {/* <Header /> */}
      

      <section className="">
        <div className="grid grid-cols-3 mx-auto mt-5">
          {questions?.map((item, i) => (
            <QuizeCard quizeData={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
