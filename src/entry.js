export function Entry(title,body){
    this.title = title;
    this.body = body;
}

Entry.prototype.numberWords = function(){
    let wordArray = this.body.split(/\s|\.|,|!\?*/);
    wordArray = wordArray.filter(function(element) {
        return element !== "";
    })
    return wordArray.length;
    
}

Entry.prototype.countVowelsAndConsonants = function(){
    let countVowels = 0;
    let countConsonants = 0;
    for(let index=0; index<this.body.length; index++){
        if(/[aeuioyAEUIO]/.test(this.body[index])) {
            countVowels++;
        } else if (/[A-Za-z]/.test(this.body[index])){
            countConsonants++;
        };

    };
    let result = "Number of vowels: "+countVowels+", Number of consonants: "+countConsonants;
    return result;
}
Entry.prototype.getTeaser = function()
{
    let result="";
    let wordArray = this.body.split(/\s|,|!\?*/);
    for (let idx=0; idx<wordArray.length; idx++)
    {
        if (/\.$/.test(wordArray[idx])) 
        {
            if(idx<=7)
            {
                return wordArray.slice(0,idx+1).join(' ');
            }

        } else if (idx > 7) {
            return wordArray.slice(0,9).join(' ');
        }
    }
    return this.body;
 }

 

