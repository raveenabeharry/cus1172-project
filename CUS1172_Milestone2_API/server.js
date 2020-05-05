var express = require("express")
//var app = express()

const router= express.Router()

const quiz_dataset= require('./quiz_dataset');
const question_dataset= require('./question_dataset');

const list =quiz_dataset.list;
const quiz=question_dataset.quiz_data;

router.get('/', (req, res) => {
  res.json('<h1>CUS 1172 Individual Project Milestone 2</h1>');
});

router.get('api/quiz/list', (req, res) => {
  res.json(list.results);
});

router.get('api/quiz/:quizid', (req, res) => {
  var q_id = req.params['id'];
  quiz_with_specific_id = quiz_data["results"].filter(q => q.id == q_id);
  res.json(quiz_with_specific_id);
});

router.get('api/quiz/:quizid/:questionid', (req, res) => {
  var quizId = req.params['quiz_id'];
  var question_id = req.params['id'];
  var question_index =  quiz_data["results"].findIndex(q => q.id == quizId);
  question_with_specific_id = quiz_data["results"][question_index].quiz_data_results.filter(q=>q.dataset.id == question_id);
  res.json(question_with_specific_id);
});


router.get('api/check_answer/:quizid/:questionid/:answer', (req,res) => {
  var quizId = req.params['quiz_id'];
  var question_id = req.params['id'];
  var user_answer = req.params['correct_answer'];
  var question_index =  quiz_data["results"].findIndex(q => q.id == quizId);
  question_with_specific_id = quiz_data["results"][question_index].quiz_data_results.filter(q=>q.dataset.id == question_id);

  if(question_with_specific_id[0].data.correct_answer == user_answer) {
    var user_results = {
        "id": id,
        "user_answer": user_answer,
        "correct": true
      }
      res.json(user_results);
  }
  else {
    var user_results = {
        "id": id,
        "user_answer": user_answer,
        "correct": false,
        "feedback": question_with_specific_id[0].data.explanation
    }
    res.json(user_results);
  }

});

/*
app.listen(3000, function() {
  console.log("Listening on port 3000!")
});
*/


module.exports = router
