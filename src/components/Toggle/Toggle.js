import React from "react";

import Dropdown from "../Dropdown";

const Toggle = ({setCurrentPage, setPostsPerPage, postsPerPage,
                    showDataBtn, loadLargeData, loadSmallData}) => {

    return (
        <div className="btn-group toggle__btn_position"
             data-toggle="buttons">
            <button className="btn btn-dark rounded-0"
                    onClick={
                        () => {
                            setCurrentPage(1);
                            loadLargeData();
                        }
                    }
                    disabled={showDataBtn}>
                Загрузить большую таблицу
            </button>
            <button className="btn btn-dark"
                    onClick={
                        () => {
                            setCurrentPage(1);
                            loadSmallData();
                        }
                    }
                    disabled={!showDataBtn}>
                Загрузить маленькую таблицу
            </button>
            <Dropdown count={postsPerPage}
                      changeCount={setPostsPerPage}
                      setCurrentPage={setCurrentPage}
            />
        </div>
    );
};

export default Toggle;

