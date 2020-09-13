import React from 'react';

import './Error-indicator.css';

const ErrorIndicator = () => {
    return (
          <div className="error-indicator">
              <div className="error-title">Произошла обшибка, попрбуйте обновить страницу.</div>
              <img src="/gifs/Dino.gif"
                   alt="dino"
                   className="main-gif"
              />
          </div>
    );
};

export default ErrorIndicator;
