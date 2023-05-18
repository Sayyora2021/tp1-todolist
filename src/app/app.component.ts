import {Component} from '@angular/core';
//import {TaskService} from './task-service.service';

import {ITask} from '../interfaces/ITask';
import {TASKS} from "../mocks/mock-tasks";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title= 'tp1-todolist';
    taskList: ITask[] = TASKS;
    newTaskName = '';
    pickedTask?: ITask;

    addTask() {
        const targetNewId = this.taskList.length === 0 ? 0 : this.taskList[this.taskList.length - 1].id + 1;

        this.taskList.push({
            id: targetNewId,
            name: this.newTaskName,
            isDone: false
        });

        this.newTaskName = '';
    }

    removeTask(targetTask: ITask) {
        this.taskList = this.taskList.filter((currentTask) => currentTask.id !== targetTask.id);
    }

    setTaskDone(targetTask: ITask) {
        const searchTask = this.taskList.find(i => i.id === targetTask.id);

        if(searchTask) {
            searchTask.isDone = !searchTask.isDone;
        }
    }

    pickTask(targetTask: ITask) {
        this.pickedTask = targetTask;
    }

    getSortedTask(): ITask[] {
        return this.taskList.sort((a: ITask, b: ITask) => {
            if(a.isDone && !b.isDone) {
                return 1;
            }


            if(!a.isDone && b.isDone) {
                return -1;
            }

            return 0;
        })
    }
}
