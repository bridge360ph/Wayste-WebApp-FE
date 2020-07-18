import { throwError as observableThrowError, Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
// import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
// import { Configs } from '../interfaces/config';

@Injectable()
export class ServiceBase {

    // protected BASE_API = environment.baseAPI + '/';
    protected BASE_API: string;

    constructor(
        // @Inject('config') private config: Configs,
        @Inject(PLATFORM_ID) protected platformId: object,
        public http: HttpClient,
        public cookieService?: CookieService,
        public router?: Router,
        public jwtHelperService?: JwtHelperService,
        public location?: Location,
        // protected ngbActiveModal?: NgbActiveModal
    ) {
        // this.BASE_API = this.config.BASE_API;
    }

    /**
     * Generates a GET request and returns it by the generic class injected.
     */
    protected Get<T>(api: string, param?: any, headers?: any): Observable<T> {
        return this.http.get<T>(this.BASE_API + api, { params: param, headers })
            .pipe(catchError(error => this.handleError(error)));
        // return this.http.get<T>(this.BASE_API + api, { params: param, headers: headers }).pipe(map((response: any) => response.json()));
    }

    protected ExternalGet<T>(api: string, param?: any, headers?: any): Observable<T> {
        return this.http.get<T>(api, { params: param, headers })
            .pipe(catchError(error => this.handleError(error)));
    }

    /**
     * Generates a POST request by the generic class injected.
     */
    protected Post<T>(api: string, data: any, param?: any, headers?: any): Observable<T> {
        headers = this.GetJSONAsHeader(headers);
        return this.http.post<T>(this.BASE_API + api, data, { params: param, headers })
            .pipe(catchError(error => this.handleError(error)));
    }

    /**
     * Generates a PUT request by the generic class injected.
     */
    protected Put<T>(api: string, data: any, param?: any, headers?: any, isJSON = true): Observable<T> {
        if (isJSON) {
            headers = this.GetJSONAsHeader(headers);
        }
        return this.http.put<T>(this.BASE_API + api, data, { params: param, headers })
            .pipe(catchError(error => this.handleError(error)));
    }

    /**
     * Generates a DELETE request by the generic class injected.
     */
    protected Delete<T>(api: string, data: any, param?: any, headers?: any): Observable<T> {
        headers = this.GetJSONAsHeader(headers);
        const options = {
            headers,
            body: data,
            params: param
        };
        return this.http.delete<T>(this.BASE_API + api, options)
            .pipe(catchError(error => this.handleError(error)));
    }

    /**
     * Generates a secured GET request by adding the token to the header
     */
    protected SecuredGet<T>(api: string, param?: any, headers?: any): Observable<T> {
        headers = this.GetTokenAsHeader(headers);
        return this.Get<T>(api, param, headers);
    }

    /**
     * Generates a secured POST request by adding the token to the header
     */
    protected SecuredPost<T>(api: string, data: any, param?: any, headers?: any): Observable<T> {
        headers = this.GetTokenAsHeader(headers);
        return this.Post(api, data, param, headers);
    }

    /**
     * Generates a secured PUT request by adding the token to the header
     */
    protected SecuredPut<T>(api: string, data: any, param?: any, headers?: any, isJSON = true): Observable<T> {
        headers = this.GetTokenAsHeader(headers);
        return this.Put(api, data, param, headers, isJSON);
    }

    /**
     * Generates a secured DELETE request by adding the token to the header
     */
    protected SecuredDelete<T>(api: string, data = {}, param?: any, headers?: any): Observable<T> {
        headers = this.GetTokenAsHeader(headers);
        return this.Delete(api, data, param, headers);
    }

    protected handleError(error: HttpErrorResponse) {
        console.error('An error occurred :', error); // for demo purposes only
        if (error.status === 401) {
            // logout on 401 unauthorized
            this.cookieService.remove('id_token');
            // this.ngbActiveModal.close();
            // this.ngbActiveModal.dismiss();
            this.router.navigate(['/signin'], { state: { redirect: 'session-expired' } });
        }
        return observableThrowError(error || 'Server Error');
    }

    /**
     * Set content type of header to json
     */
    private GetJSONAsHeader(headers: HttpHeaders): HttpHeaders {
        if (!headers) {
            headers = new HttpHeaders();
        }

        if (!headers.get('Content-Type')) {
            headers = headers.append('Content-Type', 'application/json');
        }

        return headers;
    }

    /**
     * Adds the token from cookie to header
     */
    protected GetTokenAsHeader(headers: HttpHeaders, token: string = 'id_token'): HttpHeaders {
        if (!headers) {
            headers = new HttpHeaders();
        }

        const Authorization = 'Bearer ' + this.cookieService.get(token);

        if (!headers.get('Authorization')) {
            headers = headers.append('Authorization', Authorization);
            //  headers = headers.append('Content-Type', 'form-data');
        }

        return headers;
    }
}
