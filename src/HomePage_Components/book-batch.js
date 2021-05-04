import { useEffect, useState } from "react";
import axios from "axios";

export function BookBatches() {
  const [img, setImg] = useState([]);
  useEffect(() => {
    axios
      .get("https://e-commerce.sandeepmehta215.repl.co/bookbatches")
      .then((resp) => {
        if (resp.status === 200) setImg(resp.data.images);
        else setImg("loading...");
      });
  }, []);

  return (
    <div className="bookBatches">
      {img ? (
        img.map((obj) => (
          <img className="bookBatchPills" src={obj} alt="loading" key={obj} />
        ))
      ) : (
        <img
          className="bookBatchPills"
          src="https://as1.ftcdn.net/jpg/02/01/18/68/500_F_201186834_NLRQImmmfLmOHEQpQPXB6wh4F4quHloV.jpg"
          alt="loading"
        />
      )}
    </div>
  );
}
