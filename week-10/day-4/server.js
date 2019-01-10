'use strict';

const routes = require('./app');
const PORT = 3000;

routes.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));