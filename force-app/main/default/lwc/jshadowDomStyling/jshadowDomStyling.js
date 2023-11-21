import { LightningElement } from 'lwc';

export default class JshadowDomStyling extends LightningElement {
    isLoaded =false
    renderedCallback(){
        if(this.isLoaded) return
        const style =document.createElement('style');
        style.innerText =`c-jshadow-dom-styling .slds-button{
            background:red;
            color:white;
        }`
        this.template.querySelector('lightning-button').appendChild(style);
        this.isLoaded=true;
        //behind the scence it will create like below
        //<style></style>
    }
}