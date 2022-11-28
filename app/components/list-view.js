import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class ListViewComponent extends Component {
  @service('map') map;
  @tracked selected = '';

  get vessels() {
    return this.args.vessels;
  }
  @action
  onVessel(item) {
    this.selected = item.name;
    this.map.locationSet(
      item.position.coordinates[1],
      item.position.coordinates[0]
    );
    this.map.selectItemSet(item);
  }

  compare(item, selected) {
    if (selected === item.name) {
      return true;
    }
    return false;
  }
}
