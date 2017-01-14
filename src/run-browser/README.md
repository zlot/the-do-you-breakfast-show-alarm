This file uses Nightmare to run an electron instance and display the Mixcloud widget.

It will close the instance when the body element receives a "close" class.

This is handled by `server.js`.

This file is run via `cron`, every morning Mon-Fri.

NOTE: nightmare library had to be modified to enable audio. 
In `node_modules/nightmare/lib/runner.js`:
     win.webContents.setAudioMuted(false);

# crontab
my crontab entry to have this run every morning looks like this:

    @reboot cd ~/Desktop/wakeup-to-the-do-you-breakfast-show/; npm start > ./debug.log 2>&1

    10 8 * * 1,2,3,4,5 cd ~/Desktop/wakeup-to-the-do-you-breakfast-show/src/run-browser; ./cron_script.sh > ./output.log 2>&1 

