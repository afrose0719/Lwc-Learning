import { LightningElement } from 'lwc';

export default class JdynamicStyling extends LightningElement {
    percent=10
    changeHandler(event){
        this.percent=event.target.value;
    }
    get percentage(){
        return `width:${this.percent}%`
    }
}