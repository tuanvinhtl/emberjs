import { module, test } from 'qunit';
import { setupTest } from 'tailwindcss-demo/tests/helpers';

module('Unit | Service | vessels', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:vessels');
    assert.ok(service);
  });
});
