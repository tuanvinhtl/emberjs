import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class MapComponent extends Component {
  @service('map') map;
}
