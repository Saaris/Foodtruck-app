import { apiKey, url, tenantId } from "./constants.js";
import { showCart, getCart, totalPrice } from "./cart.js";
import {
  showCartScreen,
  showMenu,
  showRecieveOrder,
} from "./hide-show-functions.js";
import { resetCount } from "./order-in-cart.js";


const orderButton = document.getElementById("order-button");

 //eventlyssnare till cart vyn
orderButton.addEventListener("click", () => {
  showCart();
  showCartScreen();
});


export let latestId
// export function getLatestId () {
//   return latestId
// }
//POST request för att skicka order till API
const startOrder = async () => {
  console.log("startOrder");

  const cart = getCart()  // lista med menu items (object)
  // skapa lista med bara id:n
  const cartIds = cart.map(item => item.id)
  const bodyToSend = {
    items: cartIds
  };
  try {
    const response = await fetch(`${url}/${tenantId}/orders`, {
      method: "POST",
      headers: {
        "x-zocom": apiKey,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyToSend),
    });
    if (response.ok) {
      const latestOrder = await response.json();
      console.log("senaste ordern", latestOrder);

      latestId = latestOrder.order.id


      //display order id
      const receiptSections = document.querySelectorAll(".order-id");
      receiptSections.forEach((section) => {
        section.innerText = `#${latestOrder.order.id}`;

        //tid före och efter, avrundas i minuter

        const orderTimestamp = new Date(latestOrder.order.timestamp);
        const orderEta = new Date(latestOrder.order.eta);

        const timeDifference = orderEta - orderTimestamp;
        const timeDifferenceInMinutes = Math.floor(timeDifference / 1000 / 60);

        const showOrderTime = document.querySelectorAll(".order-time");
        showOrderTime.forEach((section) => {
          section.innerText = `${timeDifferenceInMinutes} minuter`;
        });
      });

      console.log("beställning skickad:", bodyToSend);
    //return latestOrderId
      //returnera senste ordern

    } else {
      console.log("fel vid beställning:", response.status);
    }
  } catch (error) {
    console.log("fel:", error);
  }
};
  //eventlyssnare till ovanstående func startOrder
const payButton = document.querySelector(".pay-button");

payButton.addEventListener("click", () => {
  const cart = getCart()
  startOrder();
  showRecieveOrder();
  recieveOrder();
});

const recieveOrder = async () => {
  let response = await fetch(`${url}/${tenantId}/orders`, {
    headers: {
      Accept: "application/json",
      "x-zocom": apiKey,
    },
  });

  let data = await response.json();
  console.log(data);
};
let cart = [];
const backToMenu = document.getElementById("cart-button");
backToMenu.addEventListener("click", () => {
  cart.length = 0;
  showCart();
  showMenu();

  console.log("tillbaka till meny");
});

const firstNewOrder = document.getElementById("first-neworder-button");
firstNewOrder.addEventListener("click", () => {
  cart.length = 0;
  showCart();
  showMenu();
  resetCount();
});

const secondNewOrder = document.getElementById("second-neworder-button");
secondNewOrder.addEventListener("click", () => {
  cart.length = 0;
  showCart();
  showMenu();
  resetCount();
});
