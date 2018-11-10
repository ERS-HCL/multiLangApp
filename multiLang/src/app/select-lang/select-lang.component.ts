import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-select-lang',
  templateUrl: './select-lang.component.html',
  styleUrls: ['./select-lang.component.css']
})
export class SelectLangComponent implements OnInit {
  private currentLang:string = '';
  constructor(private commonService: CommonService){
    this.currentLang = this.commonService.selectedLang
   }

  changeLanguage(lang){
   this.commonService.setlang(lang)
   this.currentLang = this.commonService.selectedLang
  }

  ngOnInit() {
  }
}
