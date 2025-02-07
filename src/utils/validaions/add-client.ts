import { object, string } from 'yup';
import { emailAddMember } from 'utils/validaions/regex';

export const VALIDATION_SCHEMA_ADD_MEMBER = object().shape({
    email: string().trim().matches(emailAddMember, 'Invalid email').required('Email is required'),
    address: object().shape({
        city: string().required('City is required'),
        zipcode: string().required('Zipcode is required'),
    }),
})