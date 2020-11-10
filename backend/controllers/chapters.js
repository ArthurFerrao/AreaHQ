const chaptersDB = require('../data/chapters.json');
const titlesDB = require('../data/titles.json');

exports.getAll = (req, res) => {
    const chaptersFiltered = filterChapters().map(c => ({...c, ...findTitle(c.titleId)}));

    const chapters = groupByDate(chaptersFiltered);

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

const filterChapters = () => {
    return chaptersDB
            .reduce((unique, chapter) => {
                const findC = unique.find(c => c.titleId === chapter.titleId && getDateFormated(c.createdAt) === getDateFormated(chapter.createdAt))
   
                if(findC) {
                    index = unique.map(u => u.id).indexOf(findC.id)
                    unique[index] = {...unique[index], chapters:[...unique[index].chapters, chapter.num]}
                }

                return findC ? unique : [...unique, {...chapter, chapters:[chapter.num]}]
            } , [])
}

const groupByDate = (chapters) => {
    return chapters
            .reduce((prevCharapters, chapter) => {
                (prevCharapters[getDateFormated(chapter.createdAt)] = prevCharapters[getDateFormated(chapter.createdAt)] || []).push(chapter);
                return prevCharapters;
            }, {});
}

const getDateFormated = (date) => {
    const dateFormated = new Date(date);
    return dateFormated.toDateString();
}
