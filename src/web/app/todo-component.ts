import {Component} from 'angular2/core'

@Component({
    selector: 'todo-app',
    templateUrl: 'app/todo.html',
    providers:[]
})

export class TodoComponent{
    public todoItems: Array<string> = ["Item 1", "Item 2"]; 
    public newItem: string = "";  
    constructor(){
        
    }

    public addItem() {
        this.todoItems.push(this.newItem);
        this.newItem = "";
    }
}