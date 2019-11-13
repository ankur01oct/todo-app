import {LitElement, html} from '@polymer/lit-element';
import { repeat } from 'lit-html/directives/repeat';
import './todo-item.js';

class ListItems extends LitElement{
    static get properties() {
        return {
            todoList: Array
        }
    }

    constructor(){
        super();
        this.todoList =[]
    }

    render(){
        console.log((this.todoList))
        return html`
        <ul>${repeat((this.todoList), (todo) => {
            console.log(todo.item);
            return html`<todo-item todoItem=${todo}></todo-item>`}
        )}</ul>
        `;

    }
}

customElements.define('list-items', ListItems)
