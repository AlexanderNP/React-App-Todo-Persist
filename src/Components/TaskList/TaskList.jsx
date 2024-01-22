import { Task } from '../Task/Task';
import React from 'react';

function TaskList({ taskList }) {
    return (
        <div className="TaskList">
            {taskList.map((task, index) => 
                <Task 
                    status={task.status} 
                    text={task.text} 
                    key={index} 
                    index={index} 
                />)}
        </div>
    );

};

export default React.memo(TaskList);