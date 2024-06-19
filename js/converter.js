let basic = document.getElementById("basic");
let professional = document.getElementById("professional");
let premium = document.getElementById("premium");

const selectors = document.getElementById("units").children;

const basicOrginal = 0;
const professionalOriginal = 25;
const premiumOriginal = 60;

const jsonUrl =
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json";

async function changeCoin(money) {
  try {
    const response = await fetch(jsonUrl);
    const coins = await response.json();
    let change;

    switch (money) {
      case "EUR":
        change = coins.usd.eur;
        basic.childNodes.item(0).data = `€${parseInt(basicOrginal * change)}`;
        professional.childNodes.item(0).data =
          `€${parseInt(professionalOriginal * change)}`;
        premium.childNodes.item(0).data =
          `€${parseInt(premiumOriginal * change)}`;
        break;
      case "USD":
        change = coins.usd.usd;
        basic.childNodes.item(0).data = `$${parseInt(basicOrginal * change)}`;
        professional.childNodes.item(0).data =
          `$${parseInt(professionalOriginal * change)}`;
        premium.childNodes.item(0).data =
          `$${parseInt(premiumOriginal * change)}`;
        break;
      case "GBP":
        change = coins.usd.gbp;
        basic.childNodes.item(0).data = `£${parseInt(basicOrginal * change)}`;
        professional.childNodes.item(0).data =
          `£${parseInt(professionalOriginal * change)}`;
        premium.childNodes.item(0).data =
          `£${parseInt(premiumOriginal * change)}`;
        break;
    }
  } catch (a) {
    console.log(a);
  }
}

for (let i = 0; i < selectors.length; i++) {
  selectors.item(i).addEventListener("click", function () {
    changeCoin(selectors.item(i).textContent);
  });
}
