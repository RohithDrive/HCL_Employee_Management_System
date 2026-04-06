# HCL Employee Mananagement System
  A Full Stack application for managing employee data.

## Project Structure
  # In Git Hub Repository
    => Repository - HCL_Employee_Management_System
    => Branches -
      -> main - for Initial Setup of the project.
      -> rohith-branch - code workspace for me with frontend & backend folders along with future updation.
      -> ems_frontend - helps to merge with Netlify for Live.
      -> ems_backend - helps to mere with Render for Live
  # In Local System (Clone the rohith-branch for Git Hub Repository for Updations)
    => Repository - <folderName><HCL_Employee_Management_System>
      -> frontend - React Framework of 19.2.4 Version
      -> backend - Spring Boot (Java 17 / 21) with API & MySQL Database Integration

###Getting Starting
    # Backend SetUP
      1) Navigate to `/backend`
      2) Update `src/main/resources/application.properties` with your MySQL credentials.
      3) Run `mvn clean install`.
      4) Run the application via `EmployeeManagementApplication.java`.
      
    # Frontend SetUp
      1) Naviagte to `/frontend`.
      2) Run `npm install`. (for downloading react based node_modules, build folders)
      3) Run `npm start`.

####Git Commands
  -> `git status` - get the current state/ branch in the repository
  -> `git branch` - Check for your current branch
  -> `git branch <branch name>` - create a new branch
  -> `git checkout -b <branch name>` - create + switch to newly created branch.
  -> `git checkout <branch name>` - chenge to specific branch
  -> `git clone <repository url from github>` - Entire clone in local system
  -> `git clone -b <branch name> <repository url from githib>` - Entire clone of specific branch code in local system
  -> `git pull origin <branch name>` - get latest changed code from Git (Git -> Local).
  -> `git add . ` - Stage/Add all Changes(.  means from cd).
  -> `git commit -m "<your message>"` - Commit Changes
  -> `git push origin <branch name>` - push updated code to Git(Local -> Git).
  -> `git push -u origin <branch name>` - push updated code to specific branch in Git(Local -> specific branch in Git).
  -> `rm -rf <foldername>` - to delete a folder in the local syatem during git push or pull.

##### Git Hub Branches work flow for this project
	-> main nranch holds the initial set up of the react & Spring Boot Applications.
	-> Here rohith-branch holds all the frontend & backend code.
	-> The ems_frontend was pulled from the pull & merge from the rohith-branch/frontend
	-> The ems_backend was pulled from the pull & merge from the rohith-branch/backend