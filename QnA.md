# QnA

### Planning

> What do you think are the greatest areas of risk in completing the project?
- API rate limiting while in DEV
- Input validation (Going to do an HTML5 version of it in markup but could be deeper obviously)
- Theme UI allows you to not get bogged down with media query stuff

> What changes/additions would you make to the design?
- the top right with the link feels out of place
- scrollable content inside the cards - I see ellipsis dots
- status of the issue on the card itself
- Organization/Repo logos

> List a two or three features that you would consider implementing in the future that would add significant value to the project.
- Showing who created the issue and when
- Showing the age + health of the issue with a "created on" label and show a comment count

---

### Looking Back

> Describe the major design/build decisions and why you made them.
- Using ThemeUI for sharing variables throughout - as well as making mobile reflowing a breeze
- Using Next JS for sane defaults and passing params etc

> How long did the assignment take (in hours)? Please break down your answer into buckets (e.g. "Learning Framework", "Coding", "Debugging").
- 10 hours-ish?
  - 4 For basic setup and static stuff including framework, theme colors, etc
  - 1 hour for messing with GithubAPI - Octokat npm module was acting funny
  - 1 Hour for making sure mobile was ok
  - 2 hours for Coding/Debugging/Filtering the data - Github had new docs 
  - 30 mins? Final debugging and animations

> If you could go back and give yourself advice at the beginning of the project, what would it be?
- Probably dont need a specific XHR module to query against an api for simple cases - Github's "Octokit" was unneeded
- Just pass the data object into the child with one prop and deal with it there, less props to mess with up top

> Did you learn anything new?
- Not really - pretty straightforward - Github API was new but predictable

> Do you feel that this assignment allowed you to showcase your abilities effectively?
- Yup :)

> Are there any significant web development-related skills that you possess that were not demonstrated in this exercise? If so, what are they?
- I can go pretty crazy with CSS whether thats backgrounds gradients, masking, spriting, etc
