# Project Guidelines

Welcome to Project Week! Here is a list of Code Fellows' best practices for proper Git and GitHub workflow with your project team.

*Note: Attendance is taken every scheduled meeting session at the usual time, including during project weeks.*

Before writing any code, take time to plan with your team. Make sure you are all in agreement about the goals of your application. Once you settle on an idea, prepare to pitch your idea to your instructor.

## Project Requirements

### Wireframes
Once you have a concept in mind, create visual representations of your application, called wireframes. A wireframe can be drawn on the whiteboard, on paper, or with online tools. Each page or view of your application should have its own wireframe and some pages may have multiple wireframes to illustrate changes based on user interaction. For example, you may have a wireframe to show how a page appears when it loads, and a second wireframe showing that same page as it will appear when a user selects an option from a drop-down menu or clicks a button.

_Why:_
> Wireframes provide a visualization of your final application. This is useful to make sure the team is in agreement on the general appearance of the application and can help to identify potentially unpleasant user experiences.


### Documentation

Your project should be documented on GitHub and within your code base.

On GitHub, create a `README.md` file as the main landing document of your repository. Continue to update it as your project evolves.

At a minimum, your `README.md` should include the following:

- The name of the project
- Names of the team members
- A description of the project
- The overall problem domain and how the project solves those problems
- Provide instructions that the user may need to follow in order to get your application up and running on their own computer.

Within your code, document with meaningful comments. For example, a comment might provide an overview of what the function beneath it is doing, or describe the relationship between two variables.

Comments should be updated as necessary. Remove all unused, commented-out code before committing to GitHub.

### File Structure

Before you scaffold your files within your repo, determine how you will organize your project. Your files should be organized into folders in a meaningful manner. For example, all of your CSS files should be within a `css` folder.

Here is an example file structure:

```bash
.
├── about-us.html
├── index.html
├── quiz.html
├── css
|   ├── about-us.css
|   ├── home.css
|   └── quiz.css
└── js
    ├── home.js
    └── quiz.js
```

### Code Style

Follow the code style you have learned throughout this course. Ensure that the team is using meaningful and descriptive names for all files, variables, function names, etc. Follow best practices with casing, spacing, and indentation.

Your team should decide on standard naming conventions to use throughout the project and hold each other accountable to these standards. Do not use funny or offensive names. Write code that you will be proud to show a future employer.

The code base should also follow similar code organization from file to file. For example, all the files that affect application styling should follow similar patterns and syntax.


## Stand-up

Every day, the instructional team with circulate to your group for a formal stand-up. Stand-up should take approximately 10-15 minutes per team. Sometime, they will opt for a second stand-up later in the day.

_Why:_
> Stand-ups give both your project team and instructional team insight into the current status of your project and the progress the team hopes to make each day.

During stand-up, each team member will stand up and take turns discussing three points:

> 1. What you personally accomplished yesterday
> 1. What you plan to accomplish today
> 1. Anything that is blocking you from making progress


## Daily Goals

Day 1:
- pick a team leader
- pick a name for your team
- create slack channel for your team
- pitching ideas: once you find and agree on one, send us on Slack that you're ready in order to join your room
- start with the wireframe & design (will talk more about this later on today)
- create new organization and repo (will talk more about this later on today)
- begin scaffolding your files, and build out your requirements. Deploy your site, then begin to build features.

Day 2+3: (Wireframe + Design) This should be a big build-out day of features.

Day 4: Continue to complete design and start working on your project (coding) + Deployment

Day 5+6+7: Code (HTML+CSS+JS) 

Day 8: Code + Mock presentations 

Day 9: Presentations

## Git

The entire team should follow the same process for synchronizing the code base on GitHub and on their local computers.

The main branch is the source of your deployment, which should only contain fully functional code. A development branch should be created as a main source for external branches to be merged into, and only the development branch should be merged into main.

All work should be on a feature branches with a meaningful name. Feature branches should be created off of the development branch. When the feature is completed, create a pull request from your feature branch to the development branch.

When you start a new feature and any time a pull request is merged into the development branch, make sure that your local development branch is up to date. Check out the development branch, then pull the development branch. Create your new branch off of the updated development branch.

Always make sure you are working off of the most up-to-date code base. This will prevent writing redundant code or overwriting code that you or another team member wrote.

If a pull request from a teammate has been merged and you working on a branch but are not ready to push your changes, you can still pull those changes while continuing to work on your feature branch. To do so, add and commit any changes on your local feature branch. Check out your main or development branch and pull the changes. Then, check out your feature branch and run the command `git merge main` if the main branch was pulled and `git merge development` if the development branch was pulled.

## Deployment

Deploy your project on GitHub Pages and be prepared to present from the deployed version of your site.


## Presentation Prep

Your team should practice their presentation prior to the final presentation day. This is typically scheduled by the instructional team. During the practice presentation, the instructional team will provide constructive feedback about the flow of the presentation and appearance of the application.

Create a slide deck/power point for your presentation. Have the beginning slides be an introduction to your team, followed by a slide to kick off your demo, then an ending slide to prompt for question.

Decide whose computer to use during the presentation. Test a backup computer as well, just in case.

The presentation should be approximately 15 minutes long, including some time at the end for questions. Present from the deployed site. **Each member should introduce themselves with their personal pitch.You've praticed it, now use it!** The "About Us" page provides a great backdrop for this portion of the presentation.

Each member of the team should have a speaking part. It is okay to use note-cards if you are nervous about forgetting what to talk about. Some of the areas to discuss include:

- An introduction of the project and the problem domain, including the team's solution
- A demonstration of the application's functionality
- The team's approach to planning and communication throughout the week
- A technical obstacle or two and how those obstacles were overcome
- A portion of the final application that each team member is particularly proud of
