
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ContactoInterface } from './contacto-interface';
import { HttpErrorHandler, HandleError } from './http-error-handler.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})

export class ContactoService {
  contactosUrl = '/api/v1/contactos';
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('ContactoService');
  }
  // all
  getContactos(): Observable<ContactoInterface[]> {
    return this.http.get<ContactoInterface[]>(this.contactosUrl)
      .pipe(
        catchError(this.handleError('getContactos', []))
      );
  }

  addContacto(contacto: ContactoInterface): Observable<ContactoInterface> {
    return this.http.post<ContactoInterface>(this.contactosUrl, contacto, httpOptions)
      .pipe(
        catchError(this.handleError('addContacto', contacto))
      );
  }
  getContacto(id: number): Observable<ContactoInterface> {
    const url = `${this.contactosUrl}/${id}`;
    return this.http.get<ContactoInterface>(url, httpOptions)
      .pipe(
        catchError(this.handleError<ContactoInterface>('getContacto'))
    );
  }
  updateContacto(contactos: ContactoInterface): Observable<ContactoInterface> {
    return this.http.patch<ContactoInterface>(this.contactosUrl, contactos, httpOptions)
      .pipe(
        catchError(this.handleError('updateCuenta', contactos))
      );
  }
  deleteContacto(id: ContactoInterface['id']): Observable<ContactoInterface> {
      const url = `${this.contactosUrl}/${id}`;
      /*
      return this.http.delete(url, httpOptions)
        .pipe(
          catchError(this.handleError('deleteContacto'))
        );
        */
  }
}