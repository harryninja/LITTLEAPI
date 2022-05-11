var express = require('express');
var router = express.Router();
var DataBaseHandler = require("../config/DataBaseHandler");
var dataBaseHandler = new DataBaseHandler();

var connection = dataBaseHandler.createConnection();

router.get('/', function (req, res, next) {
    connection.query('CALL sp_GetServices();', function (error, result, fields) {
        if (error) throw error;

        if(result[0].length== 0){
            res.status(404).send({
                status : "ERROR",
                message: "Could not find services"
            });
        }else{
            res.status(202).send({
                status : "SUCCESS",
                message: "User was found",
                data : result[0]
            });
        }
    });
});
router.get('/:description?/:title?/:servicetype?', function (req, res, next) {
    var servicetype = req.params.servicetype;
    var description = req.params.description;
    var title = req.params.title;
    connection.query('CALL sp_GetServices();', function (error, result, fields) {
        if (error) throw error;

        if(result[0].length== 0){
            res.status(404).send({
                status : "ERROR",
                message: "Could not find this service"
            });
        }else{
            res.status(202).send({
                status : "SUCCESS",
                message: "User was found",
                data : result[0]
            });
        }
    });
});
router.post('/', function (req, res, next) {
    connection.query('CALL sp_GetServices();', function (error, result, fields) {
        if (error) throw error;

        if(result[0].length== 0){
            res.status(404).send({
                status : "ERROR",
                message: "Could not perform the post action"
            });
        }else{
            res.status(202).send({
                status : "SUCCESS",
                message: "User was found",
                data : result[0]
            });
        }
    });
});
router.delete('/', function (req, res, next) {
    connection.query('CALL sp_GetServices();', function (error, result, fields) {
        if (error) throw error;

        if(result[0].length== 0){
            res.status(404).send({
                status : "ERROR",
                message: "Could not delete the service"
            });
        }else{
            res.status(202).send({
                status : "SUCCESS",
                message: "User was found",
                data : result[0]
            });
        }
    });
})

module.exports = router;