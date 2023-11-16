import { LightningElement } from 'lwc';

export default class BhelloConditionalRendering extends LightningElement {
    isVisible=false;
    name
    handleClick(){
        this.isVisible=true;
    }

    changeHandler(event){
        this.name=event.target.value;
    }
    get helloMethod(){
        return this.name ==='hello';
    }

    //falsy values this always value in if:true condition
    // x=0,false, undefined,null,''
}