import React, { memo } from 'react';
import './ToDoList.scss';
import PropTypes from 'prop-types';



const ToDoList = ({ listItems, name }) => {
    
    return(
        
            <ul className={name}>
            {
            listItems.map((item) => (
            <li key={item.id}>{item.title}</li> 
            ))
            }
            </ul>
        
)};
ToDoList.defaultProps = {listItems: []};
ToDoList.propTypes = {
    listItems: PropTypes.array,
    name: PropTypes.string
};

export default memo(ToDoList);

