import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectValue } from '../../store/slice/counter/counterSelector';
import { increment, decrement } from '../../store/slice/counter/counterSlice';

const Counter = () => {
  const value = useSelector((state) => selectValue(state));
  const dispatch = useDispatch();
  return (
    <div>
      <h1 data-testid="value-title">{value}</h1>
      <button
        data-testid="decrement-btn"
        onClick={() => {
          dispatch(decrement());
        }}
      >
        decrement
      </button>
      <button
        data-testid="increment-btn"
        onClick={() => {
          dispatch(increment());
        }}
      >
        increment
      </button>
    </div>
  );
};

export default Counter;
