import { LightningElement } from 'lwc';

export default class OcustomLightningCard extends LightningElement {
    handleFooterChange(){
        const footerEl =this.template.querySelector('footer');
        if(footerEl){
            footerEl.classList.remove('slds-hide');
        }
    }
}