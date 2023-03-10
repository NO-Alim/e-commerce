export const totalPriceCalculate = (arr) => {
  let total = 0;
  if (arr?.length > 0) {
    total = arr
      .map(
        (item) =>
          (item.price - (item.price * Number(item.offerPercentage)) / 100) *
          item.quantity
      )
      .reduce((prev, next) => prev + next)
      .toFixed(2);
  }
  return Number(total);
};
