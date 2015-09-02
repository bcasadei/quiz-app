/**
 * Created by bc on 8/26/15.
 */
$(document).ready(function() {
    /* Key points
    - put all of the questions/objects into an array
    - have js randomly sort answers so the correct answer is in a different location every time */

    //initialize variables
    //var question, correct, useranswer;

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

    //load questions into an array
    function loadQuestions(count){
        var list = [question1, question2, question3, question4, question5] ;
        count || list.length;
        return list.slice(0,count);
    }

    console.log(loadQuestions.list);



    //event handlers
    //new game
    function newGame() {
        //hide overlay
        //show main content
        //load question1
    }

    //user selects answer
    //show users answers in "Your Answers" area.
    $choice.on('click', '.choice', function(){
        var choice = $(this).text()
        $('#answers').find('#vg').text(choice).parent().addClass('selected').removeClass('answer');
    });
    $('.right-col').on('click', '.choice', function(){
        var choice = $(this).text()
        $('#answers').find('#cn').text(choice).parent().addClass('selected').removeClass('answer');
    });
    //user submits answer
    //show overlay
    //hide main content
    //compare answer
        //if correct show Correct and description
        //if incorrect show Incorrect and description
    //user clicks continue button
    //load next question


});
