import { Component, OnInit } from '@angular/core';
import { datasrc } from './datasource'

@Component({
  selector: 'app-root',
  template: `<ejs-rangenavigator id="rn-container" valueType='DateTime' [value]='value'>
  <e-rangenavigator-series-collection>
      <e-rangenavigator-series [dataSource]='chartData' type='Area' xName='x' yName='y' width=2>
      </e-rangenavigator-series>
  </e-rangenavigator-series-collection>
</ejs-rangenavigator>`
})
export class AppComponent implements OnInit{
  title = 'angular11Range-navigator';
  public value: Object[];
public chartData: Object[];
ngOnInit(): void {
    this.value = [new Date('2017-09-01'), new Date('2018-02-01')];
    this.chartData = datasrc;
}
}
