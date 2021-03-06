import express           from 'express';
import controllerVideo from '../controllers/video';

var router = express.Router();

router.post('/agregar-video', controllerVideo.agregarVideo);
router.post('/agregar-comentario/:id', controllerVideo.agregarComentario);
router.post('/agregar-like/:id', controllerVideo.agregarLike);
router.get('/obtener-likes/:id', controllerVideo.obtenerLikes);
router.get('/obtener-comentarios/:id', controllerVideo.obtenerComentarios);
router.get('/obtener-video/:nombre', controllerVideo.obtenerPorNombre);
router.get('/obtener-videos/:categoria', controllerVideo.obtenerPorCategoria);
router.get('/valio-mondah', (req, res) => {
    return res.json({
        mensaje: 'Valio mondah'
    });

})

module.exports = router;