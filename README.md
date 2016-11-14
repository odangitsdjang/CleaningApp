CLEANING WITH FRIENDS - Clean comfortably with your roommates! 
=======================
An app designed for CSE 170 by Chu Jang, Qing Hu, Sarmed Chaudhry.
Main framework: Node.js/Express/handlebars/MongoDB


Using MongoDB: 
--------------
In order to install MongoDB to get it to work on localhost, install it from brew,
Then change mongod path like so: mongod --dbpath /PATH/TO/THE/DATABASE.
Run "mongo" and "show dbs", you will find CleaningApp. "use CleaningApp" 
And then you can access the database.

additional npm used:
------------
1. Express-validator
2. connect-flash
3. passportjs to authenticate
4. bcryptjs to hash
