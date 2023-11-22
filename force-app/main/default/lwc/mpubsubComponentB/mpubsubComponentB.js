import { LightningElement } from 'lwc';
import pubsub from 'c/mpubsub';
export default class MpubsubComponentB extends LightningElement {
    message
    connectedCallback(){
        this.callSubscriber()
    }
    callSubscriber(){
        pubsub.subscribe('componentA', (message)=>{
            this.message = message
        })
    }
}