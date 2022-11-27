import Route from '@ember/routing/route';

export default class MapRoute extends Route {
  async model() {
    const response = await fetch('/api/vessels.json');
    const { data } = await response.json();
    console.log(data);
    return data;
  }
}
