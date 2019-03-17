import { helper } from '@ember/component/helper';

export function calculateParams({pizza, products, param}) {
  let categories = ['size', 'stuffing', 'topping'];
  let result = 0;
  categories.forEach(cat=>{
    pizza[cat].split(', ').forEach(calculationProduct=>{
      result += products[cat].find(product=>(product.name === calculationProduct))[param];
    });
  })
  return result;
}

export default helper(calculateParams);
