const priceInput = document.querySelector("#price-input");
const discountInput = document.querySelector("#discount-input");
const resultPrinter = document.querySelector("#result-printer");

function calculateDiscountWithPrice(price, discount) {
  console.log(price, discount);
  const discountPercentage = 100 - discount;
  const priceDiscount = (price * discountPercentage) / 100;

  return {
    discountPercentage,
    priceDiscount,
  };
}

function handleClickCalculate() {
  const { discountPercentage, priceDiscount } = calculateDiscountWithPrice(
    priceInput.value,
    discountInput.value
  );

  resultPrinter.innerHTML = `
  <strong>Final Price: </strong>  ${priceDiscount} |
  <strong>Original Price: </strong>  ${priceInput.value} |
  <strong>Discount: </strong>  ${discountInput.value} |
  <strong>Discount Percentage: </strong>  ${discountPercentage} % |
  `;

  priceInput.setAttribute("value", null);
  discountInput.setAttribute("value", null);
}
