import { IPaginationParams, IPaginationResponse } from 'interfaces/pagination';
import { Observable } from 'rxjs';

import { API_ENDPOINT_APP } from '../settings';
import { IRequest } from './../interfaces/models/request';
import { ApiService } from './api';
import tokenService from './token';

const apiService = new ApiService(API_ENDPOINT_APP, tokenService);

export class RequestService {
  constructor(private apiService: ApiService) {}

  public list(params: IPaginationParams): Observable<IPaginationResponse<IRequest>> {
    return this.apiService.get('/request', params);
  }

  public details(id: number): Observable<IRequest> {
    return this.apiService.get(`/request/${id}`);
  }

  public save(model: IRequest): Observable<IRequest> {
    return this.apiService.post('/request', model);
  }

  public delete(id: number): Observable<void> {
    return this.apiService.delete(`/request/${id}`);
  }
}

const requestService = new RequestService(apiService);
export default requestService;
