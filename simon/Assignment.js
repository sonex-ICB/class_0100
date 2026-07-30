//1





 //2
 const products = [
  { id: 1, name: "Wireless Mouse", amt: 15000, qty: 10, store_name: "TechHub" },
  { id: 2, name: "Mechanical Keyboard", amt: 45000, qty: 5, store_name: "TechHub" },
  { id: 3, name: "USB-C Cable", amt: 5000, qty: 50, store_name: "GadgetCentral" },
  { id: 4, name: "Gaming Headset", amt: 60000, qty: 3, store_name: "MegaStore" },
  { id: 5, name: "Laptop Stand", amt: 22000, qty: 12, store_name: "MegaStore" }
];



//3
function checkVotingStatus(age) {
  // Returns "canvote" if age is above 18, otherwise "cannot vote"
  return age > 18 ? "canvote" : "cannot vote";
}
console.log(checkVotingStatus(20)); // Outputs: canvote
console.log(checkVotingStatus(16)); // Outputs: cannot vote

