import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoapplication';
  public todoactivities=[];
  public newTask;
  public doneActivities=[];
  public isDisabled = true;
  public displaySave="none";
  public displayEdit= this.todoactivities.length==0? "none":"inline";

  AddItem(){
    if (this.newTask.trim() == '' || this.newTask == null) {
    }
    else {
      if(this.todoactivities.indexOf(this.newTask)>-1){

      }
      else{
        this.todoactivities.push(this.newTask);
        this.displayEdit= this.todoactivities.length==0? "none":"inline";
      }
    }
    this.newTask = '';
  }

  TaskDone(activity){
    const activityIndex = this.todoactivities.indexOf(activity);
    this.todoactivities.splice(activityIndex,1);
    this.doneActivities.push(activity);
  }

  TaskUndone(activity){
    const activityIndex = this.doneActivities.indexOf(activity);
    this.doneActivities.splice(activityIndex,1);
    this.todoactivities.push(activity);
  }

  TaskEdit(){
    this.isDisabled = false;
    this.displayEdit = "none";
    this.displaySave = "inline";
  }

  TaskEditDone(){
    this.isDisabled = true;
    this.displayEdit = "inline";
    this.displaySave = "none";
  }

  DeleteTask(activityIndex){
    this.doneActivities.splice(activityIndex,1);
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
