![Breaking Iceberg Logo](/src/www/img/logo-small.png)  
# Icebreaker
Icebreaker helps create a sense of community between people who are meeting for 
the first time.

# Table Of Contents
- [Overview](#overview)
- [Running](#running)
- [Developing](#developing)
- [Icons](#icons)

# Overview
Icebreaker is made up of 2 components: client & server.  

A NodeJs server provides both these components.  

# Running
To run Icebreaker complete the following steps:

1. Get the most recent version of the code
	- Run `git pull origin <branch>`
2. Install NPM components
	- Run `npm install`
	- Only have to run this the first time, and every week or so
3. Start NodeJs server
	- Run `npm start`
4. Navigate to the URL in the console
	- Ex:
	  ```
	  $ npm start
	  > icebreaker@0.1.0 start /Icebreaker
	  > node src/main.js
	  listening on port 8000
	      navigate to localhost:8000 for development
          ```
	  In this case you should navigate to [localhost:8000](http://localhost:8000).

# Developing
## Get The Latest Code
When you start a new task you should ensure you have the latest code.  

Complete the following steps to retrieve the latest code with Git:

- Switch to the `master` branch
	- Run `git checkout master`
	- This is the branch all new features should be created from
	- It will always have well running code
- Retrieve the latest code from GitHub
	- Run `git pull origin master`
	- This will download changes others have made since you latest updated

## Make A New Branch
Once you have the latest code you should make a new branch to work on the task 
in.  

To make a new branch complete these steps:

- Pick a new branch name
	- Pick a short name that describes what you are doing
	- All lowercase
	- Replace spaces with dashes
	- Aim for 2-3 short words
- Create the new branch
	- Run `git checkout -b <branch name>`

## Work On The Feature
As you work on the feature in your new branch you should commit your work.  

To save your work complete the following steps:

- Commit your work
	- Run `git commit -m "<short message describing changes>"`
- Push your commit to GitHub
	- Run `git push origin <branch>`

## Opening A Pull Request
To merge your code back into the `master` branch complete these steps:

- [Open A Pull Request](https://github.com/CS275-Icebreaker/Icebreaker/compare)
	- Select `master` as the "base branch"
	- Select your branch name as the "compare branch"
	- Describe, in a bullet point list, the changes you made
- Request a code review
	- Ask someone to review your code
	- Message the Slack channel with a link to your Pull Request

## Reviewing A Pull Request
If another team member asks the Slack channel to review a Pull Request. And 
you wish to review a Pull Request.  

Complete these steps:

- Open the Pull Request	
	- Click on the link provided in the Slack by the code review requester
- Navigate to the "Files changed" tab
- 

# Icons
Icons provided by [Icons8](https://icons8.com).
