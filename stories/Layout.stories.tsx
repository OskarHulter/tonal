import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Layout from '../modules/Layout/Layout'

export default {
  title: 'Layout',
  component: Layout,
} as Meta

export const Template: Story = () =>
  <Layout pageTitle='Page title' description='desc.' />
