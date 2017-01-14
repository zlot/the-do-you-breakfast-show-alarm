#!/bin/bash

echo "Running node index.js\n"

export DEBUG=nightmare*

# will force nightmare to run electron on display, even if script is run via cronjob or remote ssh session
export DISPLAY=:0

echo "debug $DEBUG\n"

node index.js


