# Module 6.5
Prep: Create ```feature/languages```
## 1. Create a function to call the GitHub Search API
- [ ] Difficult to find the right info in the documentation
https://docs.github.com/en/rest/reference/search#limitations-on-query-length
- [ ] not sure where to find the info on constructing search queries with "?=q" 

1. create new function ```getFeaturedRepos()``` in ```homepage.js```
    - using the search ability in [GitHub API docs on searching for repos](https://docs.github.com/en/search-github/searching-on-github/searching-for-repositories)
    - accepts a ```language``` parameter
    - creates an API endpoint
    - makes an HTTP request to that endpoint using ```fetch```

## 2. Display the API data on the page
_After a successful fetch, data must be formatted to display on the page_

1. Add to ```fetch()``` request in order to:
    - format the response as json
    - make sure response works (```response.ok```)
    - call ```displayIssues``` 
    - ```console.log(data)```
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
## 3. Add langugae buttons in the HTML
_Language buttons let user make queries for different types of GitHub repos_
## 4. Call the API function when buttons are clicked
## 5. Save progress with Git