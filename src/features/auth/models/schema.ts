import { object, string } from 'zod';

export const registerSchema = object({
  firstName: string().min(1, 'Firstname is required').max(100),
  lastName: string().min(1, 'Lastname is required').max(100),
  email: string()
    .min(1, 'Email address is required')
    .email('Email Address is invalid'),
  password: string()
    .min(1, 'Password is required')
    .min(8, 'Password must be more than 8 characters')
    .regex(/\d/, 'Must contain at least one number')
    .regex(/[A-Z]/, 'Must contain at least one Uppercase letter')
    .regex(/[a-z]/, 'Must contain at least one lowercase letter')
    .regex(
      /[@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/,
      'Must contain a special chareacter e.g (@#$%^&*()) '
    )
});

export const loginSchema = object({
  email: string()
    .min(1, 'Email address is required')
    .email('Email Address is invalid'),
  password: string().min(1, 'Password is required')
});
