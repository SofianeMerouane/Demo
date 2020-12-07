import {render} from 'react-dom';
import React from "react";

function Comments(){
    return <div>Bonjour React</div>;
}

class CommentsElement extends HTMLElement{
    connectedCallback(){
        render (<Comments/>, this);
    }

}
customElements.define('comments-test', CommentsElement);