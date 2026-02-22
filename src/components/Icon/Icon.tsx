import clsx from "clsx";
import { ReactSVG, type Props } from "react-svg";
import { path, type IconName } from './paths';
import { cva, type VariantProps } from "class-variance-authority";

const iconVariants = cva('flex-shrink-0 [&>div]:leading-[0]', {
  variants:{
    size : {
      sm: 'size-4',
      md: 'size-[18px]',
      lg: 'size-[20px]',
      xl: 'size-6',
      '2xl': 'size-8',
    }
  }
});

interface IconProps extends Omit<Props, 'src' | 'ref'>, VariantProps<typeof iconVariants> {
  readonly name: IconName;
};

export function Icon({ size, name, className, ...props }: IconProps) {
  return (
    <ReactSVG
      data-component="Icon"
      src={path[name]}
      className={className}
      wrapper="div"
      fill="true"
      {...props}
    />
  );
}
