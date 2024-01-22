import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { addTask } from '../../store/tasksSlice';
import { useDispatch } from 'react-redux';

export const Form = () => {

    const dispatch = useDispatch();

    const { register, handleSubmit, resetField } = useForm();

    const formRef = useRef();

    const onSubmit = (data) => {
        if(data.text.trim().length === 0) {
            formRef.current.classList.add('errorRed');
            const event = document.addEventListener('click', () => {
                formRef.current.classList.remove('errorRed');
                document.removeEventListener('click', event);
            });
        }
        else {
            dispatch(addTask({ text: data.text, status: 'new' }));
            resetField('text');
        }
    };

    return (
        <form
            data-testid="form"
            ref={formRef}
            onSubmit={handleSubmit(onSubmit)} 
            className="Form">

            <textarea
                placeholder="Введите задачу..."
                {...register('text')}
            />

            <button>Добавить</button>

        </form>
    );

};