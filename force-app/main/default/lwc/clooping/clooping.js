import { LightningElement } from 'lwc';

export default class Clooping extends LightningElement {
    carList =['ford','audi','Maruti','bmw']

    ceoList =[
        {
            id:1,
            company:"Google",
            name:'Sundar pichai'
        },
        {
            id:2,
            company:"Apple inc",
            name:'Tim Cook'
        },
        {
            id:3,
            company:"Amazon",
            name:'Jeff bezos'
        },
        {
            id:4,
            company:"Facebook",
            name:'Mark'
        }
    ]
}