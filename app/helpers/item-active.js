import { helper } from '@ember/component/helper';

function itemActive(selected, row) {
  return selected === row;
}
export default helper(itemActive);
