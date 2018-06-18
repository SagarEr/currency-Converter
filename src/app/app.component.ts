import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currency=[];
constructor(private http: HttpClient){}
value1;
value2;
cur1;
cur2;
val;
  url="https://exchangeratesapi.io/api/latest?base=";
ngOnInit(){
  this.http.get(this.url).subscribe((data)=>{
    this.currency=Object.keys(data.rates);
  });
}

drop1Change()
{
  this.input1Change();
}
drop2Change(i,c1)
{
  this.input1Change();
}
input1Change()
{
  this.http.get(this.url+this.cur1).subscribe((data)=>{
   this.value2=(data.rates[this.cur2])*(this.value1);
   });
}

input2Change()
{
  this.http.get(this.url+this.cur2).subscribe((data)=>{
   this.value1=(data.rates[this.cur1])*(this.value2);
   });
}
}
