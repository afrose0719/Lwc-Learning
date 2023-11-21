import { LightningElement } from 'lwc';

export default class KlifecycleComponent extends LightningElement {
   ischildVisible=false
    constructor(){
        super()
        console.log('Parent constructor called');
    }
    connectedCallback(){
        console.log('parent connectedCallback called');
    }
    renderedCallback(){
        console.log('parent rendredcallback called');
    }
    handleClick(){
        this.ischildVisible=!this.ischildVisible
    }

    errorCallback(error, stack){
        console.log(error.message)
        console.log(stack)
    }
}