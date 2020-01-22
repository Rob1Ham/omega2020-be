const router = require('express').Router();
const restricted = require('../auth/restricted-middleware.js')
const UserPuzzles = require('./user-puzzles-model')

router.get('/', restricted, (req, res) => {
    UserPuzzles
    .findPuzzles()
    .then(puzzles => {
        res.json(puzzles)
    })
    .catch(err => res.send(err))
})

router.post('/:userId/:puzzleId', restricted, (req, res) => {
    const { userId, puzzleId } = req.params
    const email = req.decodedJwt.email
    console.log(email)
    const puzzle = req.body
    UserPuzzles
    .savePuzzle(puzzle, { userId, puzzleId }, email)
    .then(puzzle => {
        res.json(puzzle)
        console.log(email)
    })
    .catch(err => res.send(err))
})

module.exports = router;
