/**
 * Created by bc on 8/26/15.
 */
$(document).ready(function() {


    //user selects answer
    //user submits answer
    //show overlay
    //hide main content
    //compare answer
    //if correct show Correct and description
    //if incorrect show Incorrect and description
    //user clicks continue button
    //load next question





    // Key points
    //initialize variables
    var correct, useranswer, currentq;


    //get dom objects
    var $question = $('h2.question');
    var $answers = $('.answers ul');
    var $submit = $('.submit-guess');
    var $continue = $('.continue');
    var $results = $('.results');
    var $description = $('.description');
    var $choice = $('.answers > ul > li.choice');

    //constructor template object
    function Question(question, answers, correct, desc) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
        this.desc = desc;
    }

    //constructor objects for the questions
    var question1 = new Question ('Whiskey is believed to have been first distilled in what country?', ['Japan', 'Scotland', 'Ireland', 'Sri Lanka'], 'Ireland', 'The word whiskey comes from the Irish uisce beatha or "water of life." From Ireland, whiskey spread across the North Channel to Scotland.');
    var question2 = new Question ('Which grain is the basis of single malt Scotch?', ['Wheat', 'Corn', 'Barley', 'Rye'], 'Barley', "Single malt Scotch is made from 100% barley grain. Blended Scotch can be made from other grains as well. Bourbon is made from at least 51% corn, but often also includes rye or wheat.");
    var question3 = new Question ('Prior to prohibition, this was the most popular type of whiskey in America.', ['Malt Whiskey', 'Rye Whiskey', 'Bourbon Whiskey', 'Tennessee Whiskey'], 'Rye Whiskey', "In pre-prohibition America, rye whiskey distilleries dotted the landscape of the mid-Atlantic, with many distilleries in New York, Virginia, Ohio and Pennsylvania. The whiskey rebellion concerned rye, and even George Washington distilled rye whiskey at Mount Vernon. You just can't get more American than that. After prohibition, rye never recovered and was displaced by Bourbon as the most popular American whiskey. Only in the first decade of the 21st century has rye started to make a pronounced comeback.");
    var question4 = new Question('Which of the following types of whiskey are made in the United States?', ['All of these', 'Rye Whiskey', 'Bourbon Whiskey', 'Malt Whiskey'], 'All of these', 'We are in the midst of a whiskey revolution with micro-distilleries popping up every year. Bourbon and rye are made largely in Kentucky. Malt whiskey is made in Oregon, California and Colorado. Tennessee whiskey and corn whiskey are also made in the US.');
    var question5 = new Question('From the perspective of the connoisseur, what is the best way to enjoy whiskey?', ['Neat', 'With Coke', 'On the Rocks', 'All of These'], 'Neat', "Most connoisseurs prefer their whiskey neat or with a few drops of room temperature water. This is the best way to absorb the aromas and flavors that make whiskey special. Ice or other chilling methods dull the flavors instead of enhancing them, and Coke is an absolute abomination.Of course, it's your whiskey, so drink it the way you like it so long as you enjoy it, and of course, drink responsibly.");

    // load questions into an array
    var list = [question1, question2, question3, question4, question5];
    //get question out of list
    var count = -1;
    function getQuestion(count) {
        count++;
        currentq = list[count];
        console.log('currentq:' + currentq);
        console.log('count:' + count);
    }
    
    
  
    var newHTML;
    function displayQuestion() {
        $question.text(currentq.question);
        $.each(currentq.answers, function(index, value) {
            newHTML += '<li>'+value+'</li>';
        });
        $answers.html(newHTML);
        console.log(newHTML);
    }

    //event handlers
    //new game function
    function newGame() {
        //hide overlay
        //load question1

        getQuestion();
        console.log(list);
    }

    //page load
    newGame();

}); //end ready




