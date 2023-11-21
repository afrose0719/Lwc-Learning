import { LightningElement,api } from 'lwc';

export default class Lp2cParentComponent extends LightningElement {
     cardHeading='Default title';
    submitHandler(event){
        this.cardHeading=event.target.value;
        console.log('cardHeading'+cardHeading);
    }

    carouselData =[
        {
            src :"https://www.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg",
            header : "First Card",
            description :"First card description."
        },
        {
            src :"https://www.lightningdesignsystem.com/assets/images/carousel/carousel-02.jpg",
            header : "Second Card",
            description :"Second card description."
        },
        {
            src :"https://www.lightningdesignsystem.com/assets/images/carousel/carousel-03.jpg",
            header : "Third Card",
            description :"Third card description."
        }
    ]
    percentage=10
    changeHandler(event){
        this.percentage=event.target.value
    }

    @api handleClick(){
        this.template.querySelector('c-lp2c-parent-component-slider').resetSlider();
    }
}