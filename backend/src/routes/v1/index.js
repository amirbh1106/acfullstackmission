const express = require('express');
const get_todos = require('../../controllers/todoscontroller');

const router = express.Router();

const defaultRoutes = [
    {
        path: '/todos',
        route: get_todos,
    },
];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

module.exports = router;