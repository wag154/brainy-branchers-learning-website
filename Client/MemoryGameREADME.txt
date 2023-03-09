
# Page Functionality

The functionality of the memory game is kept all within 1 page.

This page has funcitonality for 2 timed sequences followed by a user input and finally a feedback response.

the premise of the game is that a text in spanish will appear on screen for 1-2 seconds. Once it disappears, 
the user's job is to write the english translation of that spanish text and submit it. the program will identify the 
user points based on the number of keywords that match with the actual english translation of the spanish text. 
They can also lose points if they add a word that was not in the translation or a any word in the translation that 
they missed.

The keywords that are in spanish and english will be highlighted in green to make it obvious what is a keyword 
and what is not.

the json file is an array of objects, each object carries a sentence in spanish, a sentence in english which is the 
translation, and 2 arrays, each have hardcoded number values that represent the index of keywords in the spanish and 
english text.

# Setup

Look ing at the ForeignLang-Memory.js file, the beginning of the file has to deal with importing 
varioys modules and packages. The start of the program is a function call at the very bottom of the file 
which calls the fetchMemoryData() function.

This function will try to fetch data from a json file and store it locally. Currently the json holds 5 pieces
of data (or objects) and webpage will randomly display 1 If the try fails, a catch is in place 
which will take 1 piece of data which is hardcoded therefore it will always be the same.

If the try succeeds, the next function to be called is generateRandomData() with the data passed in. This function 
will use built-in math libraries to generate a random number from 0 to the length of the array of objects. Then it 
will return a randomly picked object from the array of objects back to fetchMemoryData().

Back in fetchMemoryData(), the next 2 function calls are the same irrespective of whether the try or catch succeeds. 
The getJsonText() will fetch the spanish text value from the data object passed into it. It will display this content 
in the HTML but currently that element has it's display hidden.

# Timed Sequence 1

fetchMemoryData() then calls showCountdown(). This simple function shows a number ticking down from 5 to 1 to get 
the user prepared to seeing a text they have to memorise. Each tick is 1000ms and when it reaches 0, it hides the 
elements in HTML which show the countdown and then this function calls the showMemory() function. 

# Timed Sequence 2

This function reveals the previously hidden spanish text that was retrieved from the data object. Just like the 
showCountdown() function before it, it simples counts from 1 to 0 in background and once the time is up, it calls 
the showForm() function after hiding the spanish text again.

# User Input

showForm() displays the user submit form where the user has to enter the english translation for the spanish text 
they briefly saw through an event listener.

When the event listener detects the user has submitted an answer, it calls the acquireUserInput() function. This 
function checks to see if the user has not entered an empty string or a no answer at all. If this is the case, 
they are given an alert and sent back to the showForm() function to repeat the process.

If they entered anything else, the program progresses to the showFeedback() where it will terminate its execution 
(but will call other functions).

# Feedback

showFeedback() takes the user feedback from the event listener and the user data that is stored in a global variable. 
A list of the spanish and english words from the data object are created and passed into the highlightKeywordsInGreen(). 
In preparation before this function, span tags are marked with having a specific class name. Inside the 
highlightKeywordsInGreen(), each word in spanish and english is created through a span tag and appended to a tag in 
the HTML that will be shown to the user. Specific span tags that are identified to be the keywords as denoted in 
the data object are given the class name. This class name in css has a property to make its font green. The end result 
will be the spanish and english text from the data object to be displayed in the webpage with the keywords in green.

Back to showFeedback(), a new list is created that will hold the english keywords from the data object. The JSON file 
only shows the index of where the keywords are placed, not the actual the word, this list is to hold the actual work. 
showFeedback() calls processEnglishKeywords() which has the propose of return an array that has all of the english 
keywords from the data object.

In showFeedback(), user input from the form is processed so that it each word is also kept as a seperate element in an 
array. This is done through the processEnglishKeywords() functions. This array will make it easier to compare the 
english tranlsation from the data object with the user's own english translation.

The next aspect is to get the user points by processing how many keywords they got correct and how many words they added 
that is not in the english translation as well as any keywords they missed. This is all done through the use of the 
noteRightWrongAnswers() by passing in different arguements.

The first call of the noteRightWrongAnswers() function is to get the correct keywords the user has written in their 
text that matches the english translation in the data object. This will return 3 points for each keywords that matches. 

The second call will get any additional words the user has put in their input that does not exist in the english 
translation. This will return -0.5 points for each new word deteced.

The third call of this function will look for any english keywords in the data object that the user missed in their input, 
this will return -1 points for keywords missed.

Finally, the user is alerted of how the points are calculated. Then the displayPointsAndFeedback() function is called. 
This function will append the user input and their points to the HTML. These tags are previously hidden but will now 
be revealed.
