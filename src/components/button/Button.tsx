import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { TouchableOpacity } from 'react-native'
import { cn } from '@/lib/utils';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

// Define the button variants using cva
const buttonVariants = cva(
  "flex items-center justify-center rounded-full px-5 py-3 font-display text-lg font-bold", // Base styles
  {
    variants: {
      hasChildren: {
        false: 'p-3'
      },
      tone: {
        primary: "bg-blue-500 text-white active:bg-blue-600 disabled:bg-neutral-300",
        secondary: "border border-blue-500 text-blue-500 active:border-blue-600 active:text-blue-600 disabled:border-neutral-500 disabled:text-neutral-500",
        danger: "bg-red-500 text-white active:bg-red-600",
      },
      size: {
        small: "px-3 py-1 text-sm",
        medium: "px-4 py-2 text-base",
        large: "px-6 py-3 text-lg",
      },
      inverted: { true: 'bg-blue-50', false: '' },
      loading: { true: 'opacity-50', false: '' }
    },
    defaultVariants: {
      tone: "primary",
      size: "medium",
    },
  }
);

// Define the prop types for type safety
interface ButtonProps
  extends React.ComponentPropsWithoutRef<typeof TouchableOpacity>,
  VariantProps<typeof buttonVariants> {
  readonly loading?: boolean;
  readonly className?: string;
  readonly children?: React.ReactNode;
  readonly iconLeft?: any;
  readonly disabled?: boolean;
  readonly asChild?: boolean;
  readonly iconRight?: string;
}

export const Button = ({
  className, tone, size, children, asChild, iconLeft, iconRight, loading, disabled, ...props }: ButtonProps) => {
  const hasChildren = children != undefined;
  const classString = cn(buttonVariants({ tone, size, hasChildren, loading }), className);
  
  return (
    <Card>
    <TouchableOpacity
      className={classString}
      disabled={disabled || loading}
      {...props}
    >
      {children}
    </TouchableOpacity>
    </Card>
  )
};