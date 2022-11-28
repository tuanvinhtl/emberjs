import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class ViewDetailsComponent extends Component {
  @service('map') map;

  get modal() {
    return this.map.selectItem;
  }
  get lng() {
    return this.modal?.position.coordinates[0];
  }
  get lat() {
    return this.modal?.position.coordinates[1];
  }
}
