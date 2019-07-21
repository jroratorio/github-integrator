let validator = {}

validator.getQuestion = (req, res, next) => {

    const { email, name, angel_list, github } = req.body;

    if(!email) {
        return res.status(400).send({ message: 'Email missing'});
    }

    if(!name) {
        return res.status(400).send({ message: 'Name missing'});
    }

    if(!angel_list) {
        return res.status(400).send({ message: 'Angel_List missing'});
    }

    if(!github) {
        return res.status(400).send({ message: 'Github missing'});
    }    

    return next();
}

module.exports = validator;