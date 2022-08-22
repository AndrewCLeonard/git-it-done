# Module 6.5

Prep: Create `feature/languages`

## 1. 6.5.3 Create a Function to Call the GitHub Search API

-   [ ] Difficult to find the right info in the documentation
        https://docs.github.com/en/rest/reference/search#limitations-on-query-length
-   [ ] not sure where to find the info on constructing search queries with "?=q"

1. create new function `getFeaturedRepos()` in `homepage.js`
    - using the search ability in [GitHub API docs on searching for repos](https://docs.github.com/en/search-github/searching-on-github/searching-for-repositories)
    - accepts a `language` parameter
    - creates an API endpoint
    - makes an HTTP request to that endpoint using `fetch`

## 2. 6.5.4 Display the API Data on the Page

### _After a successful fetch, data must be formatted to display on the page_

1. Add to `fetch()` request in order to:
    - format the response as json
    - make sure response works (`response.ok`)
    - call `displayIssues`
    - `console.log(data)`

```
fetch(apiUrl)
		.then(function (response) {
		// request was successful
		if (response.ok) {
			response.json().then(function (data) {
				console.log(data);
			});
		} else {
			alert("Error: " + response.statusText);
		}
```

## 3. 6.5.5 Add Language Buttons in the HTML

### _Language buttons let user make queries for different types of GitHub repos_

1. Create HTML for card element for "search by topic" buttons
    1. add div using classes to create card
    2. Create div for 3 button elements for JS, HTML, & CSS
        1. class = button
        2. data attribute = `data-language`
2. Set up data attributes for buttons
    - The [HTML data attribute](https://www.w3schools.com/tags/att_data-.asp) is written as `data-*` where the attribute name must be a string with at least one character all lowercase.
    - Allows you to connect to JS

```
data-data-language="javascript">
data-data-language="HTML">
data-data-language="CSS">
```

## 4. 6.5.6 Call the API Function When Buttons are Clicked
### _Make the call to the API every time the buttons are clicked_
1. Create new variable `languageButtonsEl` at top of `homepage.js` with an `id` value of `language-buttons`: 
	```
	var languageButtonsEl = document.querySelector("#language-buttons");
	```
2. Add click event listener to the `<div>` element to call a new `buttonClickHandler()` function to bottom of `homepage.js`
	- Only _one_ event listener needed because we delegate click handling to parent elements
3. Create `buttonClickHandler` variable 

### 6.5.6 Questions
1. What are the different methods of listeners?
## 5. 6.5.7 Save Progress with Git
### _Merge to the main branch on GitHub_
- [Link pull requests to issues on cl](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue)
	- link pull requests to issues 
	- close issues

### 6.5.7 Questions
- [ ] I'm unable to merge now because I made a mistake with my branches somehow. 
