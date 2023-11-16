import { LightningElement } from 'lwc';

export default class CquizApp extends LightningElement {
    selected ={} //for storing answers
    isSubmitted=false // to show result
    correctAnswer=0; //to show number of correct answers   
    myQuestions =[
        {
            id:'Question1',
            question:"Which one of the following is not a template loop?",
            answers:{
                a:"for:each",
                b:"iterator",
                c:"map loop"
            },
            correctAnswer:"c"
            },
            {
                id:'Question2',
                question:"Which of the file is invalid in LWC component folder?",
                answers:{
                    a:"svg",
                    b:".apex",
                    c:".js"
                },
                correctAnswer:"b"
                },
                {
                    id:'Question3',
                    question:"Which one of the following is not a directive?",
                    answers:{
                        a:"for:each",
                        b:"if:true",
                        c:"@track"
                    },
                    correctAnswer:"c"
                    }

    ]
    get allNotSelected(){
        return !(Object.keys(this.selected).length ===this.myQuestions.length)
    }

    get isScoredfull(){
        return `slds-text-heading_large ${this.myQuestions.length === this.correctAnswer?
                'slds-text-color_success':'slds-text-color_error'}`;
    }
    changeHandler(event){
        console.log("name",event.target.name)
        console.log("value",event.target.value)
        //shorthand
        const {name, value} =event.target
        //instead below we can write like above which is shorthand
        // const name =event.target.name
        // const value=event.target.value
        this.selected ={...this.selected,[name]:value}
    }

    submitHandler(event){
        event.preventDefault();
        //this.selected ={'Question1':'a', 'Question2':'b','Question3':'c'}
        //ex: this.myQuestions.filter(item=>'a'==='c') //select
        let correct =this.myQuestions.filter(item=>this.selected[item.id] ===item.correctAnswer)
        this.correctAnswer=correct.length;
        this.isSubmitted=true;
        console.log('this.correctAnswer',this.correctAnswer)
    }

    resetHandler(){
        this.selected ={};
        this.correctAnswer=0;
        this.isSubmitted=false;
    }
}