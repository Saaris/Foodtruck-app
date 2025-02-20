import { apiKey, url, tenantId } from "./constants.js";
import { showCart, getCart, resetCart } from "./cart.js";
import {
  showCartScreen,
  showMenu,
  showRecieveOrder,
} from "./hide-show-functions.js";

const orderButton = document.getElementById("order-button");

 //eventlyssnare till cart vyn
orderButton.addEventListener("click", () => {
  showCart();
  showCartScreen();
});

export let latestId

//POST request för att skicka order till API
const startOrder = async () => {

  const cart = getCart()  // lista med menu items (object)
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
//GET order request
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
  showCart();
  showMenu();

  console.log("tillbaka till meny");
});

const firstNewOrder = document.getElementById("first-neworder-button");
firstNewOrder.addEventListener("click", () => {
  resetCart();
  showCart();
  showMenu();
  
});

const secondNewOrder = document.getElementById("second-neworder-button");
secondNewOrder.addEventListener("click", () => {
  resetCart();
  showCart();
  showMenu();
  
});
