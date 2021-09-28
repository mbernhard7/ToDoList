## Design Overview

We began our project with sketches of our to-do list application on paper. This draft included only two buttons: one to add an item, and one to remove an item. We also toyed with the idea of adding an edit button. We wanted to start as simple as possible, run some user testing, and update our to-do list layout accordingly.

![First Draft](./images/mockups/FirstDraft.jpg)

After making the initial paper draft, we then made mockups on Balsamiq to use for our user tests. We handed the Balsamiq slides to our test users (roommates), told them what the required tasks our UI should support, and observed how they navigated the different screens.

![First Draft1](./images/mockups/NoTasks.jpg)
![First Draft2](./images/mockups/AddTask.jpg)
![First Draft3](./images/mockups/OneTask.jpg)
![First Draft4](./images/mockups/EditPage.jpg)

After doing a user test with both of our roommates, we found that the process of getting to only uncompleted tasks did not exist. We decided to tweak our design so that getting to uncompleted tasks could take less than 2 clicks, following the 80-20 rule. We also wanted to implement a way for users to switch between all tasks and uncompleted tasks to monitor daily progress and see what tasks have been accomplished throughout the day.

As a result, we made a second version of our paper draft. Here, we made edit and add buttons across the top, with a toggling bar at the bottom where users can jump from uncompleted tasks to all tasks.

![Second Draft](./images/mockups/SecondDraft.jpg)

We then used the notes app to make some UI mockups of our HTML files. Looking specifically at the edit task, we had a first version where users could edit one task at a time. We thought this format could be useful for users who needed to edit tasks, without running the risk of accidentally deleting multiple tasks:

![First Draft](./images/mockups/EditFlowInitial.jpg)


We ended up deciding against this design, since we found this layout to be cumbersome for users who wanted to edit multiple tasks at once. While it did allow for more security (users could not accidentally delete multiple tasks) we found out via more roommate user testing that the inability to edit multiple tasks at once without more key-presses was a bigger concern than that of accidental task deletes. 

The new design also allowed the UI to be more simple, since one edit button would cover the function of editing all tasks. Here is the wireframe for the design we ultimately went with, except that we moved the tab switcher to the bottom since it was hard to click at the top:

![Second Draft](./images/mockups/EditFlowFinal.jpg)

Finally, after submitting our first pull request, we received some feedback from Professor Rhodes that the "save" button may not have been the most clear for users. By changing this button to say "done" we attempted to mitigate confusion about how to return to the home screen and exit the editing mode.

### Challenges we faced:
One of the most difficult parts of this project for us was finding the best UI for the to-do list. There were many options that seemed to function just fine, but weighing the pros and cons of different UI's was one challenging component. 

We also found that small changes to the CSS could potentially affect many components of our to-do list if we weren't careful, so we made sure to be purposeful about the labeling of our id's and classes.

### What we're most proud of:
One of the things we're most proud of is the ability for users to add tasks, delete tasks, view all uncompleted tasks, and view all tasks (uncompleted or not) all within 3 key presses. 

We also were proud of how critical we were with design iteration. We went through many versions of our to-do list. 

#### In an empty list, create an item named "Buy new John Grisham book"
Screen at the beginning of task (user opens up to-do app):

User clicking on plus icon leads to next screen.

![Screenshot](./images/screenshots/screen1.jpg)

Screen during task:

User typing in "Buy new John Grisham book" and tapping "Add Task" leads to next screen.

![Screenshot](./images/screenshots/screen2.jpg)

Screen after task:

User is able to view task that was added on home screen of to-do app.

![Screenshot](./images/screenshots/screen3.jpg)

#### In a non-empty list, create an item named "Eat Lunch"
Screen at the beginning of task (user opens up to-do app):

User clicking on plus icon leads to next screen.

![Screenshot](./images/screenshots/screen4.jpg)

Screen during task:

User typing in "Each Lunch" and tapping "Add Task" leads to next screen.

![Screenshot](./images/screenshots/screen5.jpg)

Screen after task:

User is able to view task that was added on home screen of to-do app.

![Screenshot](./images/screenshots/screen6.jpg)

#### Mark the item named "Call Mom" completed (assumes there exists an item named "Call Mom").
Screen at the beginning of task (user opens up to-do app):

User clicking on either the checkbox or the words "Call Mom" leads to next screen.

![Screenshot](./images/screenshots/screen7.jpg)

Screen after task:

User is able to view that the "Call Mom" task was completed.

![Screenshot](./images/screenshots/screen8.jpg)

#### Rename the item "Text John" to "Text John about bank statements" (assumes there exists an item named "Text John").
Screen at the beginning of task (user opens up to-do app):

User clicks on the edit button to move to next screen.

![Screenshot](./images/screenshots/screen9.jpg)

Screen before renaming:

User sees "Text John" task has become a text box that is editable, and clicks on the box to begin editing on next screen.

![Screenshot](./images/screenshots/screen10.jpg)

Screen after renaming:

User has changed "Text John" to "Text John about bank statements", and clicks done to move to next screen.

![Screenshot](./images/screenshots/screen11.jpg)

Screen after task:

User's task has saved to "Text John about bank statements"

![Screenshot](./images/screenshots/screen12.jpg)

#### Show only uncompleted items.
Screen at the beginning of task (user opens up to-do app):

User clicks on "Uncompleted" widget at the bottom of the app to get to the next screen.

![Screenshot](./images/screenshots/screen13.jpg)

Screen after task:

User sees only uncompleted tasks. 

![Screenshot](./images/screenshots/screen14.jpg)

#### Delete all completed items.
Screen at the beginning of task (user opens up to-do app):

User clicks edit to move to next screen.

![Screenshot](./images/screenshots/screen15.jpg)

Screen during task:

User presses on "delete all completed" button to move to next screen.

![Screenshot](./images/screenshots/screen16.jpg)

Screen during task:

Completed tasks have been deleted, user presses "done" button to move to the next screen.

![Screenshot](./images/screenshots/screen17.jpg)

Screen after task:

User's to-do list has been updated by deleting all completed tasks.

![Screenshot](./images/screenshots/screen18.jpg)
