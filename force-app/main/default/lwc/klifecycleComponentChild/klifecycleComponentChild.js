import { LightningElement } from 'lwc';

export default class KlifecycleComponentChild extends LightningElement {
    constructor(){
        super()
        console.log('child constructor called');
    }
    connectedCallback(){
        console.log('child connectedCallback called');
        throw new Error('Loading of child component failed');
    }
    renderedCallback(){
        console.log('child rendredcallback called');
    }
    disconnectedCallback(){
        alert('removed child component successfully');
    }
}