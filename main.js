// VOORRAAD ARRAY MET TV'S
const inventory = [
  {
    type: '43PUS6504/12',
    name: '4K TV',
    brand: 'Philips',
    price: 379,
    availableSizes: [43, 50, 58, 65],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 23,
    sold: 2,
  },
  {
    type: 'NH3216SMART',
    name: 'HD smart TV',
    brand: 'Nikkei',
    price: 159,
    availableSizes: [32],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'HD ready',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 4,
    sold: 4,
  },
  {
    type: 'QE55Q60T',
    name: '4K QLED TV',
    brand: 'Samsung',
    price: 709,
    availableSizes: [43, 50, 55, 58, 65],
    refreshRate: 60,
    screenType: 'QLED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 7,
    sold: 0,
  },
  {
    type: '43HAK6152',
    name: 'Ultra HD SMART TV',
    brand: 'Hitachi',
    price: 349,
    availableSizes: [43, 50, 55, 58],
    refreshRate: 60,
    screenType: 'LCD',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 5,
    sold: 5,
  },
  {
    type: '50PUS7304/12',
    name: 'The One 4K TV',
    brand: 'Philips',
    price: 479,
    availableSizes: [43, 50, 55, 58, 65, 70],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: true,
    },
    originalStock: 8,
    sold: 3,
  },
  {
    type: '55PUS7805',
    name: '4K LED TV',
    brand: 'Philips',
    price: 689,
    availableSizes: [55],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: true,
    },
    originalStock: 6,
    sold: 3,
  },
  {
    type: 'B2450HD',
    name: 'LED TV',
    brand: 'Brandt',
    price: 109,
    availableSizes: [24],
    refreshRate: 60,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
  {
    type: '32WL1A63DG',
    name: 'HD TV',
    brand: 'Toshiba',
    price: 161,
    availableSizes: [32],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
];

/* Opdracht 1a */
function countInventoryToSell(televisions){
  let count = 0;
  for(const television of televisions){
      const televisionsToSellLeft = television.originalStock-television.sold;
      count = count + televisionsToSellLeft;
  }

  let soldWrapper = document.createElement("span");
  let sold = document.createTextNode(count.toString());
  soldWrapper.appendChild(sold);
  document.getElementById("to-sell").appendChild(soldWrapper);

  /* Opdracht 1b */
  document.getElementById("to-sell").style.backgroundColor="red";

}
countInventoryToSell(inventory);

/* Opdracht 2 */

/* 2a */
const tvTypes = inventory.map((television) => {
    return television.type;
});

/* 2b */
const televisionsSoldOut = inventory.filter((soldTelevision) =>{
  return soldTelevision.originalStock === soldTelevision.sold;
});

/* 2c */
const televisionsHasAmbilight = inventory.filter((ambilightTelevision) =>{
  return ambilightTelevision.options.ambiLight;
});

/* 2d */
const sortedTelevisions = inventory.sort((televisionA, televisionB) => {
  return televisionA.price - televisionB.price;
});

/* Opdracht 3 */

/* 3a */
function revenueTarget(televisions){
  let amount = 0;
  for(const television of televisions) {
      amount = amount + television.originalStock*television.price;
  }

  let targetRevenueWrapper = document.createElement("span");
  let targetRevenue = document.createTextNode(amount.toString());
  targetRevenueWrapper.appendChild(targetRevenue);
  document.getElementById("revenue_t").appendChild(targetRevenueWrapper);
  document.getElementById("revenue_t").style.backgroundColor="blue";
}

revenueTarget(inventory);

/* 3b */
function salesSoFar(televisions) {
  let sales = 0;

  for (const television of televisions) {
    sales = sales + (television.price*television.sold);
  }

  let salesWrapper = document.createElement("span");
  let salesAmount = document.createTextNode(sales.toString());
  salesWrapper.appendChild(salesAmount);
  document.getElementById("revenue").appendChild(salesWrapper);
  document.getElementById("revenue").style.backgroundColor="green";
}

salesSoFar(inventory);

/* Opdracht 4 */
function showTvTypes(tvTypes, limit){

    for(let i=0; i<limit; i++){
        let linebreak = document.createElement("br");
        let output = document.createTextNode(tvTypes[i]);
        document.getElementById("output-tv-types").appendChild(output);
        document.getElementById("output-tv-types").appendChild(linebreak);
    }
}

//const twoTelevisionTypes = showTvTypes(tvTypes, 2);

/* Opdracht 5 */

/* 5a */
function showTelevisionDetails(televisionDetails){
    return televisionDetails.brand + televisionDetails.type + " - " + televisionDetails.name + "\r\n";
}

//showTelevisionDetails();

/* 5b */
function formatPrice(value){
  return "€" + value + ",-";
}

/* 5c */
function formatScreenSize(television){
    let output="";

      for(const screenSize of television){
          output += screenSize + " inch (" + Math.ceil(screenSize*2.54) + " cm)";
          if(television.length>1 && (television.length -1 !== television.indexOf(screenSize))) output += " | ";
      }
    return output;
}

/* 5d */
function wrapLayout(television){
    const wrapTelevisionLayout = document.createElement("div");
    wrapTelevisionLayout.setAttribute("Id", "wrapTvLayout");
    wrapTelevisionLayout.textContent = showTelevisionDetails(television) +
        formatPrice(television.price) + "\r\n" +
        formatScreenSize(television.availableSizes);
    document.getElementById("output-tv-types").appendChild(wrapTelevisionLayout);
}

//wrapLayout(inventory[0]);

/* 5e */
function displayTelevisions(televisions){
    for(const television of televisions){
        wrapLayout(television);
    }
}

displayTelevisions(inventory);