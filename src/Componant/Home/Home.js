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
      

      <section className="w-[90%] mx-auto ">
        <div className="grid grid-cols-3 gap-3  mx-auto mt-5">
          {questions?.map((item, i) => (
            <QuizeCard quizeData={item} i={i} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
