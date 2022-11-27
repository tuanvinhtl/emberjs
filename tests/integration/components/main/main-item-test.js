import { module, test } from 'qunit';
import { setupRenderingTest } from 'tailwindcss-demo/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | main/main-item', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Main::MainItem />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <Main::MainItem>
        template block text
      </Main::MainItem>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
