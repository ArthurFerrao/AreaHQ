const titlesDB = require('../data/titles.json');


exports.getAll = (req, res) => {
    const type = req.query.type;
    const category = req.query.category;

    let titlesRes = titlesDB;

    if(type) {
        titlesRes = titlesDB.filter(title => title.type == type);
    }

    if(category) {
        titlesRes = titlesDB.filter(title => title.category == category);
    }

    return res.status(200).json(titlesRes);
};

exports.getById = (req, res) => {
    const id = req.params.id;
    res.json(titlesDB[id]);
};

exports.add = (req, res) => {
    const title = req.body;
    const id = titlesDB.length;

    title.id = id;
    title.createdAt = new Date();
    
    titlesDB.push(title)

    return res.status(200).json(title);
};

exports.update = (req, res) => {
    const title = req.body;
    const id = Number(req.params.id);
    
    title.id = id;
    titlesDB[id] = title;

    return res.status(200).json(title);
}
