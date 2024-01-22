import { useState, useMemo } from 'react';
import './App.css';
import { Form } from './Components/Form/Form';
import { useSelector } from 'react-redux';
import { Clock } from './Components/Clock/Clock';
import { useTheme } from './Hooks/useTheme';
import TaskList from './Components/TaskList/TaskList';

function App() {

  const [status, setStatus] = useState('all');
  const [theme, changeTheme] = useTheme();

  const taskList = useSelector((state) => state.tasks['tasks']);

  const taskListFiltered = useMemo(() => taskList.filter((element) => {
    console.log(1);
    return status === 'all' ? true :
      element.status === status ? true : false;
  }), [taskList, status]);

  return (
    <div className={theme === 'light' ? 'App' : 'App dark'}>
      <Form />
      <Clock />
      <button
        onClick={changeTheme}
        className="ThemeButton">
        Сменить тему
      </button>

      <div className="FilterButtonsContain">
        <button
          className={status === 'all' ? 'active' : ''}
          onClick={() => setStatus('all')}>Все задачи</button>
        <button
          className={status === 'new' ? 'active' : ''}
          onClick={() => setStatus('new')}>Активные</button>
        <button
          className={status === 'complete' ? 'active' : ''}
          onClick={() => setStatus('complete')}>Выполненные</button>
        <button
          className={status === 'cancel' ? 'active' : ''}
          onClick={() => setStatus('cancel')}>Отмененные</button>
      </div>

      <TaskList taskList={taskListFiltered} />
    </div>
  );
}

export default App;