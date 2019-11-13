import {LitElement, html} from '@polymer/lit-element';
import {repeat} from "lit-html/directives/repeat";


class TodoItem extends LitElement{
    static get properties() {
        return {
            todoItem: Object
        }
    }

    constructor(){
        super();
        this.todoItem ={}
    }

    render(){
        console.log(this.todoItem.item);
        return html`
        <li>${this.todoItem.item}</li>
        `;

    }
}

customElements.define('todo-item', TodoItem)
