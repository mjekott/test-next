import clsx from 'clsx';
import {
  FocusEvent,
  forwardRef,
  InputHTMLAttributes,
  Ref,
  useState
} from 'react';
import { FiEye, FiEyeOff, FiLock } from 'react-icons/fi';
import { overrideTailwindClasses } from 'tailwind-override';
interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const defaultStyles =
  'w-full text-sm border px-12 rounded-lg shadow-sm py-4 outline-none focus:ring-brand-800 focus:ring  border-gray-300 ';
const errorStyles =
  'text-red-500 border-red-500 bg-red-100 placeholder:text-red-500';
const activeStyle =
  'border-brand-900 bg-white placeholder:text-gray-400 text-gray-800';

const PasswordInput = forwardRef(
  (
    { label, error, name, onBlur, onFocus, ...props }: Props,
    ref: Ref<HTMLInputElement>
  ) => {
    const [isActive, setIsActive] = useState(false);
    const [hide, setHide] = useState(true);

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

    const toggleType = () => setHide(!hide);
    return (
      <div className="grid gap-1">
        <div>
          <label htmlFor={name} className="sr-only">
            {label}
          </label>

          <div className="relative">
            <span className="absolute inset-y-0 inline-flex items-center left-4">
              <FiLock
                className={clsx(
                  `${isActive && 'text-brand-900'}`,
                  `${error && 'text-red-500'}`,
                  `${!isActive && !error && 'text-gray-500'}`
                )}
              />
            </span>
            <input
              ref={ref}
              type={hide ? 'password' : 'text'}
              id={name}
              name={name}
              onBlur={handleBlur}
              onFocus={hanldleFocus}
              className={overrideTailwindClasses(
                `${defaultStyles} ${error && errorStyles} ${
                  isActive && activeStyle
                }`
              )}
              {...props}
            />
            <span className="absolute inset-y-0 inline-flex items-center right-4">
              {hide ? (
                <FiEye
                  onClick={toggleType}
                  className={clsx(
                    `${isActive && 'text-brand-900'}`,
                    `${error && 'text-red-500'}`,
                    `${!isActive && !error && 'text-gray-500'}`
                  )}
                />
              ) : (
                <FiEyeOff
                  onClick={toggleType}
                  className={clsx(
                    `${isActive && 'text-brand-900'}`,
                    `${error && 'text-red-500'}`,
                    `${!isActive && !error && 'text-gray-500'}`
                  )}
                />
              )}
            </span>
          </div>
        </div>
        {error && <span className="text-red-500 text-sm">{error}</span>}
      </div>
    );
  }
);

export default PasswordInput;
