import Component from '@glimmer/component';

export default class ListViewItemComponent extends Component {
  get vessel() {
    return this.args.vessel;
  }
  get lat() {
    return this.args.vessel.position.coordinates[1];
  }
  get lng() {
    return this.args.vessel.position.coordinates[0];
  }
}
