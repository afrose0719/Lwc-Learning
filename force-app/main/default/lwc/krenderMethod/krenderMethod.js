import { LightningElement } from 'lwc';
import signInTemplate from './signInTemplate.html';
import signupTemplate from './signupTemplate.html';
import renderTemplate from './krenderMethod.html'
export default class KrenderMethod extends LightningElement {
    selectedBtn=''
    render(){
        return this.selectedBtn ==='Signup' ?signInTemplate:
                this.selectedBtn==='Signin'?signupTemplate:
                renderTemplate
    }

    handleClick(event){
        this.selectedBtn=event.target.label
    }

    submitHandler(event){
        console.log(`${event.target.label} Successfully`);
    }
}