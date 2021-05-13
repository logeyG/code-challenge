# A frontend code challenge

This repository serves as a plain, forkable starting point for your frontend code challenge, which is intended to be an open-ended opportunity to show how you write code and solve problems.

In this challenge we would like you to access a JSON feed of the [most popular New York Times science articles](https://api.nytimes.com/svc/topstories/v2/science.json?api-key=Gwxln5M3geWlhR6UE0TY1FUWKSG3wCil) and use HTML, CSS and Javascript to create an interface to display them. Your solution should aim to fulfill the following requirements, in order of priority:
1. Display a list of articles.
1. Implement a search feature to dynamically filter articles.
1. Search terms should match against the following article attributes:
   1. title
   1. byline
   1. section
    
Your solution can use plain HTML, CSS, and vanilla JS, or you can use any languages, libraries, or frameworks you would like to achieve the task. We expect this project should take 2-3 hours, and would encourage you not to spend more than 3 hours on it.

You can access the API via the following link:  
https://api.nytimes.com/svc/topstories/v2/science.json?api-key=Gwxln5M3geWlhR6UE0TY1FUWKSG3wCil

Start by forking this repo. When you're finished please send a link to your public fork. In addition, if you can enable GitHub pages on your forked repo, so your solution can be easily previewed, that would be extra helpful.

# Usage

Install dependencies via `yarn install`
Run via `yarn start`
Run cypress E2E tests via `yarn test` (server needs to be running)

# Reflections

This was a fair and fun challenge! I ended up using React which I have 0 experience with and ended up being able to get everything working fairly quickly. For the table rendering I'm using `react-table`, I figured there's no reason to reinvent the wheel and the library comes included with things like searching, sorting, and pagination.

I'm sure you'll notice that the application UI is extremely basic! I didn't want to over-engineer here and wanted to just focus on fulfilling the 3 requirements and nothing else. I'm confident I could create something that looks a lot better, but don't think that is necessarily a good use of my time / showcases my skills.

I opted to spend the remaining of my 3 hours to set up Cypress, an E2E testing framework (especially considering my conversation with Brad on E2E testing). I have 0 experience with this framework as well, but found it fairly easy to setup, and was very surprised by the ease of use from a development point of view. You'll notice that all 3 requirements have E2E tests on them, although I will say I did mock out the request to nytimes because I was worried about API limits.