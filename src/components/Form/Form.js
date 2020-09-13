import React from 'react';
import {Field, reduxForm} from 'redux-form';

import "./Form.sass";

import {requiredInput, requiredEmailInput, requiredPhoneInput} from "../../validation"
import MyField from "../Field";



const FormItem = ({handleSubmit, valid}) => {

    return (
        <form className="input-group form_position"
              name="qwe"
              onSubmit={handleSubmit}>
            <div>
                <label className="form-label">id</label>
                <Field
                    name="id"
                    component={MyField}
                    type="number"
                    placeholder="id"
                    validate={requiredInput}
                />
            </div>
            <div>
                <label className="form-label">First name</label>
                <Field
                    name="firstName"
                    component={MyField}
                    type="text"
                    placeholder="First name"
                    validate={requiredInput}
                />
            </div>
            <div>
                <label className="form-label">Last name</label>
                <Field
                    name="lastName"
                    component={MyField}
                    type="text"
                    placeholder="Last name"
                    validate={requiredInput}
                />
            </div>
            <div>
                <label className="form-label">Email</label>
                <Field
                    name="email"
                    component={MyField}
                    type="email"
                    placeholder="Email"
                    validate={requiredEmailInput}
                />
            </div>
            <div>
                <label className="form-label">Phone</label>
                <Field
                    name="phone"
                    component={MyField}
                    type="tel"
                    placeholder="phone"
                    validate={requiredPhoneInput}
                />
            </div>
            {
                valid ? <button className="btn btn-outline-success form-btn"
                             type="submit"
                             label="submit">Добавить</button> : ""
            }
        </form>
    );
};


const Form = reduxForm({
    form: 'form'
})(FormItem);

export default Form;
