import { LightningElement } from 'lwc';

export default class WordCounterLive extends LightningElement {
    handleOnChange(){
        // TODO: Refactor me to use LWC properties instead of query selectors
        //       of data- attributes. These properties should be read-only
        //       so we want private properties and getters.
        //       we also need to update the template accordingly
        let char = this.template.querySelector("span[data-recid=char]");
        let word = this.template.querySelector("span[data-recid=word]");
        let space = this.template.querySelector("span[data-recid=space]");

            //console.log(char)
            //console.log(word)
            //console.log(space)

        // count characters
        let content = this.template.querySelector("lightning-textarea").value;
        //console.log(content)
        char.textContent = ' ' + content.length;
        // count spaces
        space.textContent =  ' ' + content.split(' ').length - 1;
        // remove empty spaces from start and end
        content.trim();
        // Remove spaces from between words
        let wordList = content.split(/\s/);
        let words = wordList.filter(function (element) {
            return element != "";
        }, this);
        // count words
        word.textContent = words.length;
        }
}
