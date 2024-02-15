const pool = require('../database/database')

const enseignantController = {
    getAll: async (req, res) => {

        try {
            const [rows, fields] = await pool.query("select * from enseignant ")

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

    getById : async (req, res) => {

        try {
            
            const {id} = req.params

            const [rows, fields] = await pool.query("select * from enseignant where matricule = ?", [id])

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

    create : async (req, res) => {

        try {

            const {nomEnseignant, tauxHoraire, nbHeure} = req.body

            const [existdata, field] = await pool.query("select * from enseignant where nomEnseignant = ? and tauxHoraire = ? and nbHeure = ?", [nomEnseignant, tauxHoraire, nbHeure])

            if (existdata == '') {

                const sql = "insert into enseignant (nomEnseignant, tauxHoraire, nbHeure) value (?, ?, ?)"
                const [rows, fields] = await pool.query(sql, [nomEnseignant, tauxHoraire, nbHeure])

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

    update : async (req, res) => {

        try {
            
            const {nomEnseignant, tauxHoraire, nbHeure} = req.body

            const {id} = req.params

            const sql = "update enseignant set nomEnseignant = ?, tauxHoraire = ?, nbHeure = ? where matricule = ?"

            const [rows, fields] = await pool.query(sql, [nomEnseignant, tauxHoraire, nbHeure, id])

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

    delete : async (req, res) => {

        try {
            
            const {id} = req.params

            const [rows, fields] = await pool.query("delete from enseignant where matricule = ?", [id])

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

module.exports = enseignantController