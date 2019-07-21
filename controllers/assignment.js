const rp = require('request-promise');

let controller = {}

controller.findRepos = async (req, res, next) => {

    const org = req.body.org;
    let limit = 3;

    try {

        const opts = {
            url: `https://api.github.com/orgs/${org}/repos`,
            method: 'GET',
            headers: {
                Authorization : `token ${process.env.GITHUB_TOKEN}`,
                'User-Agent' : 'POSTMAN'
            }
        }

        let data = await rp(opts);

        if(data)
            data = JSON.parse(data);

        if(!data || !Array.isArray(data) || !data.length) {
            return res.status(404).send({ message: 'No repos found for given organization'});
        }

        data = data.sort((item1, item2) => {
            return item2.stargazers_count - item1.stargazers_count;
        });

        let results = [];

        limit = limit < data.length ? limit : data.length;

        for(let i = 0; i < limit; i++) {
            results.push({
                name : data[i].name,
                stars : data[i].stargazers_count
            });
        }       

        return res.status(200).send({ results });

    } catch(err) {
        return next(err);
    }
}

module.exports = controller;