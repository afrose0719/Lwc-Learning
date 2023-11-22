import { LightningElement } from 'lwc';

export default class Mc2pModelComponent extends LightningElement {
    //by default is false
    //bubble example is added on another example chilt to parent using event bubbling
    closeHandler(){
        const myEvent = new CustomEvent('close',{
            bubbles:true,
            detail: "Modal Closed Successfully"
        });
        this.dispatchEvent(myEvent);
    }
}