const express = require('express');
const todosroute = require('./todos.route');

const router = express.Router();

const defaultRoutes = [
    {
        path: '/todos',
        route: todosroute,
    },
];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

module.exports = router;