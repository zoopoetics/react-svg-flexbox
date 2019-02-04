import {configure} from '@storybook/react';

function loadStories() {
  require('../src/components/flexbox/index.story');
}

configure(loadStories, module);
