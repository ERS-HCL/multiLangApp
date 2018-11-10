import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  selectedLang: string ='English';
  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'fr', 'ge', 'ja']);
    translate.setDefaultLang('en');

    let browserlang = translate.getBrowserLang();
    translate.use(browserlang.match(/en|fr|ge|ja/) ? browserlang: 'en');
   }

  setlang(lang){
    this.translate.use(lang);
    if(lang==='en'){
      this.selectedLang = 'English'
    } else if(lang=='fr') { 
      this.selectedLang = 'French'
    } else if(lang=='ge') { 
      this.selectedLang = 'German'
    } else {
      this.selectedLang = 'Japanese'
    }
  }
}
