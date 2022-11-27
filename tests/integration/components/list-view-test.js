import { module, test } from 'qunit';
import { setupRenderingTest } from 'tailwindcss-demo/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | list-view', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<ListView />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <ListView>
        template block text
      </ListView>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
