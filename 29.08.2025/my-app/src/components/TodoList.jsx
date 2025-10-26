import React from "react";
import PropTypes from "prop-types";

function TodoList({ todos }) {
    return (
        <div>
            <h3>Список завдань:</h3>
            {todos.length === 0 ? (
              <p>Список порожній</p>
            ) : (
              <ul>
                {todos.map((todo, index) => (
                  <li key={index}>{todo}</li>
                ))}
              </ul>
            )}
          </div>
    )
}
TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.string).isRequired,
}
  export default TodoList