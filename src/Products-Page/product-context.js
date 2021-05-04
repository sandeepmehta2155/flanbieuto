import { createContext, useContext, useReducer } from "react";

export const ProductContext = createContext();

export function useProd() {
  return useContext(ProductContext);
}
export function ProductProvider({ children }) {
  const [productState, productDispatch] = useReducer(productReducer, {
    itemsInProduct
  });
  return (
    <ProductContext.Provider
      value={{ itemsInProduct: productState.itemsInProduct, productDispatch }}
    >
      {children}
    </ProductContext.Provider>
  );
}

const itemsInProduct = [
  {
    id: 1,
    name: "Wall Street Meat",
    src:
      "https://images-na.ssl-images-amazon.com/images/I/51VFQePgXxL._SX326_BO1,204,203,200_.jpg",
    Originalprice: 989,
    price: 824,
    quantity: 0,
    wishList: "no",
    stockStatus: "InStock",
    fastDelivery: "yes",
    category: "economyAndFinance"
  },
  {
    id: 2,
    name: "How to Avoid Loss...",
    Originalprice: 399,
    price: 380,
    quantity: 0,
    wishList: "no",
    stockStatus: "InStock",
    fastDelivery: "yes",
    src:
      "https://images-na.ssl-images-amazon.com/images/I/51B50rWGTkL._SX315_BO1,204,203,200_.jpg",
    category: "economyAndFinance"
  },
  {
    id: 3,
    name: "How do I made...",
    Originalprice: 295,
    price: 251,
    wishList: "no",
    quantity: 0,
    stockStatus: "InStock",
    fastDelivery: "yes",
    src:
      "https://images-na.ssl-images-amazon.com/images/I/513nAJS9epL._SX326_BO1,204,203,200_.jpg",
    category: "economyAndFinance"
  },
  {
    id: 5,
    name: "The Intelligent Investor",
    Originalprice: 799,
    price: 450,
    quantity: 0,
    wishList: "no",
    stockStatus: "InStock",
    fastDelivery: "no",
    src:
      "https://images-na.ssl-images-amazon.com/images/I/51DLoxAJ68L._SX324_BO1,204,203,200_.jpg",
    category: "economyAndFinance"
  },
  {
    id: 6,
    name: "Everything You Wanted...",
    Originalprice: 499,
    price: 370,
    quantity: 0,
    wishList: "no",
    stockStatus: "OutOfStock",
    fastDelivery: "yes",
    src:
      "https://images-na.ssl-images-amazon.com/images/I/41l0cQEXrCL._SX346_BO1,204,203,200_.jpg",
    category: "economyAndFinance"
  },
  {
    id: 7,
    name: "A Court of Thorns",
    Originalprice: 369,
    price: 499,
    quantity: 0,
    wishList: "no",
    stockStatus: "InStock",
    fastDelivery: "yes",
    src: "https://m.media-amazon.com/images/I/51FaoP3MfML.jpg",
    category: "youngAndAdultNovels"
  },
  {
    id: 8,
    name: "A Separate Peace",
    Originalprice: 369,
    price: 499,
    quantity: 0,
    wishList: "no",
    stockStatus: "InStock",
    fastDelivery: "yes",
    src: "https://m.media-amazon.com/images/I/51L1V9iIB7L.jpg",
    category: "youngAndAdultNovels"
  },
  {
    id: 9,
    name: "A Wizard of Earthsea",
    Originalprice: 369,
    price: 499,
    quantity: 0,
    wishList: "no",
    stockStatus: "InStock",
    fastDelivery: "yes",
    src:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1355896528l/13356675.jpg",
    category: "youngAndAdultNovels"
  },

  {
    id: 10,
    name: "A Wrinkle in Time",
    Originalprice: 369,
    price: 499,
    quantity: 0,
    wishList: "no",
    stockStatus: "InStock",
    fastDelivery: "yes",
    src: "https://m.media-amazon.com/images/I/510-sv2qzFL.jpg",
    category: "youngAndAdultNovels"
  },

  {
    id: 11,
    name: "The Beginner's Stock",
    Originalprice: 369,
    price: 499,
    quantity: 0,
    wishList: "no",
    stockStatus: "InStock",
    fastDelivery: "yes",
    src:
      "https://images-na.ssl-images-amazon.com/images/I/416QkO9SfFL._SX331_BO1,204,203,200_.jpg",
    category: "mystery"
  },

  {
    id: 12,
    name: "And Then There...",
    Originalprice: 369,
    price: 499,
    quantity: 0,
    wishList: "no",
    stockStatus: "InStock",
    fastDelivery: "yes",
    src:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1409600899l/9723667.jpg",
    category: "mystery"
  },

  {
    id: 13,
    name: "TA Simple Favor",
    Originalprice: 369,
    price: 499,
    quantity: 0,
    wishList: "no",
    stockStatus: "InStock",
    fastDelivery: "yes",
    src: "https://m.media-amazon.com/images/I/51JuncJh3UL.jpg",
    category: "mystery"
  },

  {
    id: 14,
    name: "Before I Go To Sleep",
    Originalprice: 369,
    price: 499,
    quantity: 0,
    wishList: "no",
    stockStatus: "InStock",
    fastDelivery: "yes",
    src: "https://m.media-amazon.com/images/I/51+UnWJoCVL.jpg",
    category: "mystery"
  },

  {
    id: 15,
    name: "The Couple Next Door",
    Originalprice: 369,
    price: 499,
    quantity: 0,
    wishList: "no",
    stockStatus: "InStock",
    fastDelivery: "yes",
    src: "https://m.media-amazon.com/images/I/51cbpgsfDNL.jpg",
    category: "mystery"
  },

  {
    id: 16,
    name: "Serena",
    Originalprice: 369,
    price: 499,
    quantity: 0,
    wishList: "no",
    stockStatus: "InStock",
    fastDelivery: "yes",
    src: "https://m.media-amazon.com/images/I/51-GoxKZEpL.jpg",
    category: "mystery"
  },

  {
    id: 17,
    name: "You",
    Originalprice: 369,
    price: 499,
    quantity: 0,
    wishList: "no",
    stockStatus: "InStock",
    fastDelivery: "yes",
    src: "https://m.media-amazon.com/images/I/5196gJhgX-L.jpg",
    category: "mystery"
  },
  {
    id: 18,
    name: "The Book of Longings",
    writer: "Sue Monk Kidd",
    Originalprice: 369,
    price: 499,
    quantity: 0,
    wishList: "no",
    stockStatus: "InStock",
    fastDelivery: "yes",
    desription:
      "At once painstakingly researched and painfully human, The Book of Longings tackles a provocative subject with a sensitive, lyrical touch: the hypothetical marriage of Jesus Christ. But you don’t have to be a regular Gospel reader to appreciate this touching, feminist-inflected story.Born to a well-heeled family in first-century Galilee, Ana is brilliant — and bored. She’s expected to be silent and yielding, but she spends her hours writing in secret, longing for something to do with all her unappreciated talent. That’s when she meets Jesus, an eighteen-year-old with big ideas. The young rabbi with the revolutionary spirit shakes up Ana’s staid world for good — and steals her heart in the process.",
    src: "https://m.media-amazon.com/images/I/51JZHMzi7xL.jpg",
    category: "history"
  },
  {
    id: 19,
    name: "The Twelve Rooms...",
    writer: "Enid Shomer",
    Originalprice: 369,
    price: 499,
    quantity: 0,
    wishList: "no",
    stockStatus: "InStock",
    fastDelivery: "yes",
    desription:
      "She invented a discipline that changed medicine forever. He wrote one of the finest novels in  history. And now, the Fates have brought them to the same place, at the same time. This might sound like the premise of a charmingly kooky romance between made-up characters, but it actually describes two real-life historical icons: Florence Nightingale, the mother of modern nursing, and Gustave Flaubert, the author of Madame Bovary. For a while, in 1850, both happened to be sailing up the Nile. In reality, Nightingale and Flaubert didn’t seem to have bumped into each other at all on their Egyptian treks. But The Twelve Rooms of the Nile envisages what might have happened if they had. In Shomer’s dazzling imagination, no-nonsense Florence and hedonistic, womanizing Gustave strike up the unlikeliest of friendships",

    src: "https://m.media-amazon.com/images/I/51hi--7lQ-L.jpg",

    category: "history"
  },
  {
    id: 20,
    name: "The Pillars of the Earth",
    writer: "Ken Follett",
    Originalprice: 369,
    price: 499,
    quantity: 0,
    wishList: "no",
    stockStatus: "InStock",
    fastDelivery: "yes",
    desription:
      "When Ken Follett took a sharp turn from suspenseful spy novels to historical fiction, readers didn’t know what to expect. Little did they know that this twelfth-century adventure featuring a down-to-earth mason, an outlawed witch, and a warm-hearted priest would become one of Follett’s bestselling novels. The Pillars of the Earth opens with said mason — Tom Builder — searching for a job to sustain his family only to fall in love with the outlawed witch. Eventually, Tom is employed by the priest to build a cathedral, but all doesn’t go smoothly, thanks to a villainous earl and archdeacon who fear they’ll lose their clout if said cathedral gets built. From impressive word-pictures of majestic architecture to dramatic sieges, this novel gives you everything you need to feel like you’ve travelled to medieval England.",
    src: "https://m.media-amazon.com/images/I/51qloCoA06L.jpg",
    category: "history"
  },
  {
    id: 21,
    name: "You",
    Originalprice: 369,
    price: 499,
    quantity: 0,
    wishList: "no",
    stockStatus: "InStock",
    fastDelivery: "yes",
    src: "https://m.media-amazon.com/images/I/5196gJhgX-L.jpg",
    category: "history"
  },
  {
    id: 17,
    name: "You",
    Originalprice: 369,
    price: 499,
    quantity: 0,
    wishList: "no",
    stockStatus: "InStock",
    fastDelivery: "yes",
    src: "https://m.media-amazon.com/images/I/5196gJhgX-L.jpg",
    category: "history"
  },
  {
    id: 17,
    name: "You",
    Originalprice: 369,
    price: 499,
    quantity: 0,
    wishList: "no",
    stockStatus: "InStock",
    fastDelivery: "yes",
    src: "https://m.media-amazon.com/images/I/5196gJhgX-L.jpg",
    category: "history"
  },
  {
    id: 17,
    name: "You",
    Originalprice: 369,
    price: 499,
    quantity: 0,
    wishList: "no",
    stockStatus: "InStock",
    fastDelivery: "yes",
    src: "https://m.media-amazon.com/images/I/5196gJhgX-L.jpg",
    category: "history"
  }
];
function productReducer(state, action) {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        itemsInProduct: state.itemsInProduct.map((item) => {
          switch (item.id) {
            case action.obj.id:
              return {
                ...item,
                quantity: item.quantity + 1
              };
            default:
              return { ...item };
          }
        })
      };
    case "decrement":
      return {
        ...state,
        itemsInProduct: state.itemsInProduct.map((item) => {
          switch (item.id) {
            case action.obj.id:
              switch (item.quantity) {
                case 0:
                  return {
                    ...item
                  };
                default:
                  return { ...item, quantity: item.quantity - 1 };
              }

            default:
              return { ...item };
          }
        })
      };
    case "removeFromCart":
      return {
        ...state,
        itemsInProduct: state.itemsInProduct.map((item) => {
          switch (item.id) {
            case action.obj.id:
              return {
                ...item,
                quantity: 0
              };
            default:
              return { ...item };
          }
        })
      };
    case "addToWishList":
      return {
        ...state,
        itemsInProduct: state.itemsInProduct.map((item) => {
          switch (item.id) {
            case action.obj.id:
              return {
                ...item,
                wishList: "yes"
              };
            default:
              return { ...item };
          }
        })
      };
    case "removeFromWishList":
      return {
        ...state,
        itemsInProduct: state.itemsInProduct.map((item) => {
          switch (item.id) {
            case action.obj.id:
              return {
                ...item,
                wishList: "no"
              };
            default:
              return { ...item };
          }
        })
      };
    default:
      return state;
  }
}
