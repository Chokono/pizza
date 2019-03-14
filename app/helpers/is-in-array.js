import { helper } from '@ember/component/helper';

export function isInArray(params) {
  return params[0].indexOf(params[1]) > -1;
}

export default helper(isInArray);
