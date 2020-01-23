const router = require('express').Router();

const { Pool, Client } = require('pg')
const connectionString = 'postgres://postgres:omega2020database@omega2020.cbydc0au6atn.us-east-2.rds.amazonaws.com:5432/postgres'
const pool = new Pool({
  connectionString: connectionString,
})
pool.query("SELECT sudoku, solution, level, id FROM puzzle_table WHERE id='5029' LIMIT 1;", (err, res) => {
  console.log(res.rows[0])
})
const client = new Client({
  connectionString: connectionString,
})
client.connect()
client.query('SELECT NOW()', (err, res) => {
  // console.log(err, res)
  client.end()
})

router.get('/', (req, res, next) => {
  pool.query('SELECT sudoku, solution, level, id FROM puzzle_table ORDER BY RANDOM() LIMIT 1;',
              (q_err, q_res ) => {
                  res.json(q_res.rows[0])
                  if (q_err) {
                    res.send(q_err)
                  }
      })
})

router.get('/diabolical', (req, res, next) => {
  pool.query("SELECT sudoku, solution, level, id FROM puzzle_table WHERE level='Diabolical' ORDER BY RANDOM() LIMIT 1;",
              (q_err, q_res ) => {
                  res.json(q_res.rows[0])
                  if (q_err) {
                    res.send(q_err)
                  }
      })
})
router.get('/tough', (req, res, next) => {
  pool.query("SELECT sudoku, solution, level, id FROM puzzle_table WHERE level='Tough' ORDER BY RANDOM() LIMIT 1;",
              (q_err, q_res ) => {
                  res.json(q_res.rows[0])
                  if (q_err) {
                    res.send(q_err)
                  }
      })
})
router.get('/moderate', (req, res, next) => {
  pool.query("SELECT sudoku, solution, level, id FROM puzzle_table WHERE level='Moderate' ORDER BY RANDOM() LIMIT 1;",
              (q_err, q_res ) => {
                  res.json(q_res.rows[0])
                  if (q_err) {
                    res.send(q_err)
                  }
      })
})
router.get('/gentle', (req, res, next) => {
  pool.query("SELECT sudoku, solution, level, id FROM puzzle_table WHERE level='Gentle' ORDER BY RANDOM() LIMIT 1;",
              (q_err, q_res ) => {
                  res.json(q_res.rows[0])
                  if (q_err) {
                    res.send(q_err)
                  }
      })
})
router.get('/testing', (req, res, next) => {
  pool.query("SELECT sudoku, solution, level, id FROM puzzle_table WHERE id='5029' LIMIT 1;",
              (q_err, q_res ) => {
                  res.json(q_res.rows[0])
                  if (q_err) {
                    res.send(q_err)
                  }
      })
})

module.exports = router;