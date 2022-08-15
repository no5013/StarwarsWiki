// stories/MyButton.stories.tsx
import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {MyButton2} from './Button2';

export default {
  title: 'components/MyButton',
  component: MyButton2,
} as ComponentMeta<typeof MyButton2>;

export const Basic2: ComponentStory<typeof MyButton2> = args => (
  <MyButton2 {...args} />
);

Basic2.args = {
  text: 'Hello World22',
  color: 'purple',
};
