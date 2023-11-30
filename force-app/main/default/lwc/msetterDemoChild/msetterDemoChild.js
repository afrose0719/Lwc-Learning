import { LightningElement ,api} from 'lwc';

export default class MsetterDemoChild extends LightningElement {
    iserDetail
    @api 
    get detail(){
        return this.userDetail;
    }
    //to mutate data we need to spread operator newAge will over already existing data to new value
    //also we can add new properties example city:'vellore' into data object
    set detail(data){
        let newAge=data.age*2;
        this.userDetail={...data, age:newAge,city:'Vellore'};
    }
}