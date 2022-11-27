import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class MapController extends Controller {
  @tracked lat = '51.508530';
  @tracked lng = '-0.076132';

  get vessels() {
    return this.model;
  }
}
