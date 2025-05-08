import axios from 'axios';
import fs from 'fs';
import path from 'path';
import beautifyPkg from 'js-beautify';
const { html: beautify } = beautifyPkg;

export async function generateReadme() {
    
    let githubURL = process.argv[2];
    let lang = process.argv[3];

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
                    gitLink: answer._links.html,
                    gitPath: answer.path, 
                    questionNumber: allLeetCodeQs.stat_status_pairs[index].stat.question_id,
                    questionTitle:  allLeetCodeQs.stat_status_pairs[index].stat.question__title, 
                    questionDifficulty :allLeetCodeQs.stat_status_pairs[index].difficulty.level,
                    question_title_slug : allLeetCodeQs.stat_status_pairs[index].stat.question__title_slug
                })
            }
        }
    } );
    const filePath = path.join(process.cwd(), readMeFileName);

    let readMe = '<h1 align="center">🚀 My LeetCode Journey</h1><p align="center"><img src="https://img.shields.io/badge/Problems%20Solve%20'+githubRepo.length+'/'+allLeetCodeQs.stat_status_pairs.length+'-blueviolet?style=for-the-badge" alt="Problems Solved" /> '+getLanguageBadge(lang) +' <img src="https://img.shields.io/badge/Last%20Updated-'+getEncodedMonthYear(new Date())+'-brightgreen?style=for-the-badge" alt="Updated" /></p><p align="center"><b>A visually organized collection of my LeetCode solutions 🚀</b><br/><i>Click through each problem to see the code, patterns, and explanations!</i></p><hr/>';
    readMe += "<table class='table table-striped table-hover'>  <thead> <td> Question number </td> <td> Question Title </td> <td> Difficulty </td> <td> Link to description </td> </thead>"
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
    
};

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
  function getLanguageBadge(language) {
    switch (language.toLowerCase()) {
      case 'javascript':
        return '<img src="https://img.shields.io/badge/Language-JavaScript-yellow?style=for-the-badge" alt="JavaScript" />';
      case 'python':
        return '<img src="https://img.shields.io/badge/Language-Python-blue?style=for-the-badge" alt="Python" />';
      case 'java':
        return '<img src="https://img.shields.io/badge/Language-Java-red?style=for-the-badge" alt="Java" />';
      case 'c++':
        return '<img src="https://img.shields.io/badge/Language-C++-blue?style=for-the-badge" alt="C++" />';
      case 'c#':
        return '<img src="https://img.shields.io/badge/Language-C%23-8A2BE2?style=for-the-badge" alt="C#" />';
      case 'go':
        return '<img src="https://img.shields.io/badge/Language-Go-00ADD8?style=for-the-badge" alt="Go" />';
      case 'rust':
        return '<img src="https://img.shields.io/badge/Language-Rust-b7410e?style=for-the-badge" alt="Rust" />';
      case 'typescript':
        return '<img src="https://img.shields.io/badge/Language-TypeScript-3178C6?style=for-the-badge" alt="TypeScript" />';
      case 'php':
        return '<img src="https://img.shields.io/badge/Language-PHP-777BB4?style=for-the-badge" alt="PHP" />';
      case 'ruby':
        return '<img src="https://img.shields.io/badge/Language-Ruby-CC342D?style=for-the-badge" alt="Ruby" />';
      case 'swift':
        return '<img src="https://img.shields.io/badge/Language-Swift-FA7343?style=for-the-badge" alt="Swift" />';
      case 'kotlin':
        return '<img src="https://img.shields.io/badge/Language-Kotlin-0095D5?style=for-the-badge" alt="Kotlin" />';
      case 'dart':
        return '<img src="https://img.shields.io/badge/Language-Dart-0175C2?style=for-the-badge" alt="Dart" />';
      case 'scala':
        return '<img src="https://img.shields.io/badge/Language-Scala-DC322F?style=for-the-badge" alt="Scala" />';
      case 'shell':
        return '<img src="https://img.shields.io/badge/Language-Shell-89e051?style=for-the-badge" alt="Shell" />';
      default:
        return '❓ Unknown Language';
    }
  }
  function getEncodedMonthYear(date = new Date()) {
    const options = { month: 'long', year: 'numeric' };
    const formatted = date.toLocaleString('default', options); // e.g., "April 2025"
    return encodeURIComponent(formatted); // e.g., "April%202025"
  }
  function rowGenerator( completedQuestions ){
    let rows = ""; 
    //console.log(completedQuestions, "-");
      completedQuestions = completedQuestions.sort( (a,b) => { return a.questionNumber - b.questionNumber } )
        for( let x = 0; x < completedQuestions.length; x++ ){
            rows += ("<tr><th> <a href= '" + completedQuestions[x].gitLink +"'> "+completedQuestions[x].questionNumber+" </a></th> <td> " + completedQuestions[x].questionTitle + "</td> <td> " + getDifficultyBadge(completedQuestions[x].questionDifficulty) + "</td> <td>" + "https://leetcode.com/problems/"+ completedQuestions[x].question_title_slug +"/description/" + " </td></tr>")
        }
    return rows;
};
