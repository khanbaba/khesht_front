import { CSSProperties, ComponentType, HTMLAttributes, MouseEventHandler, forwardRef } from 'react';
import { IconProps } from './types';

export type IconWrapperProps<P extends IconProps> = {
  id?: string;
  style?: CSSProperties;
  size?: number | string;
  color?: string;
  className?: string;
  onClick?: MouseEventHandler;
  containerProps?: Omit<HTMLAttributes<HTMLDivElement>, 'style' | 'onClick' | 'className' | 'id'> & {
    [key: `data-${string}`]: unknown;
  };
} & P;

export const IconWrapper = <P extends IconProps>(Icon: ComponentType<P>) =>
  forwardRef<HTMLDivElement, IconWrapperProps<P>>((props, ref) => {
    const { id, className = '', onClick, color, style, containerProps } = props;

    return (
      <div
        id={id}
        ref={ref}
        onClick={onClick}
        style={{ display: 'inline-flex', ...(color && { color }), ...style }}
        className={className}
        {...containerProps}
      >
        {/* @ts-ignore */}
        <Icon {...props} />
      </div>
    );
  });
