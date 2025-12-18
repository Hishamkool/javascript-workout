const displayTransactions = function (movements) {
  containerMovements.innerHTML = "";
  movements.forEach(function (move, i) {
    const type = move > 0 ? "deposit" : "withdrawal";
    const iterateTransaction = `<div class="movements__row">
      <div class="movements__type movements__type--${type}">${i} ${type}</div>
      <div class="movements__value">${move}</div>
    </div>
    `;
    containerMovements.insertAdjacentHTML("afterbegin", iterateTransaction);
  });
};
displayTransactions(account1.movements);

console.log(
  `\n------------insert adjacent element vs insert adjacent html------------`
);
