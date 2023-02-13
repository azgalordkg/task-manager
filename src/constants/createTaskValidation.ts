import * as yup from 'yup';

export const createTaskFormSchema = yup.object().shape({
  name: yup
    .string()
    .required('Required field')
    .min(3, 'Must be exactly 3 digits')
    .max(30, 'Must be exactly 30 digits'),
});
