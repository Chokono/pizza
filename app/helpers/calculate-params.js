import { helper } from '@ember/component/helper';

export function calculateParams({pizza, products}) {
  let categories = ['size', 'stuffing', 'topping'];
  let price = 0;
  let calories = 0;
  categories.forEach(cat=>{
    pizza[cat].split(', ').forEach(calculationProduct=>{
      if(calculationProduct) {
        price += products[cat].find(product=>(product.name === calculationProduct)).price;
        calories += products[cat].find(product=>(product.name === calculationProduct)).calories;
      }
    });
  });
  pizza.set('price', price);
  pizza.set('calories', calories);
}

export default helper(calculateParams);
