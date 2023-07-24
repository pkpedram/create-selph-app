# Create-Selph-App

<div align="center"><img style="width:350px" src="./logo.svg" alt="Selph logo"/></div>

Having a hard Time becoming a **MERN Stack developer**? with **Selph** you only need to **configure one file!**

# Installation
**Create-selph-app** is now available on npx! just run the command below in a directory in your computer.

    npx create-selph-app myapp

or if you want to use it as a npm global package:

    npm i create-selph-app -g
    
	  /* cd to directory */
	  
	create-selph-app myapp  

*please note that you should have **mongodb** installed on your system for Selph to use it as a database.
	if you don't please install it first from https://www.mongodb.com/docs/manual/installation/

## What does Selph do?

as you may know most of the projects needs a full-stack developer or two developers for each stack!
but with **Selph** you just type what you want from the backend in the **selph.config.json** and it generates it for you! and it also gives you the code to you to explore in it!

## Usage

So as it was said before you only need to say what you want. So you need to declare your wanted modules and its data model.
if you open **selph.config.json** you'll see something like this:

	   

    {
	    "name": "myapp",
	    "apiPort": 5000,
	    "https": false,
	    "modules": [
		    {
			    "name": "test",
			    "model": {
				    "title": "String",
				    "link": {"type": "String"},
				    "stepNumber": {"type": "Number", "default": 0}
			    }
		    }
	    ],
	    "baseModel": {
	    "isActive": { "type": "Boolean", "default": true},
	    "created_date": {"type": "Date", "default": "new Date()"}
	    }		   
	    
    }
so actually what needs to be declared is your modules. so write a new object with a name and a model.
you have two ways to declare the type of your model property:
first way: 

    {
    ...
    "property": "data type",
    ...
    }
   
   or:
   

    {
    ...
    "property": {"type": "data type"},
    ...
    }
    
## Different data types

|Data Type| default type  |
|--|--|
|  String | String  |
|  Number | any number value: 0, 1.23, etc.  |
|  Date | "new Date(your date)"  |

for now there are only these data types but we will update soon


## How to declare a foreign key

you only need to set your property data type as the other module name.
For example:

    {
    ...
    "modules": [
		    {
			    "name": "blogPosts",
			    "model": {...}
		    },
		    {
			   "name": "blogPostsComments".
			   {
			   ...,
			   "relatedBlogPost": { "type": "blogPost"},
			   ...
		    }
	    ]
	...
	}


## Custom DB configuration

there is an optional selph config property in your **selph.config.json**:

    {
    ...,
	    "db": {
		    "name": "<YOUR_OPTIONAL_NAME> (default is: <your_appname>_db)",
		    "port": "<YOUR_OPTIONAL_PORT> (default is: 27017)",
		    "user": "<YOUR_DB_USERNAME> (default is your app name)",
		    "password": "<YOUR_DB_PASSWORD> (default is: 1234)",
	    }
	....
    }

*please note each property is optional.
# Back-End Documentation

there is a Swagger documentation for you to test your **generated back-end** on:

    localhost:<apiPort>/swagger/

## Contact

If you want to contribute on **Selph**, or if you have any question you can always contact me through this email address: pkpedram80@gmail.com

> have a great day!
