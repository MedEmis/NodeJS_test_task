module.exports = (commits) => {
    var commitAnalyzer = (commitsByAuthor, commit) => {
        if (commitsByAuthor[commit.email]) {
            commitsByAuthor[commit.email].push(commit);
        } else {
            commitsByAuthor[commit.email] = [commit];
        }
        return commitsByAuthor;
    };
    return commits.reduce(commitAnalyzer, {});
};