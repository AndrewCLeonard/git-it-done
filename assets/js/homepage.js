var getUserRepos = function (user) {
	// format the github api url
	var apiUrl = "https://api.github.com/users/" + user + "/repos";

	// make a request to the url
	fetch(apiUrl).then(function (response) {
		// adding response.json formats the data in the response so it's usable
		response.json().then(function (data) {
			console.log("inside", response);
		});
	});
};

console.log("outside");

var response = fetch("https://api.github.com/users/octocat/repos");
console.log(response);

getUserRepos("microsoft");
