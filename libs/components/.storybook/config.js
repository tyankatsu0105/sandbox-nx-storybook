import { configure, addDecorator, addParameters } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { DocsPage } from '@storybook/addon-docs/blocks';

addDecorator(withKnobs);

configure(require.context('../src/lib', true, /\.stories\.(tsx?|mdx)$/), module);

addParameters({
  docs: DocsPage
});

