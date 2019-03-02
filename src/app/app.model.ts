export class AppModel {
  baseCurr: number;
  targetCurr: number;
  baseCurrName: string;
  targetCurrName: string;

  constructor() {
    this.targetCurrName = 'CAD';
    this.baseCurrName = 'USD';
  }
}
