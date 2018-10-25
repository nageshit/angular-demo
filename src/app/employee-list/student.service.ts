import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpClientModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {


  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Authorization':'authkey',
      'userid':'1'
    })
  };
  url = 'http://localhost:8090';
  constructor(private http: HttpClient) { }

  getStudents() {
    return this.http.get('http://localhost:8090/students/',this.httpOptions);
  }
}
