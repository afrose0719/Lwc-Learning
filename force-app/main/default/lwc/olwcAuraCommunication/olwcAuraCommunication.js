import { LightningElement,api } from 'lwc';

export default class OlwcAuraCommunication extends LightningElement {
    @api title;
    callAura(){
        console.log('Hello');
        const event =new CustomEvent('sendmsg',{
            detail:{
                "msg":"Hello from lwc customevent"
            }
        })
        this.dispatchEvent(event);
    }
}