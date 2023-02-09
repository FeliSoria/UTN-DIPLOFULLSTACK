var express = require('express');
var router = express.Router();
var novedadesModel = require('../../models/novedadesModel');

router.get('/', async function (req, res, next) { //listó novedades

    var novedades = await novedadesModel.getNovedades();

    res.render('admin/novedades', {
        layout: 'admin/layout',
        usuario: req.session.nombre,
        novedades
    });
});

router.get('/agregar', (req, res, next) => { //agregar novedades

    res.render('admin/agregar', {
        layout: 'admin/layout',

    });
});

router.post('/agregar', async (req, res, next) => {
    try {
        if (req.body.titulo != "" && req.body.subtitulo != "" && req.body.cuerpo != "") {
            await novedadesModel.insertNovedades(req.body);
            res.redirect('/admin/novedades')
        } else {
            res.render('admin/agregar', {
                layout: 'admin/layout',
                error: true, message: 'Todos los campos son requeridos'
            })
        }

    } catch (error) {
        console.log(error)
        res.render('/admin/agregar', {
            layout: 'admin/layout',
            error: true, message: 'No se cargó la novedad'
        });
    }
});  //agregar novedades por post form


router.get('/eliminar/:id', async (req, res, next) => { //delete novedades
    var id = req.params.id;
    await novedadesModel.deleteNovedadesById(id);
    res.redirect('/admin/novedades')
});


router.get('/modificar/:id', async (req, res, next) => { //update novedades
    let id = req.params.id;
    let novedades = await novedadesModel.getNovedadesById(id);
    res.render('admin/modificar', {
        layout: 'admin/layout',
        novedades
    })
});



router.post('/modificar', async (req, res, next) => {
    try {
        let obj = {
            titulo: req.body.titulo,
            subtitulo: req.body.subtitulo,
            cuerpo: req.body.cuerpo
        }
        await novedadesModel.modificarNovedadesById(obj, req.body.id);
        res.redirect('/admin/novedades')
    } catch (error) {
    console.log(error)
    res.render('/admin/modificar', {
        layout: 'admin/layout',
        error: true, message: 'No se modificó la novedad'
    });
}
});  //modificar novedadby Id

module.exports = router;
