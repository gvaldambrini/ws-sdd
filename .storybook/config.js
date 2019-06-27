import { configure } from '@storybook/react';
import requireContext from 'require-context.macro';
import { withA11y } from '@storybook/addon-a11y';
import { addDecorator, addParameters } from '@storybook/react';

addDecorator(withA11y);

addParameters({
  backgrounds: [
    { name: 'transparent', value: 'transparent', default: true },
    { name: 'twitter', value: '#00aced'},
    { name: 'facebook', value: '#3b5998' },
  ],
});

const req = requireContext('../src/components', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);