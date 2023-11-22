import { LightningElement } from 'lwc';
import pubsub from 'c/mpubsub';
export default class MpubsubComponentA extends LightningElement {
    message
    inputHandler(event){
        this.message = event.target.value
    }
    publishHandler(){
        pubsub.publish('componentA', this.message)
    }
}