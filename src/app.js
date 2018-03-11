import score from './js/score';
import rules from './js/rules';
import checkbox from './js/checkbox';
import errors from './js/errors';
import './scss/variables.scss';
import './scss/mixins.scss';
import './scss/components/players.scss';
import './scss/base.scss';

// imports all images
function requireAll(image) { image.keys().forEach(image); }
requireAll(require.context('./img/', true));

console.log('The Wolf is coming!');

if (module.hot) {
  module.hot.accept();
}