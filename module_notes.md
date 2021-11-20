# 6.4.5 Handle Errors

## error handling in single.js

1.  `getRepoName()`
    -   redirect user back to index.html if query unavailable
2.  `getRepoIssues()`
    1. redirect back to `index.html` if repo doesn't exist
        1. `fetch()` function
            1. if `repoName` exists, it will make the `fetch` call.
            2. if not, redirects back to `index.html`
    2.
