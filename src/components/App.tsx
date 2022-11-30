import React from 'react';
import 'github-fork-ribbon-css/gh-fork-ribbon.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <a
        className="github-fork-ribbon right-top"
        href="https://github.com/codejedi365/performance-press"
        data-ribbon="Fork me on GitHub"
        title="Fork me on GitHub"
      >
          Fork me on GitHub
      </a>
      <header className="App-header"></header>
      <div className="container primary-color" style="min-height: 98vh; max-height: fit-content; margin-top: 0.5%; margin-bottom: 0.5%;">
        <div style="position: relative; height: 4em;">
          <span style="position: absolute; display: inline-block; left: 25%; width: 50%; top: 0.5em; text-align: center;">
            <h2 className="site-title light-theme-show">BULLET<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAB+klEQVR4nO2bPS9DURyHnyKUIBIk9RLCWEkbDL4AJuEjGMwWS7+FxWbzAQwWJpsFi5eFCBOJCIulFmrovdqr6b2XuP9fo+dJztCck/yf++s9p+e0t+BwOITkgZxSoE1ZHFgGSsCF2EPGKXCillAxDHx4bVQl0aIqDKwAKa8tCT1kHFCe/yVgX+xiTjdQpBLAG9CjEFFNgUUgXfW6A1hQiCgD+M68uYWQWyq3v99upEaGjFF78X4bsZZRTIHZX/YlgiKA6ZC+GTMLD0UA2ZC+KTMLD0UAEyF942YWQl6ovwg+Cb1MaKf+xfvN9IhuPQXibHdNt8SNGEBv4hZVpCyLAa1EX+Ar8G7gAth/JTYEbEaM2QDuDVwkZIleBMP2CX+O8hshRyNguQiuAusxx24BOwm6fGG5CGaonPaegX7qvwEZEyN0a0AOOBTVDqAKYBLoE9UOoPpp7EhUtwbVHbAGXItqB1AFsAtciWoHaPqNkAtALaDGBaAWUOMCUAuocQGoBdS4AER1u7wmR3UaPAcGRLUDqAIYFNWtwa0BagE1LgC1gBoXgFpATdMHYLkPOAO2fzDWBOsHJDJEPw36ADwauEgoEP18QMFSyHorvAfcRYy5tBDxsZwCeWAu5thjygemf0Wc2998GjT9x6DlFEgDnTHHFin/j8jhSJhPpSZg7Lo7jLMAAAAASUVORK5CYII=" />PRESS</h2>
            <h2 className="site-title dark-theme-show">BULLET<img src="icons/icon-bullet.png" />PRESS</h2>
          </span>
          <span style="position: absolute; right: 9%; padding: 0.5em; margin: 0.5em; border-radius: 5px; border: solid 0.5px; width: 13ch; text-align: center;" className="toggle-text">
            <input id="ckbox-style-mode" type="checkbox" checked={true} style="display: none;" />
            <label for="ckbox-style-mode" style="margin-bottom: 0">
              <i className="txt-primary" title="115 Max Character Count">Style: MyEval</i>
              <i className="txt-alternate" title="PDF - Pixel Length">Style: AF1206</i>
            </label>
          </span>
          <span title="dark/light theme switch" className="toggle-switch" style="position: absolute; right: 1em; top: 25%;">
            <input id="ckbox-light-dark-mode" type="checkbox" style="display: none;" />
            <label htmlFor="ckbox-light-dark-mode">
              <img className="moon-icon" src="icons/icons8-moon-man.svg" alt="Active: Dark Mode" />
              <img className="sun-icon" src="icons/icons8-sun.svg" alt="Active: Light Mode" />
              <div className="ball secondary-color"></div>
            </label>
          </span>
          <span className="abspos" style="height: 4em; top: 0.5em;">
            <label style="height: 100%;" className="clickable">
              <button id="btn-show-tutorial" style="display: none;"></button>
              <img src="icons/icon-help.png" alt="Tutorial Toggle Button" style="height: 100%;" title="Show Tutorial" />
            </label>
            <span id="guidearrow-tutorial" title="START HERE" className="flasher hide"><i>&larr;</i></span>
          </span>
        </div>
        <div id="tutorial" className="accordion">
          <div className="accordion-content primary-color card card-body">
            <h3>Tutorial</h3>

            <h4>Requirements</h4>
            <p>
              You must have the Times New Roman font installed on your machine.  It's not open-source,
              so I cannot provide it as part of the application.  Your browser must support canvas
              (it likely does).
            </p>
            <hr/>
            <h4>Step 1: Draft</h4>
            <p>
              Start with the information you want to convey - you may get 'No bullets of length/all
              bullets over length' - this is fine to start.
            </p>
            <p className='secondary-color code card card-body'>
              Modernized award/annual review process; devoted 80hrs/engineered app--established AF-wide SOP/saved 3,500 man-hours annually
            </p>
            <hr/>
            <h4>Step 2: Optionalize</h4>
            <p>
              You can then begin to create substitutions by separating sections that can be substituted/reworded/omitted
              onto their own lines, and chaining options on the same line with pipes (|).  You can also
              make certain blocks 'optional' by placing a trailing pipe with no option after it.  Example:
            </p>
            <p className='secondary-color code card card-body'>
              Modernized|Overhauled|Streamlined<br/>
              award|awd<br/>
              /<br/>
              annual|yearly<br/>
              review <br/>
              process|proc<br/>
              ; <br/>
              devoted|dedicated<br/>
              80hrs/<br/>
              engineered|dev'd<br/>
              app<br/>
              --<br/>
              established<br/>
              AF-wide|total-force<br/>
              SOP<br/>
              /saved <br/>
              3,500|3.5K|4K<br/>
              hrs<br/>
              annually|<br/>
            </p>
            <p>
              As you begin to do this, Bulletpress will start chewing through every possible permutation
              of the bullet you wrote and begin spitting out bullets that meet the line-fill requirement
              (sorted by how close to the line they are). This is your brainstorming phase, so every idea
              is a good idea to start. Once your browser starts lagging because you have too many options,
              that's a good sign you should move to the next step.
            </p>
            <hr/>
            <h4>Step 3: Prune</h4>
            <p>
              Look at your top bullets and highlight the weakest portions of them.  Remove those options
              entirely until you're left with around 10 or fewer outputs.  Example:
            </p>
            <p className='secondary-color code card card-body'>
              Modernized|Overhauled<br/>
              awd<br/>
              /<br/>
              annual|yearly<br/>
              review <br/>
              process|proc<br/>
              ; <br/>
              devoted|dedicated<br/>
              80hrs/<br/>
              engineered|dev'd<br/>
              app<br/>
              --<br/>
              established<br/>
              AF-wide|total-force<br/>
              SOP<br/>
              /saved <br/>
              3.5K|4K <br/>
              hrs<br/>
            </p>
            <p>Pruning just a few options leaves me with only 4 outputs:</p>
            <p className='secondary-color times card card-body'>
              - Modernized awd/annual review process; dedicated 80hrs/engineered app--established total-force SOP/saved 3.5K hrs<br/>
              - Overhauled awd/annual review process; dedicated 80hrs/engineered app--established total-force SOP/saved 3.5K hrs<br/>
              - Modernized awd/yearly review process; dedicated 80hrs/engineered app--established total-force SOP/saved 3.5K hrs<br/>
              - Overhauled awd/yearly review process; dedicated 80hrs/engineered app--established total-force SOP/saved 3.5K hrs<br/>
            </p>
            <hr/>
            <h4>Step 4: Iterate</h4>
            <p>
              First, <i>retain all the information you entered</i>, even if your remaining outputs
              don't use all of it.  This will allow you to skip most of step 2 as you add information,
              strip information, adjust the impact, discover new approved abbreviations, etc. Second,
              now that you've got draft 1 of your bullet, jump back into step 2 and work on it to
              make a slightly stronger version.  Bulletpress can't remove the amount a bullet will be
              iterated on, but it can make the time required to iterate on a bullet significantly less.
            </p>
            <div className="accordion-close-btn abspos-parent">
              <span id="btn-hide-tutorial" className="abspos center-horizontal clickable" title="Close Tutorial">
                <span className="arrow-up-close-icon abspos-parent secondary-color">
                  <span className="abspos center-horizontal">^</span>
                </span>
              </span>
              <hr />
            </div>
          </div>
        </div>
        <hr />
        <div id="bulletpress-editor" className="characterlength">
          <fieldset className="storage">
            <legend>Static Storage</legend>
            <textarea className="secondary-color" style="resize: none;"></textarea>
            <div className="workbench-hidden-scalar"></div>
          </fieldset>
          <br />
          <fieldset>
            <legend>Workbench</legend>
            <div className="search-tab" style="position:absolute; right: 1.75ch; top: -2.1ch; padding: 0 5.5ch; z-index: 10;">
              <input id="ckbox-word-search-show" type="checkbox" style="display: none;" />
              <label for="ckbox-word-search-show" style="display: inline; margin-bottom: 0px;">
                <div style="position:relative;">
                  <div className="arrow-up" style="position: absolute; left: -3.25ch; top: 0ch;"></div>
                </div>
                <div className="tab tertiary-color" style="position: absolute; top: 0ch; z-index: 15; padding: 0.25ch 2ch 1ch 2ch; width: 6ch; border-radius: 8px 5px 0 0;">
                  <div className="open-search-tab">
                    <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" width="2ch" height="2ch">
                      <path d="M 10 0.1875 C 4.578125 0.1875 0.1875 4.578125 0.1875 10 C 0.1875 15.421875 4.578125 19.8125 10 19.8125 C 12.289063 19.8125 14.394531 19.003906 16.0625 17.6875 L 16.9375 18.5625 C 16.570313 19.253906 16.699219 20.136719 17.28125 20.71875 L 21.875 25.34375 C 22.589844 26.058594 23.753906 26.058594 24.46875 25.34375 L 25.34375 24.46875 C 26.058594 23.753906 26.058594 22.589844 25.34375 21.875 L 20.71875 17.28125 C 20.132813 16.695313 19.253906 16.59375 18.5625 16.96875 L 17.6875 16.09375 C 19.011719 14.421875 19.8125 12.300781 19.8125 10 C 19.8125 4.578125 15.421875 0.1875 10 0.1875 Z M 10 2 C 14.417969 2 18 5.582031 18 10 C 18 14.417969 14.417969 18 10 18 C 5.582031 18 2 14.417969 2 10 C 2 5.582031 5.582031 2 10 2 Z M 4.9375 7.46875 C 4.421875 8.304688 4.125 9.289063 4.125 10.34375 C 4.125 13.371094 6.566406 15.8125 9.59375 15.8125 C 10.761719 15.8125 11.859375 15.433594 12.75 14.8125 C 12.511719 14.839844 12.246094 14.84375 12 14.84375 C 8.085938 14.84375 4.9375 11.695313 4.9375 7.78125 C 4.9375 7.675781 4.933594 7.574219 4.9375 7.46875 Z"></path>
                    </svg>
                  </div>
                  <div className="close-search-tab" style="width: 2ch; height: 2ch; text-align: right;"><b>x</b></div>
                </div>
              </label>
            </div>
            <div className="search-dialog-container hide">
              <div className="search-dialog">
                <div style="position: relative; height: 100%;">
                  <div style="height: 2em;">Word Search</div>
                  <div style="height: 3em;">
                    <input id="txtbox-word-search" type="text" style="margin: 1ch auto;" />
                    <label for="ckbox-search-help-show" style="height: 100%;" className="clickable">
                      <input id="ckbox-search-help-show" type="checkbox" style="display: none;" />
                      <img src="icons/icon-help.png" alt="Search Syntax Help Icon" style="height: 100%;" />
                    </label>
                  </div>
                  <div className="search-results-wordlist" style="overflow-y: auto; height: calc(100% - 5em); padding: 0 1ch;">
                  </div>
                </div>
              </div>
            </div>
            <div className="search-dialog-help-container hide">
              <div className="search-dialog-help helpbox">
                <div style="position: relative; height: 100%;">
                  <span className="search-dialog-help-close-btn clickable">x</span>
                  <div style="height: 2em; text-align: center;"><b>Search Tool Syntax</b></div>
                  <div className="search-dialog-help-text">
                    <p>
                      The <i>BULLETPRESS</i> search tool gives you the power to find the <b>word</b>
                      you need to make your bullet <b>perfect</b> and more importantly <b>fit!</b> At
                      the core, it is a word search where it can match words based on spelling.
                      However, its real power comes from its ability to process <i>Regular Expressions</i>
                      coupled with extra built-in filter syntax. The filter command syntax provides
                      ways filter by characteristics of words to help you locate the right word for the
                      right use.
                    </p>
                    <i>Special Commands</i>
                    <ol>
                      <li>
                        <code>length:#</code>&nbsp;Filter down to all words of a specific length.
                        Replace the <code>#</code> with the desired number of letters. For
                        example:&nbsp;<code>length:8</code> only provides words with 8 letters.
                        Shorthand of <code>len:</code> is also accepted.
                      </li>
                      <br />
                      <li>
                        <code>leadership:[yes|no]</code>&nbsp;Filter words down to those that imply
                        leadership qualities for report writing. Results are subject to change as it is
                        highly opinion-based. Applying <code>no</code> will remove words that imply
                        leadership, which allows for followership focused words. <code>true</code> or
                        <code>false</code> are accepted as an alternative attribute value. Shorthand
                        commands of <code>leader:</code>, <code>lead:</code>, <code>led:</code> are
                        also accepted.
                      </li>
                      <br />
                      <li>
                        <code>type:verb</code>&nbsp;Filter words by type of word. Currently only
                        <code>verb</code> is supported and the current word list only contains verbs.
                      </li>
                    </ol>
                    <i>Regular Expressions</i>
                    <p>
                      All non-command tokens will be concatenated together as a single token and
                      processed by the JavaScript <code>RegExp()</code> function. You may use any valid
                      JavaScript Regular Expression syntax. If it is interpreted as invalid, then the
                      token will be ignored. Spaces are ignored as it is expected this is a word search
                      tool with an expected result of a single word (hyphenated words included). Tokens
                      are defined as a sequence of any non-whitespace characters. Tokens are delinated
                      by whitespace characters in between seqences of letters, numbers, or symbols. For
                      example:
                      <ol>
                        <li>
                          <code>^a</code>&nbsp;All words that start with the letter <code>a</code>.
                        </li>
                        <li>
                          <code>ed$</code>&nbsp;All words that end in the letters <code>ed</code>.
                        </li>
                        <li>
                          <code>gh</code>&nbsp;All words that contain the letter sequence <code>gh</code>.
                        </li>
                      </ol>
                    </p>
                    <i>Limitations</i>
                    <p>
                      Our word list is made up of all action verbs commonly used on performance reports
                      as identified on
                      <a target="_blank" href="http://www.airforcewriter.com/strong-action-verbs.htm">
                        http://www.airforcewriter.com/strong-action-verbs.htm
                      </a>
                      and characterized by <i>BULLETPRESS</i> developers. The list will continue
                      to improve as new words and characteristics are identified.
                    </p>
                    <p>
                      Space (<code> </code>) characters are ignored in all cases except to separate
                      one command token from another token.
                    </p>
                    <p>
                      The colon (<code>:</code>) character determines between command syntax and regular
                      expression use. If you use a <code>:</code> with a mispelled or invalid command,
                      it will be ignored during filtering.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <textarea className="secondary-color" id="textArea" style="resize: none; z-index: 10;"
            >Modernized|Overhauled|Streamlined&#10;awd/&#10;annual|yearly&#10;review&#10;process|proc&#10;;&#10;dedicated 80hrs&#10;&&#10;engineered|dev'd&#10;app&#10;--&#10;established total-force SOP&#10;/&#10;saved 3.5K hrs</textarea>
            <div className="workbench-hidden-scalar"></div>
          </fieldset>
          <br />
          <div id="displayArea" className="primary-color" style="margin: auto; width:fit-content; min-height: 20ch;"></div>
        </div>
        <hr />
        <div style="text-align:center; font-size:small;">
          <i>Privacy Notice: Any data entered into this site is not saved or stored remotely.</i>
          <i>This site also does not use cookies. Refresh with caution.</i>
        </div>
        <hr />
        <div className="footer">
          <div>
            <div>
              <h6>
                <i>
                  BULLETPRESS v0.0.0-semantically-versioned
                  (<a target="_blank" href="https://github.com/codejedi365">@codejedi365</a>)
                </i>
              </h6>
              <ul style="list-style: none;">
                <li>
                  <a target="_blank" href="https://github.com/codejedi365/bulletpress/issues">
                    Report an Issue
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://github.com/codejedi365/bulletpress/issues/new">
                    Request a Feature
                  </a>
                </li>
                <li><br /></li>
                <li><br /></li>
              </ul>
            </div>
          </div>
          <div>
            <div>
              <h6>Acknowledgments</h6>
              <div style="font-size: small;">
                Special Thanks to our contributors!
                <ul>
                  <li><a target="_blank" href="https://github.com/cmdr0">cmdr0&nbsp;<i>(inventor)</i></a></li>
                  {/* <li><a target="_blank" href="https://github.com/crossedxd/epr-checker">crossedxd</a></li> */}
                </ul>
                And our dependency libraries:
                <ul>
                  <li>
                    <a target="_blank" href="https://github.com/simonwhitaker/github-fork-ribbon-css">
                      simonwhitaker/github-fork-ribbon-css
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://icons8.com">Icons8</a>:
                    (
                      <a target="_blank" href="https://icons8.com/icon/9313/sun">Sun</a>,
                      <a target="_blank" href="https://icons8.com/icon/48620/moon">Moon</a>,
                      <a target="_blank" href="https://icons8.com/icon/fl3jj5PPBFFV/bullet">Bullet</a>,
                      &amp;
                      <a target="_blank" href="https://icons8.com/icon/131/search">Magnifying Glass</a> icons
                    )
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
