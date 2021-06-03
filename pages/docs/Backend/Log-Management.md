# Log Management

## Change Log Settings

You can set the following environment variables on the backend to change the logging behaviour:

<br />

ENABLE_CONSOLE_LOGGING (Boolean):
Default: True

Enables logging to the console   

<br />

ENABLE_FILE_LOGGING (Boolean):
Default: True

Enables logging to a file  

<br />

LOG_DIR (String):
Default: "./logs" 

Directory in which your logs are stored  

<br />

MAX_LOG_AGE (Number):
Default: Old files are not removed

Set the maximum number of days to retain old log files.  

<br />

MAX_LOG_SIZE (Number):
Default: 100

Sets the maximum size in megabytes of the log file before it gets rotated  

<br />

MAX_LOG_BACKUP (Number):
Default: Old files are not removed

Sets the maximum number of old log files to retain  
