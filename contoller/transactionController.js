const pool = require('../database/database')

const transactionController = {

    getAllTransaction: async (req, res) => {

        try {
            const [rows, fields] = await pool.query("SELECT transaction.*, client.nom AS nom_client, client.type_client AS type_client FROM transaction JOIN client ON transaction.client_id = client.client_id; ")

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
    
    getByIdTransaction : async (req, res) => {

        try {
            
            const {id} = req.params

            const [rows, fields] = await pool.query("select * from transaction where transaction_id = ?", [id])

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

    createTransaction : async (req, res) => {

        try {

            const {client_id, type_transaction, montant} = req.body
            console.log(req.body);

            const sql = "insert into transaction (client_id, type_transaction, montant) value (?, ?, ?)"
                const [rows, fields] = await pool.query(sql, [client_id, type_transaction, montant])

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

    updateTransaction : async (req, res) => {

        try {
            
            const {compte_id, montant, type} = req.body

            const {id} = req.params

            const sql = "update transaction set compte_id = ?, montant = ?, type = ? where transaction_id = ?"

            const [rows, fields] = await pool.query(sql, [compte_id, montant, type, id])

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

    deleteTransaction : async (req, res) => {

        try {
            
            const {id} = req.params

            const [rows, fields] = await pool.query("delete from transaction where transaction_id = ?", [id])

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


module.exports = transactionController
