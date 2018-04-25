'use strict';
module.exports = function(app) {
  var lakevillage = require('../controllers/lakevillageController');

  // lakevillage Routes
  app.route('/api/admin')
    .get(lakevillage.list_action)
    .post(lakevillage.create_action);


  app.route('/api/admin/:houseId')
    .get(lakevillage.read_action)
    .put(lakevillage.update_action)
    .delete(lakevillage.delete_action);
};