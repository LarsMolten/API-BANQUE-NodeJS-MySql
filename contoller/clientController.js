const pool = require('../database/database')

const clientController = {

    getAllClient: async (req, res) => {

        try {
            const [rows, fields] = await pool.query("select * from client ")

            res.json({
                data: rows
            })
            
        } catch (error) {
            console.log(error)
            res.json({
                status: error
            })
        }

    }, 
    
    getByIdClient : async (req, res) => {

        try {
            
            const {id} = req.params

            const [rows, fields] = await pool.query("select * from client where client_id = ?", [id])

            res.json({
                date: rows
            })

        } catch (error) {
            console.log(error)
            res.json({
                status: error
            })
        }
    }, 

    createClient : async (req, res) => {

        try {
            const { nom, email, adresse, type_client} = req.body;
            
        
    
            const [existdata, field] = await pool.query("select * from client where nom = ? and email = ? and adresse = ? and type_client = ? ", [nom, email, adresse, type_client])
    
            
            if (existdata == '') {
                const sql = "insert into client ( nom, email, adresse, type_client) values (?, ?, ?, ?)"
                const [rows, fields] = await pool.query(sql, [ nom, email, adresse, type_client])
                
                res.json({
                    date: rows
                })
                
               
            } else {
    
                res.json({
                    date: 'existdata'
                })
            }
    
        } catch (error) {
            console.log(error)
            res.status(400).json({
                error: error.message
            })
            
        }
    
    }, 
    

    updateClient : async (req, res) => {

        try {
            
            const { nom, email, adresse, type_client} = req.body

            const {id} = req.params

            const sql = "update client set  nom = ?, email = ?, adresse = ?, type_client = ? where client_id = ?"

            const [rows, fields] = await pool.query(sql, [ nom, email, adresse, type_client, id])

            res.json({
                date: rows
            })

        } catch (error) {
            console.log(error)
            res.json({
                status: error
            })
            
        }

    },

    deleteClient : async (req, res) => {

        try {
            
            const {id} = req.params

            const [rows, fields] = await pool.query("delete from client where client_id = ?", [id])

            res.json({
                date: rows
            })

        } catch (error) {
            console.log(error)
            res.json({
                status: error
            })
            
        }

    }
}


module.exports = clientController
