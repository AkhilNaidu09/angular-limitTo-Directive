import {Directive, Input} from '@angular/core'
    @Directive({
      selector: '[limit-to]',
      host: {
        '(keypress)': '_onKeypress($event)',
      }
    })
    export class LimitToDirective {
      @Input('limit-to') limitTo; 
      _onKeypress(e) {
         const limit = +this.limitTo;
         if(e.target.value.length){
         let textValue = e.target.value.replace(/[^0-9]/g,'')
         if (textValue.length === limit) e.preventDefault();
         }
      }
    }
