

const getUser = (req, res) => {

    const { nombre = 'No name', edad, api_Key } = req.query;

    res.json({
        ok: true,
        msg: 'get api',
        nombre,
        edad,
        api_Key
    });
}

const postUser = (req, res) => {

    const body = req.body;

    console.log(req.body);

    res.status(201).json({
        ok: true,
        msg: 'post api',
        body
    });
}

const putUser = (req, res) => {

    const { id } = req.params;

    res.json({
        ok: true,
        msg: 'put api',
        id
    });
}

const deleteUser = (req, res) => {
    res.json({
        ok: true,
        msg: 'delete api'
    });
}

module.exports = {
    getUser,
    postUser,
    putUser,
    deleteUser,
}