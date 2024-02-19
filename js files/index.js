function next() {
  const homeSection = document.getElementById("home-screen");
  homeSection.classList.add("hidden");

  const succeseSection = document.getElementById("success-popup");
  succeseSection.classList.remove("hidden");
}

function seatClick() {
  const onSeat = document.getElementById("class-add");
  onSeat.classList.remove("hidden");
}

function priceAdd() {
  const addPrices = document.getElementById("price-add");
  addPrices.classList.remove("hidden");
}

function discountshow() {
  const showDiscount = document.getElementById("discount-prices");
  showDiscount.classList.remove("hidden");
}

//all seat

const allSeat = document.getElementsByClassName("seat");
let count = 0;

for (const seat of allSeat) {
  seat.addEventListener("click", function (e) {
    count = count + 1;
    document.getElementById("seat-book").innerText = count;
  });
}

// all seat end

const seats = document.querySelectorAll(".seat");
// console.log(seats);
let perTickt = 550;
let totalMoneyCount = 0;

for (let i = 0; i < seats.length; i++) {
  const seat = seats[i];
  //   console.log("seat");

  seat.addEventListener("click", function () {
    // console.log("cilied");
    seat.classList.add("bg-green-600");

    // const currantSeat = document.getElementById("seat-book");
    // const currantSeatBook = currantSeat.innerText;
    // const bookSeat = currantSeatBook;

    // const bookingSeat = bookSeat + 1;

    // currantSeat.innerText = bookingSeat;

    const seatnumber = seat.querySelector("h2").innerText;
    // console.log(seatnumber.innerText);

    const ticketPrice = perTickt;
    // console.log(ticketPrice, seatnumber);

    const addSeat = document.getElementById("adding-set");
    // console.log(addSeat);

    const p = document.createElement("p");
    p.innerText = seatnumber;

    addSeat.appendChild(p);

    totalMoneyCount += ticketPrice;
    document.getElementById("totalPrice").innerText = totalMoneyCount;
  });
}

const applyBtn = document.getElementById("appli-discount");

applyBtn.addEventListener("click", function () {
  //   console.log("clicked");

  const couponCode = document.getElementById("input-filed").value;

  if (totalMoneyCount >= 2200) {
    if (couponCode === "NEW15") {
      const discountElement = document.getElementById("couponn-15");
      const discountAmout = totalMoneyCount * 0.15;
      discountElement.innerText = discountAmout;

      const grandTotal = document.getElementById("grand-total");
      grandTotal.innerText = totalMoneyCount - discountAmout;
      document.getElementById("input-filed").value = "";
    } else if (couponCode === "Couple 20") {
      const discountElement = document.getElementById("couponn-15");
      const discountAmout = totalMoneyCount * 0.2;
      discountElement.innerText = discountAmout;

      const grandTotal = document.getElementById("grand-total");
      grandTotal.innerText = totalMoneyCount - discountAmout;
      document.getElementById("input-filed").value = "";
    } else {
      alert("Invalied Cuopn");
    }
  } else {
    alert("Coupon code applies to 4 ticket purchases");
  }
});

// function addBackgroundColorAdd() {
//   const element = document.getElementById("elementId");
//   element.classList.add("bg-green-600");
// }
