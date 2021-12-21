const express = require('express');
const todoscontroller = require('../../controllers/todoscontroller');

const router = express.Router();

router.get('/', todoscontroller.get_todos);
router.post('/', todoscontroller.save_todos);
router.delete('/' , todoscontroller.delete_todo);

module.exports = router;