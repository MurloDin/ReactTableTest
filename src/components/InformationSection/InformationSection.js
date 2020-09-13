import React from "react";

import "./InformationSection.sass";

const InformationSection = ({data : {firstName, lastName, description,
                             address: {streetAddress, city, state, zip}},
                             visible}) => {

    const content = visible ?
        (
            <div className="card card-text card-content">
                <div className="card-item">Выбран пользователь <b>{firstName} {lastName}</b></div>
                Описание:
                <textarea disabled className="card-item">
                    {description}
                </textarea>
                <div className="card-item">Адрес проживания: <b>{streetAddress}</b></div>
                <div className="card-item">Город: <b>{city}</b></div>
                <div className="card-item">Провинция/штат: <b>{state}</b></div>
                <div className="card-item">Индекс: <b>{zip}</b></div>
            </div>
        ) : "";

    return (
        <div>
            {content}
        </div>
    );
};

export default InformationSection;
