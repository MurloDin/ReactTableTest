import React from 'react';

import './Field.sass'

const MyField = ({input, type, placeholder, meta }) => {

    return (
        <>
            <div className="form_content">
                <input className="form-control input_position"
                       {...input}
                       type={type}
                       placeholder={placeholder}
                />
                {
                    (
                        meta.valid ? "" :
                        <div className="alert alert-danger">{meta.error}</div>
                    )
                }
            </div>
        < />
    );
};

export default MyField;
