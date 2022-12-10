import React from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import './app.css';
import Habits from '../components/habits/habits';
import Navbar from '../components/navbar/navbar';

/**기존 코드의 문제점
 * 1. 테스트성이 떨어짐
 *   -> 비즈니스 로직이 react 컴포넌트 안에 있어 react component test 라이브러리를 사용해야 한다
 * 2. 재사용성이 떨어짐
 *   -> 비즈니스 로직이 react에 의존적으로 결합되어 있어 Vue, Angular 등 다른 라이브러리 사용에 한계가 있다
 */

const App = ({ presenter }) => {
  const [habits, setHabits] = useState(presenter.getHabits());

  const handleIncrement = useCallback(
    (habit) => {
      presenter.increment(habit, setHabits);
    },
    [presenter]
  );

  const handleDecrement = useCallback(
    (habit) => {
      presenter.decrement(habit, setHabits);
    },
    [presenter]
  );

  const handleDelete = useCallback(
    (habit) => {
      presenter.delete(habit, setHabits);
    },
    [presenter]
  );

  const handleAdd = useCallback(
    (name) => {
      presenter.add(name, setHabits);
    },
    [presenter]
  );

  const handleReset = useCallback(() => {
    presenter.reset(setHabits);
  }, [presenter]);

  return (
    <>
      <Navbar totalCount={habits.filter((item) => item.count > 0).length} />
      <Habits
        habits={habits}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onDelete={handleDelete}
        onAdd={handleAdd}
        onReset={handleReset}
      />
    </>
  );
};

export default App;
