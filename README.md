# Gravity-Flipper-Endless-Runner
A small, simple Unity game. Jump and reverse gravity to avoid the spikes.

This is the first game I worked on that could be considered "complete." There are likely some bugs remaining and it is a very simple game, but all of the basic elements are there. This was completed in August of 2014 and took about 21 hours to make. I believe every bit of it (including the beautiful visuals) was created by me.

The concept is simple: it is an endless runner, press space to jump over the spikes as you automatically move forward. The "twist" is that the spikes are on both the ground and the roof. Some are impossible to jump over, so you must press left control or left mouse to invert gravity and run along the roof. It *should* be possible to run forward endlessly, though I may have missed a bad floor/roof tile combo.

The code is fairly simple (keeping in mind that this was an early project, there may be easier ways to accomplish this). I created various tiles with different sets of spikes and placed them in an array. I then used simple function to randomly select a bottom tile then a semi-random top tile based on the selected bottom one (so that the tile combo doesn't create an impassable set). A scoring script keeps track of your lives (you get 3 chances per game) and your longest distance, both in this particular game and by storing the highest all time in player prefs. The rest of the code is pretty straightforward, setting up the UI and menus, and moving the camera and background clouds.

It is basic, but I think a decent first complete, independent project. Previous to this, I had completed tutorials, but being walked step by step through the process is not nearly the learning experience that this proved to be. This is also the reason I chose to forego the common suggestion of creating a clone of something like snake or asteroids--it is too easy to get specific help and directly applicable sample code.

Anyway, I do not know if 21 hours is a respectable length of time in which to make a game like this, but considering the amount of work I had done previously without ever actually completing a game, it is at least a meaningful accomplishment for myself.

To just play it you can download the Executable folder. The rest of the files (minus the git files) are the actual Unity 5 project.


Steven Weathers
