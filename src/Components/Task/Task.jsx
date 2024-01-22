import { changeStatus } from '../../store/tasksSlice';
import { useDispatch } from 'react-redux';

export const Task = ({ status, text, index }) => {
        const dispatch = useDispatch();

        return (
                <div data-testid="task" className="Task">
                        <p>{text}</p>
                        <div>
                                {status === 'new' ? <>
                                        <button
                                                onClick={() => dispatch(changeStatus({ index: index, status: 'complete' }))}
                                        >
                                                Выполнено
                                        </button>
                                        <button
                                                onClick={() => dispatch(changeStatus({ index: index, status: 'cancel' }))}
                                        >
                                                Отмена
                                        </button>
                                </> : status === 'cancel' ?
                                        <span style={{ color: 'rgb(255, 0, 55)' }}>Отменено</span>
                                        : <span style={{ color: 'rgb(0, 119, 255)' }}>Выполнено</span>}
                        </div>

                </div>
        );
};