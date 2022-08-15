// stories/MyButton.stories.tsx
import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {default as TargetComponent} from './index';

export default {
  title: 'components/StarwarsComponent',
  component: TargetComponent,
} as ComponentMeta<typeof TargetComponent>;

export const CharacterCard: ComponentStory<typeof TargetComponent> = args => (
  <CharacterCard {...args} />
);

CharacterCard.args = {
  name: 'Luke Skywalker',
  gender: 'Non-binary',
};
