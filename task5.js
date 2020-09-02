function getAllPropValues (array, prop) {
    'use strict';
    let result = [];
    for (const value of array) {
        if (value[prop] !== undefined) {
            result.push(value[prop]);
        }
    } 
 return result
  }

  const products = [
      { name: 'Радар', price: 1300, quantity: 4 },
      { name: 'Радар', price: 1280, quantity: 2 },
      { name: 'Радар', price: 1320, quantity: 1 },
      { name: 'Сканер', price: 2700, quantity: 1 },
      { name: 'Сканер', price: 2500, quantity: 3 },
      { name: 'Дроид', price: 400, quantity: 7 },
      { name: 'Захват', price: 1200, quantity: 2 },
  ]; 
  
  console.log(getAllPropValues(products, 'name'));
  console.log(getAllPropValues(products, 'quantity'));
  console.log(getAllPropValues(products, 'category'));
  