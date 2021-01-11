/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },


  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/
  //FileController
  // 'POST /img':'FileController.upload',
  //  'GET /img':'FileController.download',



  //  Restaurtant  API 

  //to post the request then  create method will be execute new data will be added in database 
  'POST /restaurtantDetails': 'RestaurtantController.create',

  //to get the request then  find method will be execute retrive  data 
  'GET /restaurtantDetails': 'RestaurtantController.find',

  //to delete the perticular id from delete method 
  'DELETE /restaurtantDetails/:id': 'RestaurtantController.delete',

  //to update the data from this method
  'PATCH /restaurtantDetails/:id': 'RestaurtantController.update',

  //to find  the perticular record from getById method
  'GET /restaurtantDetails/:id': 'RestaurtantController.findById',

};

