var issueContainerEl = document.querySelector("#issues-container");

var getRepoIssues = function (repo) {
	console.log(repo);
	var apiUrl = "https://api.github.com/repos/" + repo + "/issues?direction=asc";
	// ??? what does the following line mean?
	// ??? Where does `response.json` come from? Where is documentation?
	//
	fetch(apiUrl).then(function (response) {
		// request was successful
		if (response.ok) {
			response.json().then(function (data) {
				displayIssues(data);
			});
		} else {
			alert("There was a problem with your request!");
		}
	});
};
// documentation had colons in front of the username and repo. Why?
getRepoIssues("iamtimleonard/border-radius");

// ??? Why do they declare functions in this manner?
// ??? What do the different colors signify?
    // red = logic operators
    // blue = declarations of variables & functions
    // yellow = strings
    // orange = properties
    // green = attributes
// ??? Creating locally scoped *El variables. 
    // ??? Is that something Cory was creating at the top in his "selector" section? 
    // ??? Pros/cons to this approach?
var displayIssues = function (issues) {
    if (issues.length === 0) {
        issueContainerEl.textContent = "This repo has no open issues!";
        return;
    }
	for (var i = 0; i < issues.length; i++) {
		// create a link element to take users to the issue on github
		var issueEl = document.createElement("a");
		issueEl.classList = "list-item flex-row justify-space-between align-center";
		issueEl.setAttribute("href", issues[i].html_url);
		issueEl.setAttribute("target", "_blank");

        // create span to hold issue title
        var titleEl = document.createElement("span");
        titleEl.textContent = issues[i].title;

        // append to container
        issueEl.appendChild(titleEl);

        // create a type element
        var typeEl = document.createElement("span");

        // check if issue is an actual issue or a pull request
        if (issues[i].pull_request) {
            typeEl.textContent = "(Pull request)";
        } else {
            typeEl.textContent = "(Issue)";
        }

        // append to container
        issueEl.appendChild(typeEl);
        issueContainerEl.appendChild(issueEl);
	}
};
console.log("data");
