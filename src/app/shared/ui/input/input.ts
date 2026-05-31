import { Component } from '@angular/core';

@Component({
  selector: 'input[ui-input], textarea[ui-input]',
  standalone: true,
  template: '',
  host: {
    class: 'flex-1 min-w-0 py-2 px-3 text-sm text-gray-900 bg-transparent outline-none placeholder:text-gray-400 disabled:text-gray-400 disabled:cursor-not-allowed',
  },
})
export class InputComponent {}
