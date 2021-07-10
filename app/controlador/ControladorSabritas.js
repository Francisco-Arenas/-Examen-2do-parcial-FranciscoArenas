//const ModeloDulces = require('../modelo/ModeloDulces');
const modeloSabrita = require('../modelo/ModeloSabritas')

function index2(req,res) {
    console.log('ok');
    modeloSabrita.find({})
    .then(sabritas => {
        if(sabritas.length) return res.status(200).send({sabritas});
        return res.status(204).send({message:'No hay Sabritas'});
    }).catch(error => res.status(500).send({error}));
}

function agregar2(req,res) {
    console.log(req.body);
    new modeloSabrita(req.body).save()
    .then(sabritas => {
        res.status(200).send({sabritas})
    }).catch(error => res.status(500).send({error}));
}

function buscar2(req,res,next) {
    let consulta ={};
    consulta[req.params.key]=req.params.value;
    modeloSabrita.find(consulta).then(sabritas =>{
        if(!sabritas.length) return next();
        req.body.sabritas= sabritas;
        return next();
    }).catch(error =>{
        req.body.error=error;
        next();
    })
}

function mostrar2(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.sabritas) return res.status(404).send({message: 'No hay Sabritas que mostrar'});
    let sabritasObj = req.body.sabritas;
    return res.status(200).send({sabritasObj});
}

function actualizar2(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.sabritas) return res.status(404).send({message: 'No hay Sabritas para actualizar'});
    let sabritasObj = req.body.sabritas[0];
    sabritasObj=Object.assign(sabritasObj,req.body);
    sabritasObj.save().then(sabritaAlta =>{
        res.status(200).send({message: 'Las Sabritas se actualizaron correctamente', sabritaAlta});
    }).catch(error => res.status(500).send({error}));
}

function eliminar2(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.sabritas) return res.status(404).send({message: 'No hay Sabritas para eliminar'});
    req.body.sabritas[0].remove().then(sabritaEliminar =>{
        res.status(200).send({message: 'Las Sabritas se eliminaron correctamente'});
    }).catch(error => res.status(500).send({error}));
}

module.exports={
    index2,
    agregar2,
    buscar2,
    mostrar2,
    actualizar2,
    eliminar2
}