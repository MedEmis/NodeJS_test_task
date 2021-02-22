var commits = require('./process-commits');

commits.then(commits => {
    console.log(Object.keys(commits));
});