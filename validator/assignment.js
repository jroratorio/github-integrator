let validator = {}

validator.findRepos = (req, res, next) => {

    const repos = req.body.org;

    if(!repos) {
        return res.status(400).send({ message: 'Repos not found' });
    }

    return next();
}

module.exports = validator;