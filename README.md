# NOTES
**High value features for user**
Delegate issues to work on
Identify bugs/features

- animation ordering for collection

// BRANCH FORMAT 
git checkout -b jeff/PRO-567-FEATURE-OR-BUG



# Github API Test for JeffScottWard

## Technologies
- Next.js
- ThemeUI
- Github API
- useContext Provider (unused but avaiable with useStateValue hook - aka Redux easy-mode)

## Starting the Project
```sh
  # Clone the repo
  git clone git@github.com:axiomzen/cc_JeffreyWard_IssuesExplorer.git
  # Open the folder
  cd cc_JeffreyWard_IssuesExplorer.git
  # if you don't already have yarn (npm method is ok too instead of yarn)
  brew install yarn 
  # to run the install of dependencies
  yarn
  # to run the development server
  yarn dev
  # Now open your browser and go to localhost:3000
```

Authors Note: I had done a majority of the work in a seperate personal repo but then re-read the area about "development process" and figured you guys might want to see commit history - sorry about that. Added some commits to try to replicate that flow.

------------------------------

# Issues Explorer (front end)

> Please feel free to ask questions!

First and foremost, this project is meant for you to showcase what you can do with JavaScript and CSS.

We want to gauge your grasp of Javascript app development, CSS techniques (pre/post-processors are welcome), and how you organize your code. We'll be looking for best practices, your development process, design decisions, and overall project structure.

## M-V-P! M-V-P!

Your mission, should you choose to accept it, is to create a prototype of a cool issue explorer for a fictional client. As an initial goal, you'll be creating the issue explorer for GitHub issues and those issues will be filterable by their state!

We are giving _you_ complete control over the architecture of how to implement it. If you're curious, our internal stack at the moment is React, Apollo, and CSS Modules—however, as an engineering team we believe in using the right tool for the job so feel free to use _your_ best tools to complete the assignment.

**See _mocks folder** to get a clear picture of the task 😎

### Constraints

- It must look and feel good across **all** screen sizes
- That's it!

### Tasks (required)

- Create a `README.md` file with simple instructions to run the app.
- Create a search page with a search bar. Users should be able to paste a GitHub repo URL here.
- Create a results page that displays **all** (open, closed, pull requests) issues from the search query.
- Indicate which issues are closed or pull requests using the icons.
- Implement filtering by open, closed, or pull requests on the results page.

### Bonus (not required)

If you have some extra time, pick any of the following!

- Implement smooth transitions to and from the search and results pages.
- When a filter is applied, add show / hide transitions to the results.
- Add indicators for search progress.
- Cover the case of an error fetching the results.
- Implement pagination with either infinite scrolling or multiple pages.
- Allow users to be able to share states via URLs to other users so that they can view results without searching!

Use the [Github issues API](https://developer.github.com/v3/issues/#list-issues-for-a-repository) as your source of data. The first page with all issues should have the `status` param set to `all`. _Be aware of [the API's pagination params](https://developer.github.com/v3/#pagination)_.

## Hints

- It is an MVP (minimum viable product) - done is better than perfect
- This project is designed to be completed in about 4 hours, but if you need some extra time to plan, research, and fill in the "Looking Back" section of your Q&A, take it!
- Test your app with repos that are [full of issues](https://github.com/facebook/react) as well as ones that have [no issues](https://github.com/axiomzen/cc_IssuesExplorerFE_Empty)

**Before you start, please read and fill out the "Planning" section of the [QnA.md](./QnA.md)**.

That's all for now. Don't hesitate to ask questions, for guidance or for more clarification on the project. We are excited to see what you come up with!

Good luck!
