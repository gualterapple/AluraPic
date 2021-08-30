import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo } from './photo';
import { PhotoComment } from './photo-comment';

const API = 'http://localhost:3000/';

@Injectable({ providedIn: 'root' })
export class PhotoService {
  constructor(private http: HttpClient) {}

  listFromUser(userName: string) {
    return this.http.get<Photo[]>(`${API}photos`);
  }

  listFromUserPaginated(userName: string, page: number) {
    const params = new HttpParams().append('page', page.toString());

    return this.http.get<Photo[]>(`${API}userName/photos`, {
      params: params,
    });
  }

  upload(description: string, allowComments: boolean, file: File)
  {

    /*USE THIS CODE SUBMIT AN IMAGE TO REAL API
    const formData = new FormData();
    formData.append('description', description);
    formData.append('allowComments', allowComments ? 'true' : 'false');
    formData.append('url', file);*/

    //USE THIS CODE SUBMIT AN IMAGE TO MOCK
    const formData = {
      description: description,
      allowComments: allowComments ? 'true' : 'false',
      url: 'https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg',
    }

    return this.http.post(`${API}photos`, formData);
  }

  findById(id: number)
  {
    return this.http.get<Photo>(`${API}photos/${id}`);
  }

  getComment(id: number)
  {
    return this.http.get<PhotoComment[]>(`${API}photos/${id}`);
  }

}
