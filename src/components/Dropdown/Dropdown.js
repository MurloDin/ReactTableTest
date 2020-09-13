import React from 'react'
import { Dropdown as DropdownItem} from 'semantic-ui-react'

import "./Dropdown.sass";


const Dropdown = ({count, changeCount, setCurrentPage}) => (
        <DropdownItem text={`По ${count} записей`} pointing className='btn btn-dark rounded-0 dropdown_width'>
            <DropdownItem.Menu>
                <DropdownItem.Item><div onClick={
                    () => {
                        setCurrentPage(1);
                        changeCount(10);
                    }
                }>По 10 записей</div></DropdownItem.Item>
                <DropdownItem.Item><div onClick={
                    () => {
                        setCurrentPage(1);
                        changeCount(25);
                    }
                }>По 25 записей</div></DropdownItem.Item>
                <DropdownItem.Item><div onClick={
                    () => {
                        setCurrentPage(1);
                        changeCount(50);
                    }
                }>По 50 записей</div></DropdownItem.Item>
            </DropdownItem.Menu>
        </DropdownItem>
);


export default Dropdown;
