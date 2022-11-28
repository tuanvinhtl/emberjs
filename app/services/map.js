import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class MapService extends Service {
  @tracked lat = '51.508530';
  @tracked lng = '-0.076132';
  @tracked selectItem = null;

  locationSet(lat, lng) {
    this.lat = lat;
    this.lng = lng;
  }
  selectItemSet(item) {
    this.selectItem = item;
  }
}
