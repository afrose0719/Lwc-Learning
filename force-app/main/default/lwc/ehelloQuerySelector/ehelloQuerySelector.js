import { LightningElement } from 'lwc';

export default class EhelloQuerySelector extends LightningElement {
    userNames=["Afrose",'Jagan','Lokesh','Chandru'];
    fetchDetailHandler(){
        const elem=this.template.querySelector('h1');
        elem.style.border="1px solid red"
        const userElements =this.template.querySelectorAll('.name')
        Array.from(userElements).forEach(item=>{
            console.log(item.innerText)
            item.setAttribute('title', item.innerText);
        });
        
        //lwc:manual demo
        const childElem = this.template.querySelector('.child');
        childElem.innerHTML ='<p> Hey im a child element</p>'
    }
}