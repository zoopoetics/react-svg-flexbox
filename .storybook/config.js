import {configure} from '@storybook/react';

function loadStories() {
  require('../src/index.story');
}

configure(loadStories, module);
