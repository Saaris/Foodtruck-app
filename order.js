import { apiKey, url, tenantId } from "./constants.js";
import { showCart, cart, totalPrice } from "./cart.js";
import {
  showCartScreen,
  showMenu,
  showRecieveOrder,
} from "./hide-show-functions.js";
import { resetCount } from "./order-in-cart.js";


const orderButton = document.getElementById("order-button");

 //eventlyssnare till cart vyn
orderButton.addEventListener("click", () => {
  console.log("showCart-screen körs");
  showCart();
  showCartScreen();
});
//POST request för att skicka order till API
const startOrder = async () => {
  console.log("startOrder");

  const bodyToSend = {
    items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
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
      console.log("id senaste ordern", latestOrder);

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
      cart.length = 0;
    return latestOrderId  //returnera senste ordern

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
  startOrder();
  showRecieveOrder();
  
  console.log("Ordern har startat!");
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

  console.log("tillbaka till meny från recieve-order vyn");
});

const secondNewOrder = document.getElementById("second-neworder-button");
secondNewOrder.addEventListener("click", () => {
  cart.length = 0;
  showCart();
  showMenu();
  resetCount();

  console.log("tillbaka till meny från kvittovyn");
});
