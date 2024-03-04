const articleControllerClass = require('../controllers/article');

const articleController = new articleControllerClass()

router.get('/', (req, res) => articleController.getAllArticles(req, res));

module.exports = router;
