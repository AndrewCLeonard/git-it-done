var issueContainerEl = document.querySelector("#issues-container");
var limitWarningEl = document.querySelector("#limit-warning");
var repoNameEl = document.querySelector("#repo-name");

var getRepoIssues = function (repo) {
	console.log(repo);
	var apiUrl = "https://api.github.com/repos/" + repo + "/issues?direction=asc";
	// ??? what does the following line mean?
	// ??? Where does `response.json` come from? Where is documentation?
	// make a get request to url
	fetch(apiUrl).then(function (response) {
		// request was successful
		if (response.ok) {
			// convert it to json, then pass ```data``` to ```displayIssues```
			response.json().then(function (data) {
				displayIssues(data);

				// check if api has paginated (more than 30) issues
				if (response.headers.get("Link")) {
					displayWarning(repo);
				}
			});
		} else {
			document.location.replace("./index.html");
			alert("There was a problem with your request!");
		}
	});
};

function getRepoName() {
	// grab repo name from url string query
	var queryString = document.location.search;
	var repoName = queryString.split("=")[1];

	if (repoName) {
		// display repo name on the page
		repoNameEl.textContent = repoName;

		getRepoIssues(repoName);
	} else {
		// if no repo was ginev, rediret to the homepage
		document.location.replace("./index.html");
	}
}

// GitHub documentation for getting repo had colons in front of the username and repo. Why?
// - NEED LINK

// ??? Why do they declare functions in this manner?
	// - showing the 
// ??? What do the different colors signify?
	// - white =
	// - red = logic operators
	// - blue = declarations of variables & functions
	// - yellow = strings
	// - orange = for starters- a function parameter, but could be an array or a string
	// - dark orange = if parameter not used in function
	// - green = attributes
	// - purple = arrays
// ??? Creating locally scoped *El variables.
// - Is that something Cory was creating at the top in his "selector" section?
// - Pros/cons to this approach?
var displayIssues = function (issues) {
	if (issues.length === 0) {
		issueContainerEl.textContent = "This repo has no open issues!";
		return;
	}
	// loop over given issues
	for (var i = 0; i < issues.length; i++) {
		// create a link element to take users to the issue on github
		var issueEl = document.createElement("a");
		issueEl.classList = "list-item flex-row justify-space-between align-center";
		issueEl.setAttribute("href", issues[i].html_url);
		issueEl.setAttribute("target", "_blank");
		console.log(issues[i].html_url);

		// create span to hold issue title
		var titleEl = document.createElement("span");
		titleEl.textContent = issues[i].title;

		// append to container
		issueEl.appendChild(titleEl);

		// create a type element (issue or pull request)
		var typeEl = document.createElement("span");

		// check if issue is an actual issue or a pull request
		if (issues[i].pull_request) {
			typeEl.textContent = "(Pull request)";
		} else {
			typeEl.textContent = "(Issue)";
		}

		// append to container
		issueEl.appendChild(typeEl);
		
		// append to the dom
		issueContainerEl.appendChild(issueEl);
	}
};

var displayWarning = function (repo) {
	// add text to warning container
	limitWarningEl.textContent = "To see more than 30 issues, visit ";
	var linkEl = document.createElement("a");
	linkEl.textContent = "GitHub.com.";
	linkEl.setAttribute("href", "https://github.com/" + repo + "/issues");
	linkEl.setAttribute("target", "_blank");

	// append warning to container
	limitWarningEl.appendChild(linkEl);
};

getRepoName();
