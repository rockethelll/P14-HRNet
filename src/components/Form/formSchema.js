import * as z from 'zod';

// Use zod to validate form data
export const formSchema = z.object({
  firstName: z.string().min(3, 'First name must be at least 3 characters long'),
  lastName: z.string().min(3, 'Last name must be at least 3 characters long'),
  // Preprocess date values to ensure they are Date objects on format mm/dd/yyyy
  dateOfBirth: z
    .preprocess((val) => (val instanceof Date ? val : new Date(val)), z.date())
    .transform((date) => {
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const year = date.getFullYear();
      return `${month}/${day}/${year}`;
    }),
  // Preprocess date values to ensure they are Date objects on format mm/dd/yyyy
  startDate: z
    .preprocess((val) => (val instanceof Date ? val : new Date(val)), z.date())
    .transform((date) => {
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const year = date.getFullYear();
      return `${month}/${day}/${year}`;
    }),
  street: z.string().min(3, 'Street must be at least 3 characters long'),
  city: z.string().min(3, 'City must be at least 3 characters long'),
  zip: z.string().min(5, 'Zip code must be at least 5 characters long'),
  state: z.string(),
  department: z.string(),
});
