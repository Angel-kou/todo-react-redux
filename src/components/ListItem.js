import React from 'react';
import {changeEditStatus} from "../actions";
import {changeInputValue} from "../actions";
import PropTypes from 'prop-types'


const ListItem = ({ dispatch ,item,onClick}) => {

    const todo = item;
    console.log("todo iii  ",todo.id,todo.content)
    let input
    return (

      <li key={todo.id} className={todo.completed? "todoLi2":"todoLi1"}>
        <input
            id={todo.id}
            className="check-btn"
            type="checkbox"
            onClick={onClick}
            checked={todo.completed}
        />

        <input
          className="contentValue"
          type="text"
          ref={node => input = node}
          value={todo.content}
          readOnly={todo.readOnly}
          style={todo.completed ? { textDecoration: 'line-through' } : {}}
          onDoubleClick={()=>{
              dispatch(changeEditStatus(todo.id))
          }}
          onChange={()=>{
              dispatch(changeInputValue(todo.id))
          }}
        />
      </li>
    );
}

ListItem.propTypes = {
    item: PropTypes.string.isRequired
}

export default ListItem;
