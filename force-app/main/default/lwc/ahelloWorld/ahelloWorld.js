import { LightningElement,track } from 'lwc';

export default class AhelloWorld extends LightningElement { 
    // only available inside of this component you can't access outside this class
    name //undefined 
    age=30;
    fullName='Afrose Developer';
    showData =false;
    @track details={
        name:'dummy',
        place:'Vellore'
    }
    userList=['User A','User B','User C']
    title='Apex'
    //method
    getName(){
        //perform a logic
    }

    changeHandler(event){
        this.title = event.target.value;
    }
    //javascript says you shouldnt mutate the data. Always create a copy. Another approach
    trackHandler(event){
        this.details.name=event.target.value;
    }

    /*
     trackHandler(event){
        this.details.name={...this.details, 'city':event.target.value};
    }
    */

    /*Getter Example 8*/
    users =['Afrose','Jagan']
    num1=10;
    num2=20;

    get firstUser(){
        return this.users[0]
    }

    get multiply(){
        return this.num1 * this.num2;
    }

}