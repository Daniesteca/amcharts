const express = require('express');
const router = express.Router();
const conexion = require('../database/db');

router.get('/',(req, res)=>{
    res.render('index.html')
});


// router.get('/getData', (req, res) => {
//     conexion.query('SELECT descripcion, stock FROM articulos', (error, results) => {
//         if (error) {
//             console.error(error);
//             throw error;
//         } else {
//             res.json({articulos:results});
            
//         }
//     });
// });



module.exports = router;