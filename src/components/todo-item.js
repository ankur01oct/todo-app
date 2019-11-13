import {LitElement, html} from '@polymer/lit-element';
import {repeat} from "lit-html/directives/repeat";


class TodoItem extends LitElement{
    static get properties() {
        return {
            todoItem: {
                type:Object,
                value: {item : ''},
            }
        }
    }

    constructor(){
        super();
    }

    render(){
        console.log(this.todoItem + '---------');
        return html`
        <li>${this.todoItem.item}</li>
        `;

    }
}

customElements.define('todo-item', TodoItem)
