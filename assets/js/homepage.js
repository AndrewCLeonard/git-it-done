/* 
https://courses.bootcampspot.com/courses/951/pages/6-dot-1-5-capture-data-returned-from-the-api?module_item_id=331368
6.1.5 Capture Data Returned from the API
*/

var getUserRepos = function () {
	fetch("https://api.github.com/users/octocat/repos");
};

getUserRepos();
