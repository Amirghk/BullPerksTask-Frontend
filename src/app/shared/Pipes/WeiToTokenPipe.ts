import { Pipe, PipeTransform } from '@angular/core';
import {formatUnits } from "ethers";

@Pipe({
  standalone: true,
  name: 'weiToToken'
})
export class WeiToTokenPipe implements PipeTransform {
  transform(value: string): string {
    const tokenAmount = formatUnits(value, 18);
    var splitStr = tokenAmount.substring(0, tokenAmount.indexOf('.') + 3);
    return splitStr.replace(/\B(?=(\d{3})+(?!\d))/g, ",");;
  }
}
