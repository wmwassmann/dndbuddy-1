# Project One
D&D Buddy

# Table of contents
- [Project Name](#project-one)
- [Table of contents](#table-of-contents)
- [General info](#general-info)
- [Screenshots](#screenshots)
- [Features](#features)
- [Code Style](#code-style)
  - [<span style="color: rgb(220, 105, 1);"> Description for the code</span>](#description-for-the-code)
- [Technology](#technology)
- [Code Example](#code-example)
- [Credit](#credit)
- [Test](#test)
- [Status](#status)
- [Future Plan](#future-plan)
- [Create By](#create-by)

# General info
This project quickly and simpily builds a Dungeons and Dragons character sheet.  It is designed for first time players but can also be used by experienced players looking to play a "one shot" campaign.

This project consists of the following parts:
1. index.html file for the landing page of the following 4 areas:
   1. Javascript
   2. CSS
   3. HTML
   4. Foundation
   An seperated html files has been assinged to each area.
2. two local CSS files for styling the entire application:
   1. reset.css - to reset all the styling setting
   2. style.css - to add the style to this generator 
3. 13 javascript file has been composed for this application:
    | File name  |               Description               |   Applied to the Quiz of  |
    | :----------: | :--------------------------------: |   :----------:    |
    |  main.js    |   The script for the landing page of each html file    |   Javascript/CSS/HTML/Bootstrap
    |  globalvar.js  |   store all the global variables   |   Javascript/CSS/HTML/Bootstrap |
    | questionJS.js  |  the function for the question body  | Javascript/CSS/HTML/Bootstrap |
    |  scoreResultJS.js  |   the function for the Result body  | Javascript/CSS/HTML/Bootstrap |
    |  viewHighscoreJS.js  |   the function for the View HighScore body  | Javascript/CSS/HTML/Bootstrap |
    |  bootstrapquestionPool.js   |   store and generate the questions for quiz  | Bootstrap  |
    |  bslocalStroage.js   |   the fuction to save and load the highscore list | Bootstrap  |
    |  cssstrapquestionPool.js   |   store and generate the questions for quiz  | CSS  |
    |  csslocalStroage.js   |   the fuction to save and load the highscore list | CSS  |
    |  htmlquestionPool.js   |   store and generate the questions for quiz  | HTML  |
    |  htmllocalStroage.js   |   the fuction to save and load the highscore list | HTML  |
    |  jsquestionPool.js   |   store and generate the questions for quiz  | Javascript  |
    |  javascriptlocalStroage.js   |   the fuction to save and load the highscore list | Javascript  |

Please visit [https://rickyfuk.github.io/uwbootscamphomework4/](https://rickyfuk.github.io/uwbootscamphomework4/) for the site.

For the feature of the site, please visit the [Features](#features) section for more details.

# Screenshots
![screenshot](https://github.com/rickyfuk/uwbootscamphomework4/blob/master/assets/image/screenshot.PNG?raw=true)

# Features
In this project, the following features have apply to the site:

1. Favicon have been added for the page
2. 4 Different Quizes for the player to choose:
   1. Javascript
   2. CSS
   3. HTML
   4. Bootstrap
   Player can choose the quiz by clikcing the button
3. The player can have the following 3 options after they enter the landing page of the quiz
   1. "Start Quiz" - go ahead to start the quiz
   2. "View Highscore" - go to highscore page for the highscore table
   3. "Main Menu" - return to the main menu for the Quiz options
   
    Note : The button will change the layout regarding to the following screensize

    |   Screen Size   |          Layout           |
    |   :----------:    |   :-----------------------:  |
    |   Below Large   |   The buttons stack vertically   |
    |   Equal or Above Large   |   The button stack horizontally  |


4. When the player enter the quiz, 75 seconds will be allow for the player to answer 5 questions.
5. When the player choose the answer, the following features will come with the answer
   1. The time will reduce 10 seconds if the answer is wrong
   2. A sound effect will come with the correct or wrong answer after the player pick an answer
   3.  The following message will appear under the choice after the player pick an answer
       * "Correct" - when the answer is True
       * "Wrong! The correct answer is XXXXX " - when the answer is False (XXXXX indicate the right answer)

6. A "View Highscore" button located on the right bottom of the page - player can visit the Highscore table at anytime during the quiz and the quiz will stop
   
7. An "All Done" message will pop up after all question is answered
    ![alldone](assets/image/alldone.png)
   otherwise, a "Time Up" message will pop up if the allowed time is over (i.e. 75 seconds in this setup) 
    ![timeup](assets/image/timeup.png)

8.  The player have to entered at least one character for their initial in an input box in order to submit their initial to the highscore database. 
   * A message "Thanks for playing" will appear under the input box
    ![success](assets/image/success.png)
    * A message "Please input your initial" will appear under the input box if the player did not enter any character and press "Submit" button  
    ![errormessage](assets/image/errormessage.png) 
9.  The player can remove the highscore record by clicking the "Clear Highest score"
10. The player can return to the quiz main body (quiz landing page)
    

# Code Style
Standard

## <span style="color: rgb(220, 105, 1);"> Description for the code</span>
A general description for the every section on the top of the code to breifly explain the puopose of that section and some note for the section details.

  <div>
  <img src="assets/image/descriptionexample.png" alt="Description Example">
   *example for the section description*
  </div>

For easier reference, the location of the function will place inside its description
 ![functionlocation](assets/image/functionlocation.png) 

 * From the above example, this means that the location of the function is located in the part "qJS 8" insdie "questionJS.js" file
 
 
 * If the function located in the same js file, no prefix (i.e. questionJS in this example) will be shown
 ![functionlocation2](assets/image/functionlocation2.png) 


 * For function "saveToLocal" and "loadFromLocal", 4 different js file have been used for 4 different local storage location
      1. javascript - jsplayerResultArray
      2. css - cssplayerResultArray
      3. html - htmlplayerResultArray
      4. bootstrap - bsplayerResultArray    


# Technology
The following technology have been used for this project:

  1. HTML
  2. CSS
  3. Bootstrap (Version 4.5)
  4. JavaScript

# Code Example
Below are some example for the code has been used and the corresponding outcome:

1. To hide or show the content of different body parts, "setAttribute" with "style" and "display:none" or "display:block" has been used.
    ```Javascript
            // hide a part
             mainBody.setAttribute ("style", "display:none;");
            // show a part
             mainBody.setAttribute ("style", "display:block;");
    ```
2. To add a sound effect for the player choice with right or wrong response, the sound track has embedded into the html file and the execution script has placed in the questionJS javascript file.
   * The embed code in html
   ```html
    <!-- the sound effect link  -->
    <audio id="correctAnsAudio"><source src="assets/audio/Interface-beep-up-sound-effect.mp3"></audio>
    <audio id="wrongAnsAudio"><source src="assets/audio/Fail-sound.mp3"></audio>
   ``` 
   * The script to run the sound track   
    ```Javascript
         // play correct sound effect
            correctSound.play();
        // play wrong sound effect
            wrongSound.play();
    ```
3.  Some function use setTimeout function to delay the execute time in order to let the player to read the response,
    ```Javascript
        // wait for half second and do the following action:
        // 1. hide the result body
        // 2. show high score body
        // 3. reset the input value and message to null
        setTimeout(function(){
            // hide the result body (function sRJS 5)
            hideResultBody();
            // show high score body (viewHighscoreJS - function vHJS 5)
            showHighScoreBody();
            // reset the result input as empty
            resultInput.value = ""; 
            // reset the resultMessage
            resultMessage.textContent =""; 
        },500); 
        } 
    ```
4. As the chorme default setting, the "Clear Highest score" button will stay in focus status after it has been clicked. To fix this issue, "mousedown" and "mouseup" have been used instead of "click" 
   ```Javascript
   // set the click event to execute the clearHighScoreHistory function (function vHJS 3)
        // Note : the button will stay in focus status after click when it is a click function (due to chrome default features)
        // the walkaround is using mousedown and mouseup
    clearRecord.addEventListener("mousedown", clearHighScoreHistory);
    clearRecord.addEventListener("mouseup", function blurInput() {
        document.getElementById('clearRecord').blur();
      });
    ```
# Credit
For the sound track, please allow me to give the credit to Alexander who is the artist of these free sound tracks owner. Details could refer to [Orange Free Sound](http://www.orangefreesounds.com/)
 
# Test
1. The site have been tested by open with small/medium/large device respectively.
2. The site have been tested by a HTML validation service - [W3C](https://validator.w3.org/)

# Status
Project status: finished

# Future Plan

Plan for the future development of this site:
1. Add additional character classes and races to enhance the game play.
2. Add the ability to save characters so multiple users could save characters or one user could save multiple characters using one device.
3. 

# Create By
Created by Chung Hei Fuk, David Deaton, Karl Behrens, Alex Madrigal and William Wassmann