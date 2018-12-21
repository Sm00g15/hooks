import React, { useContext } from 'react';
import TodosContext from '../context';

export default function TodoList() {
  const { state, dispatch } = useContext(TodosContext);
  const title =
    state.todos.length > 0 ? `${state.todos.length} Todos` : 'Nothing To Do';

  const toggleTodo = todo => {
    console.log('yoooo');
  };

  return (
    <div className='container mx-auto max-w-md text-center font-mono'>
      <h1 className='text-bold'>{title}</h1>
      <ul className='list-reset text-white p-0'>
        {state.todos.map(todo => (
          <li
            className='flex items-center bg-orange-dark border-black border-dashed border-2 my-2 py-4'
            key={todo.id}>
            <span
              onDoubleClick={() =>
                dispatch({ type: 'TOGGLE_TODO', payload: todo })
              }
              className={`${todo.complete &&
                'line-through text-grey-darkest'} flex-1 ml-12 cursor-pointer`}>
              {todo.text}
            </span>
            <button>
              <img
                src='https://icon.now.sh/edit/0050c5'
                alt='Edit Icon'
                className='h-6'
              />{' '}
            </button>
            <button>
              <img
                src='https://icon.now.sh/delete/8b0000'
                alt='Delete Icon'
                className='h-6'
              />{' '}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
