import { createElement } from 'lwc';
import WordCounterLive from 'c/wordCounterLive';

// see https://github.com/trailheadapps/lwc-recipes for example LWC Jest tests

describe('c-word-counter-live', () => {
  afterEach(() => {
    // The jsdom instance is shared across test cases in a single file so reset the DOM
    while(document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  // How can we fix this to make the tests pass?
  it('has an initial value of "0"', () => {
    const element = createElement('c-word-counter-live', {
      is: WordCounterLive
    });
    const charSpan = element.querySelector("span[data-recid=char]");
    expect(charSpan.textContent).toBe('0');
  });

  // New Test
  /*
   * GIVEN: I have an instance of
   * WHEN: I change the text to "Extra credit"
   * THEN: The Words, Characters, and Spaces elements in the element are updated
   *       to the correct values
   */
});
