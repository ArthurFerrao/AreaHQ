const chaptersDB = require('../data/chapters.json');
const titlesDB = require('../data/titles.json');

exports.getAll = (req, res) => {
    const chapters = chaptersDB.map(c => ({...c, ...findTitle(c.titleId)}));
    return res.status(200).json(chapters);
};

exports.getById = (req, res) => {
    const id = Number(req.params.id);
    return res.status(200).json(chaptersDB[id]);
};

exports.add = (req, res) => {
    const chapter = req.body;
    const id = chaptersDB.length;

    chapter.id = id;
    chapter.createdAt = new Date();
    
    chaptersDB.push(chapter)

    return res.status(200).json(chapter);
};

exports.update = (req, res) => {
    const chapter = req.body;
    const id = Number(req.params.id);
    
    chapter.id = id;
    chaptersDB[id] = chapter;

    return res.status(200).json(chapter);
};

const findTitle = (id) => {
    return titlesDB
            .map(t => ({titleImage: t.image, titleName: t.name, titleId: t.id}))
            .find(t => t.titleId === id);
}