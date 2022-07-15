import React from 'react';
import { BiCheckboxChecked } from 'react-icons/bi';

interface Props {
  password: string;
}

const PasswordRequirement: React.FC<Props> = ({ password = '' }) => {
  const validateRequirement = (requirement: string, value: string) => {
    switch (requirement) {
      case 'minLength':
        return value.length >= 8;
      case 'hasNumber':
        return /\d/.test(value);
      case 'hasUpperCase':
        return /[A-Z]/.test(value);
      case 'hasLowerCase':
        return /[a-z]/.test(value);
      case 'hasSpecialCharacter':
        return /[@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(value);
      default:
        return false;
    }
  };

  function passwordRequirements(value: string): {
    requirement: string;
    requirementValue?: number;
    requirementMet: boolean;
    requirementText: string;
  }[] {
    return [
      {
        requirement: 'minLength',
        requirementValue: 8,
        requirementMet: validateRequirement('minLength', value),
        requirementText: 'Must be at least 8 characters'
      },
      {
        requirement: 'hasNumber',
        requirementMet: validateRequirement('hasNumber', value),
        requirementText: 'Must contain at least one number'
      },
      {
        requirement: 'hasUpperCase',
        requirementMet: validateRequirement('hasUpperCase', value),
        requirementText: 'Must contain at least one uppercase letter'
      },
      {
        requirement: 'hasLowerCase',
        requirementMet: validateRequirement('hasLowerCase', value),
        requirementText: 'Must contain at least one lowercase letter'
      },
      {
        requirement: 'hasSpecialCharacter',
        requirementMet: validateRequirement('hasSpecialCharacter', value),
        requirementText: 'Must contain a special chareacter e.g (@#$%^&*()) '
      }
    ];
  }

  return password ? (
    <ul
      className="my-2 flex flex-col gap-2"
      aria-expanded="true"
      role="listbox"
    >
      {passwordRequirements(password).map(
        ({ requirementText, requirementMet }, index) => (
          <li
            key={index}
            className={`flex items-center text-xs ${
              requirementMet ? 'text-green-600' : 'text-gray-500'
            }`}
          >
            <p className="mr-4">
              <BiCheckboxChecked className="h-5 w-5" />
            </p>
            <span className="mr-2">{requirementText}</span>
          </li>
        )
      )}
    </ul>
  ) : null;
};

export default PasswordRequirement;
