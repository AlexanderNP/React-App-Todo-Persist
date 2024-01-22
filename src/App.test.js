import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './store/tasksSlice';
import themeReducer from './store/themeSlice';
import App from './App';

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    theme: themeReducer
  }
});

describe('Отправка формы - появление задач', () => {

  it('Пустая форма', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const form = screen.getByTestId('form');
    fireEvent.submit(form);

    await waitFor(() => {
      expect(screen.queryByTestId('task')).toBeNull();
    });
  });

  it('Форма с пробелами', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const form = screen.getByTestId('form');
    const textarea = screen.getByRole('textbox');

    fireEvent.change(textarea, {
      target: {
        value: '   '
      }
    });
    fireEvent.submit(form);

    await waitFor(() => {
      expect(screen.queryByTestId('task')).toBeNull();
    });
  });

  it('Форма заполненная', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const form = screen.getByTestId('form');
    const textarea = screen.getByRole('textbox');

    fireEvent.change(textarea, {
      target: {
        value: 'Какая-то задача...'
      }
    });
    fireEvent.submit(form);

    await waitFor(() => {
      expect(screen.getByTestId('no-task')).toBeInTheDocument();
    });
  });

});