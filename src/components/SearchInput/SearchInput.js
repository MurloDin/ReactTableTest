import React, {useState} from "react";


const SearchInput = ({searchBtnClick}) => {

    const [inputValue, setInputValue] = useState("");

    return (
        <div className="input-group mb-3">
            <input type="text"
                   className="form-control"
                   placeholder="Введите строку"
                   value={inputValue}
                   onChange={e => setInputValue(e.target.value)}
            />
            <div className="input-group-append">
                <button className="btn btn-outline-secondary"
                        type="button"
                        onClick={() => searchBtnClick(inputValue)}>Button</button>
            </div>
        </div>
    );
};

export default SearchInput;
