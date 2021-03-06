![Breaking Iceberg Logo](/src/www/img/logo-small.png)  
![Drone CI Status](http://drone.noahh.io/api/badges/CS275-Icebreaker/Icebreaker/status.svg)  

# Icebreaker
Icebreaker helps create a sense of community between people who are meeting for 
the first time.

# Table Of Contents
- [Overview](#overview)
- [User Guide](#user-guide)
    - [Hosting a Room](#hosting-a-room)
    - [Joining a Room](#joining-a-room)
- [Running](#running)
- [Developing](#developing)
	- [Getting The Latest Code](#getting-the-latest-code)
	- [Making A New Branch](#making-a-new-branch)
	- [Work On A Feature](#work-on-a-feature)
	- [Opening A Pull Request](#opening-a-pull-request)
	- [Reviewing A Pull Request](#reviewing-a-pull-request)
	- [Merging A Pull Request](#merging-a-pull-request)
- [Deployment](#deployment)
- [Icons](#icons)

# Overview
Icebreaker is made up of 2 components: client & server.  

A NodeJs server provides both these components.  

# User Guide
## Hosting a Room
To create a room for other to join complete the following steps:  

1. Navigate to the Icebreaker application in your browser
2. Click the "Create Room" button
3. Enter a name for your room

After you have entered your room information you will be brought to a screen 
showing the room information. Including a 4 digit room code other users should 
enter to join your room.

## Joining A Room
To join an existing room complete the following steps:  

1. Navigate to the Icebreaker application in your browser
2. Enter the 4 digit room code displayed on the room creators screen
3. Click the "Join Room" button
4. Enter your user information: Name, Major, Academic year
5. Select at least 10 topics to speak about
6. Wait for everyone else to select their topics
7. View your assigned groups

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
	- In this case you should navigate to [localhost:8000](http://localhost:8000).

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

## Work On A Feature
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
- Pull down the Pull Request's branch
	- Run `git checkout <branch>`
- Run the application
	- Verify it works
	- See if the new features from the Pull Request's description work
- Navigate to the "Files changed" tab of the Pull Request
- Click the green "Review changes" button in the top right
- Comment, Approve, or Request changes
	- Write a piece of text explaining your thoughts on the code
	- Submit it as a comment if
		- You don't want to formally request someone spend time 
		  changing their code
	- Submit it as an approval if	
		- You think the code is of good quality and will run in master
	- Submit it as a request for changes if
		- You think there are some parts of the code that could be 
		  improved

## Merging A Pull Request
Once a team member has reviewed your Pull Request GitHub will allow you to 
merge your Pull Request into the `master` branch.  

To merge your Pull Request complete the following steps:

- Navigate to your Pull Request on GitHub
- Press the "Merge pull request" button
	- This button can only be pressed if a team member has approved your 
	  pull request via code review
- Delete your branch
	- Now that your changes are merged you should delete your branch
	- Click the "Delete branch" button below where the merge button was
- Update your local computer
	- Switch to the master branch
		- Run `git checkout master`
	- Retrieve the latest code from master
		- Run `git pull origin master`
	- Delete your old branch
		- Run `git branch -D <old branch>`

# Deployment
Icebreaker is automatically deployed to Kubernetes via Drone CI.  

Some setup is required.  

## Drone CI
Make a copy of `.env.example` named `.env` and add your own `DRONE_TOKEN` value.  

Next add the following secrets:  

- `API_SERVER`: URL to Kubernetes API server
- `KUBERNETES_TOKEN`: Kubernetes API token
- `SECRET_PASSWORD`: General purpose secret value 
- `DOCKER_USERNAME`: Docker Hub username
- `DOCKER_PASSWORD`: Docker Hub password

Via the Drone CLI:  

```
$ drone secret add CS275-Icebreaker/Icebreaker \
	--name <key> \
	--value <value>
```

## Kubernetes
The application must be provided with certain production configuration values 
when run on the Kubernetes cluster.  

To set these values make a file named `config.production.js` and make it export 
these production specific configuration values.

Then run the following command to upload this secret file to Kubernetes:  

```
$ kubectl -n icebreaker create secret generic config --from-file <path to config.production.js>
```

# Icons
Icons provided by [Icons8](https://icons8.com).
