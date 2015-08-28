/**
 * Created by bc on 8/26/15.
 */
$(document).ready(function() {
/* Key points
 - create an object as a framework/model for all of the questions

 - clone questions from the framework

 - put all of the questions/objects into an array

 - have js randomly sort answers so the correct answer is in a different location every time */



//create an object as a framework/model for all of the questions
    function Questions(question, correct, incorrect1, incorrect2, incorrect3) {
        this.question = question;
        this.correct = correct;
        this.incorrect1 = incorrect1;
        this.incorrect1 = incorrect2;
        this.incorrect1 = incorrect3;
    }

});
