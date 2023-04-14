const loans = require('../data/loans');

// Controller function for rendering loanList view
const getLoanList = (req, res) => {
    res.render('loanList', { loans: loans });
};

module.exports = {
    getLoanList
};
