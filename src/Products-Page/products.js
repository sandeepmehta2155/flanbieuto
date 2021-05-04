import { useFilter } from "./filter-context";
import { useProd } from "./product-context";

export const Products = () => {
  const { itemsInProduct, productDispatch } = useProd();
  const { IncludeOutOfStock } = useFilter();
  const { fastDelvry } = useFilter();
  const { value } = useFilter();
  const { sorting } = useFilter();

  return (
    <>
      <h1 className="productsHead">Books in focus</h1>
      <ul className="productList">
        {itemsInProduct
          .filter((obj) => {
            if (IncludeOutOfStock) return obj.stockStatus === "InStock";
            return obj;
          })
          .filter((obj) => {
            if (fastDelvry) return obj.fastDelivery === "yes";
            return obj;
          })
          .filter((obj) => obj.price > value)
          .sort((a, b) =>
            sorting === "highToLow" ? a.price - b.price : b.price - a.price
          )
          .map((obj) => {
            return (
              <li
                className="productCard"
                key={obj.id}
                style={{ listStyle: "none" }}
              >
                <div className="cardProductDetails">
                  <div>
                    {obj.wishList === "yes" && (
                      <span
                        className="love active"
                        onClick={() =>
                          productDispatch({ type: "removeFromWishList", obj })
                        }
                      >
                        <span className="drop"></span>
                        <span className="drop"></span>
                        <span className="drop"></span>
                        <span className="drop"></span>
                        <span className="drop"></span>
                        <span className="drop"></span>
                        <span className="drop"></span>
                        <span className="circleheart"></span>

                        <svg
                          className="heart"
                          xmlns="http://www.w3.org/2000/svg"
                          version="1.1"
                          x="0"
                          y="0"
                          width="510"
                          height="510"
                          viewBox="0 0 510 510"
                          // xml:space="preserve"
                        >
                          <path d="M255 489.6l-35.7-35.7C86.7 336.6 0 257.6 0 160.7 0 81.6 61.2 20.4 140.3 20.4c43.4 0 86.7 20.4 114.8 53.6C283.1 40.8 326.4 20.4 369.8 20.4 448.8 20.4 510 81.6 510 160.7c0 96.9-86.7 176-219.3 293.3L255 489.6z" />
                        </svg>
                      </span>
                    )}
                    {obj.wishList === "no" && (
                      <span
                        className="love"
                        onClick={() =>
                          productDispatch({ type: "addToWishList", obj })
                        }
                      >
                        <span className="drop"></span>
                        <span className="drop"></span>
                        <span className="drop"></span>
                        <span className="drop"></span>
                        <span className="drop"></span>
                        <span className="drop"></span>
                        <span className="drop"></span>
                        <span className="circleheart"></span>
                        <button className="heartButton">
                          <svg
                            className="heart"
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            x="0"
                            y="0"
                            width="510"
                            height="510"
                            viewBox="0 0 510 510"
                            // xml:space="preserve"
                          >
                            <path d="M255 489.6l-35.7-35.7C86.7 336.6 0 257.6 0 160.7 0 81.6 61.2 20.4 140.3 20.4c43.4 0 86.7 20.4 114.8 53.6C283.1 40.8 326.4 20.4 369.8 20.4 448.8 20.4 510 81.6 510 160.7c0 96.9-86.7 176-219.3 293.3L255 489.6z" />
                          </svg>
                        </button>
                      </span>
                    )}
                    <img className="cardImage" src={obj.src} alt="loading.." />
                    <button
                      className="card-button"
                      onClick={() =>
                        productDispatch({ type: "increment", obj })
                      }
                    >
                      {" "}
                      Add to Cart{" "}
                      <span role="img" aria-labelledby="cart">
                        🛒
                      </span>
                    </button>
                    <div className="card-title">{obj.name}</div>
                    <div className="card-price">
                      Rs {obj.price}
                      <span style={{ margin: ".5rem" }}>
                        <s>Rs {obj.Originalprice}</s>
                      </span>
                    </div>
                  </div>
                  <br />
                </div>
              </li>
            );
          })}
      </ul>
    </>
  );
};
