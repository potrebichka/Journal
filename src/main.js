import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import { Entry } from './entry';

$(function() {
    $("#entryForm").submit(function(event) {
        event.preventDefault();

        var title = $("#titleInput").val();
        var body = $("#entryInput").val();

        var entry = new Entry(title, body);
        let numWordsResult = entry.numberWords();
        let numberVowels = entry.countVowelsAndConsonants();
        let getEightWords = entry.getTeaser();
        console.log(numberVowels);
        $("#numberOfWords").text(numWordsResult);
        $("#numberVowelsID").text(numberVowels );
        $("#8ID").text(getEightWords);
        $("#results").show();

    })
})