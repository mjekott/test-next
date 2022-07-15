import clsx from 'clsx';
import React, { forwardRef } from 'react';

type ButtonOwnProps<E extends React.ElementType = React.ElementType> = {
  loading?: boolean;
  spinnerColor?: string;
  variant?: 'solid' | 'outline' | 'custom' | 'text';
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  block?: boolean;
  as?: E;
};

type Props<E extends React.ElementType> = ButtonOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof ButtonOwnProps>;

export type PolymorphicRef<E extends React.ElementType> =
  React.ComponentPropsWithRef<E>['ref'];

const allButtons = ` flex cursor-pointer items-center justify-center gap-1 relative disabled:cursor-not-allowed
  focus:outline-none focus-visible:ring-2
  transition-colors duration-150 ease-in-out
  rounded-lg`;

const allVariants = `text-white min-w-140
  py-3 px-9 truncate leading-6 `;

const variants = {
  solid: `bg-brand-800 hover:bg-brand-900 disabled:bg-brand-800/60 disabled:text-white ${allButtons} ${allVariants}`,
  outline: `border-brand-800 border hover:border-brand-900 hover:text-brand-900 disabled:text-brand-800/60 text-brand-800 ${allButtons} ${allVariants}`,
  text: `hover:text-brand-900 disabled:text-brand-800/60 text-brand-800 ${allButtons} ${allVariants}`,
  custom: null // custom has only default classes
};

const sizes = {
  md: 'scale-1',
  sm: 'scale-75',
  lg: 'scale-1.25'
};

const defaultElement = 'button';

const Button: <E extends React.ElementType = typeof defaultElement>(
  // eslint-disable-next-line no-unused-vars
  props: Props<E>
) => React.ReactElement | null = forwardRef(
  <E extends React.ElementType = typeof defaultElement>(
    props: Props<E>,
    ref: PolymorphicRef<E>
  ) => {
    const {
      children,
      size = 'md',
      variant = 'solid',
      className,
      loading,
      block = false,
      as,
      ...rest
    } = props;
    const Component = as ?? defaultElement;
    return (
      <Component
        ref={ref}
        className={clsx(
          variants[variant],
          sizes[size],
          `${block ? 'w-full' : ''}`,
          className
        )}
        {...rest}
      >
        {loading ? (
          <svg
            role="status"
            className={clsx(
              'mr-2 h-6 w-6 animate-spin fill-white  text-gray-200'
            )}
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        ) : (
          children
        )}
      </Component>
    );
  }
);

export default Button;
