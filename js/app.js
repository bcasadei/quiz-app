/**
 * Created by bc on 8/26/15.
 */
$(document).ready(function() {

    //initialize variables
    var correct, useranswer, currentq, ofquestion, scoreHTML;


    //get dom objects
    var $question = $('h2.question');
    var $answers = $('.answers ul');
    var $submit = $('.submit-guess');
    var $cont = $('.overlay .continue');
    var $results = $('.overlay .results');
    var $description = $('.overlay .description');
    var $choice = $('.answers > ul > li.choice');
    var $overlay = $('.overlay');
    var $main = $('.main');
    var $end = $('.quiz-end');
    var $playagain = $('.play-again');
    var $userscore = $('.user-score');

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
    function getQuestion() {
        count++;
        currentq = list[count];
        console.log('currentq:' + currentq);
        console.log('count:' + count);
        displayQuestion();
    }
    
    var newHTML;
    function displayQuestion() {
        newHTML = "";
        $question.text(currentq.question);
        $.each(currentq.answers, function(index, value) {
            newHTML += '<li class="choice">'+value+'</li>';
        });
        $answers.html(newHTML);
    }

    //event handlers
    //new game function
    function newGame() {
        //reset variables
        userscore = 0;
        //show main question area
        $main.fadeIn(1000);
        //hide overlay
        $overlay.hide();
        //hide ending
        $end.hide();
        //load question1
        getQuestion();
        console.log(list);
    }

    //user selects answer
    $('.answers ul').on( "click", ".choice", function(event) {
        event.preventDefault();
        useranswer = $(this).text();
        $('.choice').removeClass('selected');
        $(this).addClass('selected');
        console.log("useranswer:" + useranswer);
    });

    //user submits answer
    $submit.click(function(event){
        event.preventDefault();
        showOverlay();
        answerCheck();
    });

    //show overlay
    function showOverlay() {
        $overlay.fadeIn(1000);
        //hide main content
        $main.hide();
    }
    
    //compare answer
    function answerCheck(){
        if (useranswer === currentq.correct) {
            //if correct show Correct and description
            userscore++;
            $results.text('Correct!');
            $description.text(currentq.desc);
        } else {
            //if incorrect show Incorrect and description
            $results.text('Incorrect!');
            $description.text(currentq.desc);
        }
        userScore();
    }
    //user clicks continue button
    $cont.click(function(event) {
        event.preventDefault();
        //load next question
        $overlay.hide();
        $main.fadeIn(1000);
        if (count <= 3) {
            getQuestion();
        } else {
            showEnd();
        }
            
    });
    //track users score
    var userscore = 0;

    function userScore() {
        ofquestion = count + 1;
        scoreHTML = userscore + " of " + ofquestion + " questions correct";
        $userscore.text(scoreHTML);
    }

    //show quiz ending
    function showEnd() {
        count = -1;
        $overlay.fadeOut(1000);
        $main.hide();
        $end.fadeIn(1000);
    }
    
    //play again
    $playagain.click(function(event) {
        event.preventDefault();
        //start a new game
        newGame();     
    });

    //page load
    newGame();

}); //end ready




