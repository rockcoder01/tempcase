import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'convertcase';
  constructor(private titleService: Title, private metaService: Meta) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.metaService.addTags([
      { name: 'keywords', content: 'convert case, case converter, convertcase, case convert, change case, ppercase to lowercase ,uppercase to lowercase, lowercase converter, lowercase to uppercase, caps converter, upper case to lower case, lowercase, caps to lowercase, upper to lowercase, text to small, convert to lowercase, all caps converter, case changer, unicode converter, caseconverter, capital to lowercase, upper case, uppercase converter, all caps generator, convert case, convert case, lowercase to caps, convert to all caps, convert to uppercase, to uppercase, title case converter, caps generator, title case converter, lowercase generator, to lower case, text converter, to lowercase, capitalize text, lower case converter, sentence case converter, convert to caps, make all caps, all caps, uppercase to lowercase converter, caps lock converter, text to caps, case converter, case converter, uppercase generator, case change, uppercase' },
      {
        name: 'description', content: `sentence case: sentence converter is an online text and word processing utility it’s helps to you to allow any text you would like to select and transforming into fully structured sentence.
      lower case:for those who wants to uncapitalised there text this lowercase would be very helpful for them it’s helps to transforming selected text to lower case as well as converting i’s into l’s.` },
      { name: 'robots', content: 'index, follow' }
    ]);
  }







}
