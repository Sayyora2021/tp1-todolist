import { Injectable } from '@angular/core';
import {TASKS} from "../mocks/mock-tasks";
import {ITask} from '../interfaces/ITask';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
task: ITask[] = TASKS;

  constructor() { }

  getTasks(): ITask[] {
    return this.task;
  }
  addTask(newTaskName : string) {

    const targetNewId = this.task.length === 0 ? 0 : this.task[this.task.length - 1].id + 1;
    
    this.task?.push({
    
  id: targetNewId,
  name: newTaskName,
  isDone: false
    
   });
    
    }
  }

