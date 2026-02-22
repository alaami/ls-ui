import type { Meta, StoryObj } from '@storybook/react';
//import { fn } from '@storybook/test';
import { Button } from '@/components';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
import { Mail, User, Settings, Home, Search, Loader2, HelpCircle, LogOut} from 'lucide-react-native';
const icons:{[key: string]: Object}= {
  'Mail': Mail,
  'User': User,
  'Settings': Settings,
  'Home': Home,
  'Search': Search,
  'Loader2': Loader2,
  'HelpCircle': HelpCircle,
  'LogOut': LogOut
};

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    disabled: { control: 'boolean' },
    iconLeft: { control: 'select', options: Object.keys(icons) },
    iconRight: { control: 'select', options: Object.keys(icons) },
    //  onClick: {table: {disable: true}},
    className: { table: { disable: true } },
    loading: { table: { disable: true } },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
  args: { children: 'Hello world!', disabled: false, variant: 'default', icons: icons },
  //onClick: fn(),
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    variant: 'default',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};
export const Outline: Story = {
  args: {
    variant: 'outline',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
  },
};

export const Icon: Story = {
  args: {
    children: undefined,
    iconLeft: User,
  },
};


export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
  },
};