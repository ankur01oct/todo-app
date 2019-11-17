import {LitElement, html} from "@polymer/lit-element"
import './add-item'
import './list-items'

class TodoApp extends LitElement {
    static get properties(){
        return {
            todoList: Array
        }
    }

    constructor(){
        super();
        let list = JSON.parse(localStorage.getItem('todo-list'));
         this.todoList= list === null ? []:list;
    }
    render() {
        return html`
          <style>
            :host {
              display: block;
            }
          </style>
          <add-item></add-item>
          <list-items .todoList="${this.todoList}"></list-items>
        `;
      }


      connectedCallback(){
        super.connectedCallback();
        this.addEventListener('addItem', function (e) {
           this.todoList = e.detail.todoList;
        });
        this.addEventListener('removeItem', (e) =>{
          let index = this.todoList.map((item) => item.id).indexOf(e.detail.item);
          this.todoList.splice(index,1);
          this.todoList = [...this.todoList]
          localStorage.setItem('todo-list', JSON.stringify(this.todoList));
        })

        this.addEventListener('changeItem', (e) =>{
          let index = this.todoList.map((item) => item.id).indexOf(e.detail.item);
          this.todoList[index].done = !this.todoList[index].done;
          localStorage.setItem('todo-list', JSON.stringify(this.todoList));
        })
      }
      disconnectedCallback(){
        super.disconnectedCallback();
        this.removeEventListener('addItem');
        this.removeEventListener('removeItem');
      }
}

customElements.define('todo-app',TodoApp)