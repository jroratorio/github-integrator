const md5 = require('md5');
const rp = require('request-promise');

let controller = {}

controller.getQuestion = async (req, res, next) => {

    const { email, name, angel_list, github } = req.body;

    let opts = {
        url: process.env.CHALLENGE_STARTER_URL,
        method: 'POST',
        headers: {
            'x-verloop-password' : md5(email)
        },
        json: {
            email,
            name,
            angel_list,
            github
        }
    }

    try {
        
        let resp = await rp(opts);

        return res.status(200).send(resp);

    } catch(err) {
        return next(err);
    }
}

module.exports = controller;