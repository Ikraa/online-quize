import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const DynamicRoute = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [view, setIsView] = useState("");
  useEffect(() => {
    fetch(`https://openapi.programming-hero.com/api/quiz/${id}`)
      .then((res) => res.json())
      .then((data) => setItem(data?.data));
  }, []);
  console.log(item, "=item log", id, "id");
  return (
    <div className="bg-white w-[90%] mx-auto pb-12">
      <h3 className="text-center text-black font-bold pt-5">{item?.name}</h3>

      <div className="mt-8 ml-[18px]">
        {item?.questions?.map((ques, i) => (
          <div className="mb-8">
            <h3 className="text-black font-bold">
              {" "}
              {i +
                1 +
                ". " +
                ques?.question?.slice(4, ques?.question?.length - 4)}
            </h3>
            {ques?.options?.map((question, j) => (
              <>
                <div class="flex items-center my-4">
                  <input
                    id={`default-radio-${i + j}`}
                    type="radio"
                    value=""
                    name="default-radio"
                    class="w-4 h-4 "
                    onChange={(e) => {
                      if (ques?.correctAnswer === question) {
                        toast.success("Correct answer..");
                      } else {
                        toast.error("Wrong answer..");
                      }
                    }}
                  />
                  <label
                    for={`default-radio-${i + j}`}
                    class="ml-2 text-sm text-black font-[14px]  "
                  >
                    {question}
                  </label>
                </div>
              </>
            ))}
            {i === view && (
              <>
                <div className="font-bold"><span className="text-[#5eac1a]">Correct Answer:-</span>{ques?.correctAnswer}</div>
              </>
            )}
            <div
              onClick={() => {
                if (i === view) {
                  setIsView("");
                } else {
                  setIsView(i);
                }
              }}
              className="text-[#07C] w-fit cursor-pointer flex items-center"
            >
              <i class="fa-sharp mr-2 fa-solid fa-eye"></i>
              <span className=" font-semibold">View answer</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DynamicRoute;
