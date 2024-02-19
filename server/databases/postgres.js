const { Pool } = require('pg')
const express = require('express')
const router = express.Router()

// Create a new pool for handling database connections
// using variables
// const pool = new Pool({
// 	user: 'your-user',
// 	host: 'localhost',
// 	database: 'your-database',
// 	password: 'your-password',
// 	port: 5432,
// })

const pool = new Pool({
	connectionString: process.env.PG_CONNECTION_STRING,
	ssl: true,
})

router.get('/expenses', async (req, res) => {
	try {
		const query = 'SELECT * FROM expenses'
		const { rows } = await pool.query(query)
		res.json(rows)
	} catch (err) {
		console.error(err)
		res.status(500).json({ error: 'Internal server error' })
	}
})
router.post('/expenses', async (req, res) => {
	try {
		const { name, amount, date } = req.body
		const query =
			'INSERT INTO expenses (name, amount, date) VALUES ($1, $2, $3) RETURNING *'
		const { rows } = await pool.query(query, [name, amount, date])

		res.status(201).json(rows[0])
	} catch (err) {
		console.error(err)
		res.status(500).json({ error: 'Internal server error' })
	}
})

router.delete('/expenses/:id', async (req, res) => {
	try {
		const id = req.params.id
		const query = 'DELETE FROM expenses WHERE id = $1'
		await pool.query(query, [id])
		res.sendStatus(200)
	} catch (err) {
		console.error(err)
		res.status(500).json({ error: 'Internal server error' })
	}
})

router.put('/expenses/:id', async (req, res) => {
	try {
		const id = req.params.id
		const { name, amount, date } = req.body
		const query =
			'UPDATE expenses SET name = $1, amount = $2, date = $3 WHERE id = $4 RETURNING *'
		const { rows } = await pool.query(query, [name, amount, date, id])
		res.status(201).json(rows[0])
	} catch (err) {
		console.error(err)
		res.status(500).json({ error: 'Internal server error' })
	}
})

module.exports = router
