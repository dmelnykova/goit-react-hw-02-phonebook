import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  Wrapper,
  Form,
  Field,
  ErrorMessage,
  Label,
} from './ContactForm.styled';

const validationSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').required('Required'),
  number: Yup.string()
      .matches(
          new RegExp(/^\d{3}-\d{2}-\d{2}$/),
      'Phone number must be in the format "000-00-00"'
    )
    .required('Required!'),
});

export const ContactForm = ({ onAdd }) => {
    return (
        <Wrapper>
            <Formik
            initialValues={{
                name: '',
                phone: '',
            }}
            onSubmit={(values, actions) => {
                onAdd(values);
                actions.resetForm();
            }}
            validationSchema={validationSchema}
            >
            <Form>
                <Label>Name</Label>
                <Field id="name" name="name" placeholder="Tom" />
                <ErrorMessage name="name" component="span" />
                
                <Label>Number</Label>
                <Field id="number" name="number" placeholder="000-00-00" />
                <ErrorMessage name="number" component="span" />   
                
                <button type="submit">Add contact</button>
            </Form>
                

            </Formik>
        </Wrapper>
    )
}


