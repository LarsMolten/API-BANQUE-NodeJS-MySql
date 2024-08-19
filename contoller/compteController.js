const pool = require('../database/database')

const compteController = {

    getAllCompte: async (req, res) => {

        try {
            const [rows, fields] = await pool.query("select * from compte ")

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
    
    getByIdCompte : async (req, res) => {

        try {
            
            const {id} = req.params

            const [rows, fields] = await pool.query("select * from compte where compte_id = ?", [id])

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

    createCompte : async (req, res) => {

        try {

            const {compte_id, client_id, solde} = req.body

            const [existdata, field] = await pool.query("select * from compte where compte_id = ? and client_id = ? ", [compte_id, client_id])

            if (existdata == '') {

                const sql = "insert into compte (compte_id, client_id, solde) value (?, ?, ?)"
                const [rows, fields] = await pool.query(sql, [compte_id, client_id, solde])

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
            res.json({
                status: error
            })
            
        }

    }, 

    updateCompte : async (req, res) => {

        try {
            
            const {compte_id, client_id, solde} = req.body

            const {id} = req.params

            const sql = "update compte set compte_id = ?, client_id = ?, solde = ? where compte_id = ?"

            const [rows, fields] = await pool.query(sql, [compte_id, client_id, solde, id])

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

    deleteCompte : async (req, res) => {

        try {
            
            const {id} = req.params

            const [rows, fields] = await pool.query("delete from compte where compte_id = ?", [id])

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


module.exports = compteController
