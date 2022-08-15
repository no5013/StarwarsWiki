// stories/MyButton.stories.tsx
import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {MyButton3} from './Button3';

export default {
  title: 'components/MyButton',
  component: MyButton3,
} as ComponentMeta<typeof MyButton3>;

export const Basic3: ComponentStory<typeof MyButton3> = args => (
  <MyButton3 {...args} />
);

Basic3.args = {
  text: 'Hello World223',
  color: 'purple',
};
