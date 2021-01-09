import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Button } from '@chakra-ui/react'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story = args => <Button {...args} />

export const Success = Template.bind({})
Success.args = {
  variantColor: 'green',
}

export const Danger = Template.bind({})
Danger.args = {
  variantColor: 'red',
}