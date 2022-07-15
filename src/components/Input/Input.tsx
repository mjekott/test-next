import clsx from 'clsx';
import {
  FocusEvent,
  forwardRef,
  InputHTMLAttributes,
  Ref,
  useState
} from 'react';
import { overrideTailwindClasses } from 'tailwind-override';
interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  StartIcon?: any;
  EndIcon?: any;
}

const defaultStyles =
  'w-full text-sm border px-5 rounded-lg shadow-sm py-4 outline-none focus:ring-brand-800 focus:ring  border-gray-300 appearance-none ';
const errorStyles =
  'text-red-500 border-red-500 bg-red-100 placeholder:text-red-500';
const activeStyle =
  'border-brand-900 bg-white placeholder:text-gray-400 text-gray-800';
const startIconStye = 'pl-12';
const endIconStyle = 'pr-12';

const Input = forwardRef(
  (
    {
      label,
      error,
      name,
      type = 'text',
      StartIcon,
      EndIcon,
      onBlur,
      onFocus,
      ...props
    }: Props,
    ref: Ref<HTMLInputElement>
  ) => {
    const [isActive, setIsActive] = useState(false);

    const handleBlur = (e: FocusEvent<HTMLInputElement, Element>) => {
      setIsActive(false);
      if (onBlur) {
        onBlur(e);
      }
    };

    const hanldleFocus = (e: FocusEvent<HTMLInputElement, Element>) => {
      setIsActive(true);
      if (onFocus) {
        onFocus(e);
      }
    };

    return (
      <div className="grid gap-1">
        <div>
          <label htmlFor={name} className="sr-only">
            {label}
          </label>

          <div className="relative">
            {StartIcon && (
              <span className="absolute inset-y-0 left-4 inline-flex items-center">
                {
                  <StartIcon
                    className={clsx(
                      `${isActive && 'text-brand-900'}`,
                      `${error && 'text-red-500'}`,
                      `${!isActive && !error && 'text-gray-500'}`
                    )}
                  />
                }
              </span>
            )}
            <input
              ref={ref}
              type={type}
              id={name}
              name={name}
              onBlur={handleBlur}
              onFocus={hanldleFocus}
              className={overrideTailwindClasses(
                `${defaultStyles} ${error && errorStyles} ${
                  isActive && activeStyle
                } ${StartIcon && startIconStye} ${EndIcon && endIconStyle} `
              )}
              {...props}
            />

            {EndIcon && (
              <span className="absolute inset-y-0 right-4 inline-flex items-center">
                {
                  <EndIcon
                    className={clsx(
                      `${isActive && 'text-brand-900'}`,
                      `${error && 'text-red-500'}`,
                      `${!isActive && !error && 'text-gray-500'}`
                    )}
                  />
                }
              </span>
            )}
          </div>
        </div>
        {error && <span className="text-sm text-red-500">{error}</span>}
      </div>
    );
  }
);

export default Input;
