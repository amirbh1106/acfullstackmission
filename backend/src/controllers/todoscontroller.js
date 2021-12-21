const { pool } = require("../db")



const get_todos =  async (req, res)  => { 
    try{
        const alltodos = await pool.query("SELECT * FROM todo")
        res.json(alltodos.rows)
    }catch(err){
        res.send(err);
    }
    
};

const save_todos =  async function(req, res) {
    console.log("ths")
    res.send('saved todos')
}

const delete_todo =  async function(req, res) {
    console.log("ths")
    res.send('saved todos')
}





module.exports = {
    get_todos,
    save_todos,
    delete_todo
};