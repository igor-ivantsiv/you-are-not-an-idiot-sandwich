
![IronHack logo](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# You are not an idiot sandwich

## Table of Contents

### Introduction

- [Introduction](#introduction)
- [The Team](#the-team)
- [Project organization](#project-organization)
- [React features](#react-features)
- [Set it up](#set-it-up)
- [Submit it to revision](#submit-it-to-revision)
- [Contributing to Not an idiot sandwich](#contributing-to-not-an-idiot-sandwich)

You are not an idiot sandwich is our SPA recipe website made with React, CSS and HTML.

We seeked to build a functional, reliable and user friendly webpage to anyone who would like to have a recipe site where you could edit existing recipes and delete the ones you don't like, also you could go into details of a fully description of the recipe itself.

### The Team

![Igor Ivantsiv](https://media.licdn.com/dms/image/C4D03AQE0LjJcFBbA9w/profile-displayphoto-shrink_800_800/0/1597045454391?e=1725494400&v=beta&t=omE_B4vQiVKVbc4BQ6-fW75oZW6ar6WycOAi3lUilGs)![Santiago Mora](https://media.licdn.com/dms/image/D4D03AQGI9Ar-MFyllA/profile-displayphoto-shrink_800_800/0/1689816326993?e=1725494400&v=beta&t=xxTwYppOd_CYrqyv5WruQGbBVRBM1a76yf8mL-ebanY)

### Project organization

Serving the well practice purpose, we first create folders for the corresponding uses. First, the assets, where the data and images will be imported from. In here we will retrieve the images, logos or data that will be displayed later on.

Then, we kept in mind the importance of dividing "components" inside a folder, so we create one and add inside it the footer, form, list, the item list, navbar and the sidebar. In this way the webpage will display the needed components.

Inside the pages, we want to display different kind of content and serving different purposes. About, AddRecipe, EditRecipe, HomePage, NotFound and RecipeDetails are the different pages you'll encounter.

We made use of the Routes, Route and Link for giving access to different pages on the web, with these, we can interconect them and avoid reloading the page. Then, in the App.jsx, we add every element from the components and their paths to the desired pages.

Finally, in the main.jsx we can see the App.jsx element, encapsulated on the Router. In each case, we imported the necessary elements.

We have some functionalities as adding a recipe (as a form) or editing a recipe. Also, we can navigate back to the main page by clicking on the navbar, show and hide the menu through a click and accessing any food, by clicking on it, delete it with the delete <button> or see the details depending on the kind of food we want more information about.

### React features

- Router, Routes, Route and Link
- Asynchronous promises
- Functions and callbacks
- Forms
- useParams()
- useState()
- HOF(.filter())



#### Contributing to Not an idiot sandwich

First time contributing to Not an idiot sandwich?

##### Set it up

- Fork this repo
- Clone this repo
- Open this repo and start!

> cd you-are-not-and-idiot-sandwich
> npm i
> npm run dev (to watch the visual result of your code, copy and paste the url provided after this code runs)


##### Submit it to revision

Remeber the steps!

> git add .
> git commit -m " (What you did modify) "
> git push origin master

Now is the time for creating a Pull Request, wait until our team checks the changes and for us to thank you for your time!

- Fork our repository from GitHub
- Clone the repository
- Once you have it, make the changes you think it can improve the web
- Remember to use git add <file name> or git add .
- Rememeber to commit the changes
- Finally write: git push main/origin
- Once you have done it, navigate to your repository on GitHub and make a pull request, our team will be happy to see and apply the suggestions you made!