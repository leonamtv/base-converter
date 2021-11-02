import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  base2: string = '0'
  base8: string = '0'
  base10: string = '0'
  base16: string = '0'

  base2Only ( event: any ) {
    let k = event.charCode
    let result = ( k == 48 || k == 49 )
    return result
  }

  base8Only ( event: any ) {
    let k = event.charCode
    let result = ( k >= 48 && k <= 55 )
    return result
  }
  
  base10Only ( event: any ) {
    let k = event.charCode
    let result = ( k >= 97 && k <= 103 ) || ( k >= 65 && k <= 71 ) || ( k >= 48 && k <= 57 )
    return result
  }

  base16Only ( event: any ) {
    let k = event.charCode
    let result = ( k >= 48 && k <= 57 )
    return result
  }

  fromBase2 () {
    this.base10 = ( Number( '0b' + this.base2 )).toString()
    this.base8  = ( Number( this.base10 ) >>> 0 ).toString(8)
    this.base16 = ( Number( this.base10 ) >>> 0 ).toString(16).toUpperCase()
  }

  fromBase8 () {
    this.base10 = ( Number( '0o' + this.base8 )).toString()
    this.base2  = ( Number( this.base10 ) >>> 0 ).toString(2)
    this.base16 = ( Number( this.base10 ) >>> 0 ).toString(16).toUpperCase()
  }

  fromBase16 () {
    this.base10 = ( Number( '0x' + this.base16 )).toString()
    this.base2  = ( Number( this.base10 ) >>> 0 ).toString(2)
    this.base8  = ( Number( this.base10 ) >>> 0 ).toString(8)
  }

  fromBase10 () {
    this.base2  = ( Number( this.base10 ) >>> 0 ).toString(2)
    this.base8  = ( Number( this.base10 ) >>> 0 ).toString(8)
    this.base16 = ( Number( this.base10 ) >>> 0 ).toString(16).toUpperCase()
  }

}
