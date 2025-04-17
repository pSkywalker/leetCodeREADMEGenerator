const axios = require('axios');
const fs = require('fs');
const path = require('path');
const beautify = require('js-beautify').html;

(async () => {
    
    let githubURL = process.argv[2];

    let completedQuestions = [];
    let readMeFileName = "README.md";

    const allLeetCodeQsPromise = axios.post("https://leetcode.com/api/problems/all");
    const githubRepoPromise = axios.get(githubURL);

    
    let [allLeetCodeQs, githubRepo] = await Promise.all([allLeetCodeQsPromise, githubRepoPromise]);
    allLeetCodeQs = allLeetCodeQs.data;
    githubRepo = githubRepo.data
    githubRepo.map( (answer) => {
        let answerFileName =  parseInt(answer.name.replace(/[^0-9]/g, ""));
        if( answer.name != "README.md" && answerFileName != isNaN ){ 
            let index = allLeetCodeQs.stat_status_pairs.findIndex(q => {
                return q.stat.question_id === answerFileName;
            })
            if( index != -1 ){ 
                completedQuestions.push( { 
                    gitPath: answer.path, 
                    questionNumber: allLeetCodeQs.stat_status_pairs[index].stat.question_id,
                    questionTitle:  allLeetCodeQs.stat_status_pairs[index].stat.question__title, 
                    questionDifficulty :allLeetCodeQs.stat_status_pairs[index].difficulty.level
                })
            }
        }
    } );

    const filePath = path.join(__dirname, readMeFileName);

    let readMe = '<h1 align="center">🚀 My LeetCode Journey</h1><p align="center"><img src="https://img.shields.io/badge/Problems%20Solved-✨%20X%20/%20Y-blueviolet?style=for-the-badge" alt="Problems Solved" /> <img src="https://img.shields.io/badge/Language-JavaScript-yellow?style=for-the-badge" alt="Language" /> <img src="https://img.shields.io/badge/Last%20Updated-April%202025-brightgreen?style=for-the-badge" alt="Updated" /></p><p align="center"><b>A visually organized collection of my LeetCode solutions 🚀</b><br/><i>Click through each problem to see the code, patterns, and explanations!</i></p><hr/>';//"<style>.table{width:100%;margin-bottom:1rem;color:#212529;border-collapse:collapse;}.table th,.table td{padding:0.75rem;vertical-align:top;border-top:1px solid #dee2e6;}.table thead th{vertical-align:bottom;border-bottom:2px solid #dee2e6;}.table tbody+tbody{border-top:2px solid #dee2e6;}.table-striped tbody tr:nth-of-type(odd){background-color:rgba(0,0,0,0.05);}.table-hover tbody tr:hover{color:#212529;background-color:rgba(0,0,0,0.075);}.table-bordered{border:1px solid #dee2e6;}.table-bordered th,.table-bordered td{border:1px solid #dee2e6;}.table-bordered thead th,.table-bordered thead td{border-bottom-width:2px;}.table-sm th,.table-sm td{padding:0.3rem;}.table-responsive{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch;}.table-responsive>.table-bordered{border:0;}.btn{display:inline-block;font-weight:400;line-height:1.5;color:#212529;text-align:center;text-decoration:none;vertical-align:middle;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;background-color:transparent;border:1px solid transparent;padding:0.375rem 0.75rem;font-size:1rem;border-radius:0.25rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;}.btn-primary{color:#fff;background-color:#0d6efd;border-color:#0d6efd;}.btn-primary:hover{color:#fff;background-color:#0b5ed7;border-color:#0a58ca;}.btn-secondary{color:#fff;background-color:#6c757d;border-color:#6c757d;}.btn-secondary:hover{color:#fff;background-color:#565e64;border-color:#464c51;}.btn-success{color:#fff;background-color:#198754;border-color:#198754;}.btn-success:hover{color:#fff;background-color:#157347;border-color:#146c43;}.btn-info{color:#000;background-color:#0dcaf0;border-color:#0dcaf0;}.btn-info:hover{color:#000;background-color:#0b8390;border-color:#0a7a85;}.btn-warning{color:#000;background-color:#ffc107;border-color:#ffc107;}.btn-warning:hover{color:#000;background-color:#e0a800;border-color:#d39e00;}.btn-danger{color:#fff;background-color:#dc3545;border-color:#dc3545;}.btn-danger:hover{color:#fff;background-color:#c82333;border-color:#b21f2d;}.btn-light{color:#000;background-color:#f8f9fa;border-color:#f8f9fa;}.btn-light:hover{color:#000;background-color:#e9ecef;border-color:#dee2e6;}.btn-dark{color:#fff;background-color:#343a40;border-color:#343a40;}.btn-dark:hover{color:#fff;background-color:#23272b;border-color:#1e2125;}.btn-link{font-weight:400;color:#007bff;text-decoration:none;}.btn-link:hover{color:#0056b3;text-decoration:underline;}.btn-lg{padding:0.5rem 1rem;font-size:1.25rem;border-radius:0.3rem;}.btn-sm{padding:0.25rem 0.5rem;font-size:0.875rem;border-radius:0.2rem;}.badge{display:inline-block;padding:0.25em 0.4em;font-size:75%;font-weight:700;line-height:1;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:0.25rem;}.badge-primary{color:#fff;background-color:#007bff;}.badge-secondary{color:#fff;background-color:#6c757d;}.badge-success{color:#fff;background-color:#28a745;}.badge-danger{color:#fff;background-color:#dc3545;}.badge-warning{color:#000;background-color:#ffc107;}.badge-info{color:#000;background-color:#17a2b8;}.badge-light{color:#000;background-color:#f8f9fa;}.badge-dark{color:#fff;background-color:#343a40;}.badge-pill{border-radius:1rem;}</style>"
    readMe += "<table class='table table-striped table-hover'>  <thead> <td> Question number </td> <td> Question Title </td> <td> Difficulty </td></thead>"
    //console.log(rowGenerator(completedQuestions))
    readMe += "<tbody>" + rowGenerator(completedQuestions) + "</tbody>";
    readMe += "</table>";
    const prettyHtml = beautify(readMe, { indent_size: 2 });
    fs.writeFile(filePath, prettyHtml, 'utf8', (err) => {
        if (err) {
          console.error('An error occurred while writing the file:', err);
        } else {
          console.log(`File "${readMeFileName}" created and written successfully!`);
        }
      });
    
})();

function getDifficultyBadge(level) {
    switch (level) {
      case 1:
        return '<span class="badge text-bg-success">Easy</span>';
      case 2:
        return '<span class="badge text-bg-warning">Medium</span>';
      case 3:
        return '<span class="badge text-bg-danger">Hard</span>';
      default:
        return '❓ Unknown';
    }
  }
function rowGenerator( completedQuestions ){
    let rows = ""; 
    //console.log(completedQuestions, "-");
      completedQuestions = completedQuestions.sort( (a,b) => { return a.questionNumber - b.questionNumber } )
        for( let x = 0; x < completedQuestions.length; x++ ){
            rows += ("<tr><th> " + completedQuestions[x].questionNumber + "</th> <td> " + completedQuestions[x].questionTitle + "</td> <td> " + getDifficultyBadge(completedQuestions[x].questionDifficulty) + "</td> </tr>")
        }
    return rows;
};
