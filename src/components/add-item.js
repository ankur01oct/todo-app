import {LitElement, html} from "@polymer/lit-element"

class AddItem extends LitElement {
    static get properties(){
        return {
            todoList: Array,
            todoItem:String
        }
    }

    constructor(){
        super();
        this.todoItem = '';
    }

   

    render() {
        return html`
          <style>
            :host {
              display: block;
            }
          </style>
          <div>
            <input value = ${this.todoItem}
            @keyup="${this.inputKeypress}">
            <button @click= "${this.onAddItem}">Add Item</button>
            </input>
          <div>
        `;
      }

      inputKeypress(ev) {
         
        if(ev.keyCode == 13){
            this.onAddItem();
        } else {
            this.todoItem = ev.target.value;
        }
        console.log(ev)
        console.log(this.todoItem);
    }
    onAddItem(){
        if(this.todoItem.length>0){
        let storedTodoList = JSON.parse(localStorage.getItem('todo-list'));
            storedTodoList = storedTodoList === null ? [] : storedTodoList;

            storedTodoList.push({
                id: new Date().valueOf(),
                item: this.todoItem,
                done: false
            })

       
        localStorage.setItem('todo-list', JSON.stringify(storedTodoList));
        this.todoItem = '';
    }
    }

     
}

customElements.define('add-item',AddItem)