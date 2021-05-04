import axios from "axios";
import { useEffect, useState } from "react";

export function FeaturedAuthors() {
  const [FeaturedAuthors, setFeaturedAuthors] = useState([]);
  const [FeaturedSeries, setFeaturedSeries] = useState([]);
  useEffect(() => {
    axios
      .get("https://e-commerce.sandeepmehta215.repl.co/featured")
      .then((resp) => {
        setFeaturedAuthors(resp.data.FeaturedAuthors);
        setFeaturedSeries(resp.data.FeaturedSeries);
      });
  }, []);

  return (
    <>
      <div className="featuredObjects">
        <h1> Featured India Authors </h1>
        <ul className="img-group">
          {FeaturedAuthors ? (
            FeaturedAuthors.map((obj, index) => {
              return (
                obj.nation === "India" && (
                  <li key={index} className="list list-group-item">
                    <img className="circle" alt="loading" src={obj.icon} />
                  </li>
                )
              );
            })
          ) : (
            <img
              className="bookBatchPills"
              src="https://as1.ftcdn.net/jpg/02/01/18/68/500_F_201186834_NLRQImmmfLmOHEQpQPXB6wh4F4quHloV.jpg"
              alt="loading"
            />
          )}
        </ul>
        <h1> Featured International Authors </h1>
        <ul className="img-group">
          {FeaturedAuthors ? (
            FeaturedAuthors.map((obj, index) => {
              return (
                obj.nation !== "India" && (
                  <li key={index} className="list list-group-item">
                    <img className="circle" alt="loading" src={obj.icon} />
                  </li>
                )
              );
            })
          ) : (
            <img
              className="bookBatchPills"
              src="https://as1.ftcdn.net/jpg/02/01/18/68/500_F_201186834_NLRQImmmfLmOHEQpQPXB6wh4F4quHloV.jpg"
              alt="loading"
            />
          )}
        </ul>
        <h1> Featured Series</h1>
        <ul className="img-group">
          {FeaturedSeries ? (
            FeaturedSeries.map((obj, index) => {
              return (
                <li key={index} className="list list-group-item">
                  <img className="square" alt="loading" src={obj.titleSrc} />
                </li>
              );
            })
          ) : (
            <img
              className="bookBatchPills"
              src="https://as1.ftcdn.net/jpg/02/01/18/68/500_F_201186834_NLRQImmmfLmOHEQpQPXB6wh4F4quHloV.jpg"
              alt="loading"
            />
          )}
        </ul>
      </div>
    </>
  );
}
