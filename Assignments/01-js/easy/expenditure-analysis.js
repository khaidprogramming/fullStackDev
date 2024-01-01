/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let obj = [];
  for (let i = 0; i < transactions.length; i++) {
    const searchCategory = obj.find(item => item.category == transactions[i].category);
    console.log(searchCategory);
    if (searchCategory) {
      searchCategory.totalSpent += transactions[i].price;
    } else {
      obj.push({ category: transactions[i].category, totalSpent: transactions[i].price })
    }
  }
  return obj;
}
// const transactions = [
//   {
//       id: 1,
//       timestamp: 1656076800000,
//       price: 10,
//       category: 'Food',
//       itemName: 'Pizza',
//   },
//   {
//     id: 1,
//     timestamp: 1656076800000,
//     price: 10,
//     category: 'Food',
//     itemName: 'Pizza',
// },
//   {
//       id: 2,
//       timestamp: 1656080400000,
//       price: 20,
//       category: 'Clothing',
//       itemName: 'T-shirt',
//   },
//   // Add more transactions as needed
// ];
// const result = calculateTotalSpentByCategory(transactions)
// console.log(result);
module.exports = calculateTotalSpentByCategory;