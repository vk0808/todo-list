import React from 'react';
import './styles.css';

export default function TodoItem(props) {
  const completedStyle = {
    fontStyle: 'italic',
    textDecoration: 'line-through',
    color: '#cdcdcd'
  }
  return (
    <div className="todo-item">
      <input 
        type="checkbox" 
        defaultChecked={props.completed} 
        onChange={() => props.handleChange(props.id)}/>
      <p style={props.completed ? completedStyle : null}>{props.text}</p>
    </div>
  );
}