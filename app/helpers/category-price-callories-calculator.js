import { helper } from '@ember/component/helper';

export function categoryPriceCalloriesCalculator(params) {
  if (params[0][params[1]] || params[0][params[1]] === 0) {
    return params[0][params[1]];
  } else {
    let min = params[0].items[0][params[1]];
    let max = min;
    params[0].items.forEach(el=>{
      if (el[params[1]] < min) {
        min = el[params[1]];
      }
      if (el[params[1]] > max) {
        max = el[params[1]];
      }
    })
    return `${min} - ${max}`;
  }
}

export default helper(categoryPriceCalloriesCalculator);
