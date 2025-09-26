import type { AxiosRequestConfig } from 'axios';
import { axiosInstance } from './axiosInstance';

export class ApiClient {
  static GET<ResponseData>({ url, config = {} }: { url: string; config?: AxiosRequestConfig }) {
    return axiosInstance.get<ResponseData>(url, config).then((res) => res.data);
  }

  static POST<ResponseData, RequestData>({
    url,
    data,
    config = {},
  }: {
    url: string;
    data: RequestData;
    config?: AxiosRequestConfig;
  }) {
    return axiosInstance.post<ResponseData>(url, data, config).then((res) => res.data);
  }

  static PATCH<ResponseData, RequestData>({
    url,
    data,
    config = {},
  }: {
    url: string;
    data: RequestData;
    config?: AxiosRequestConfig;
  }) {
    return axiosInstance.patch<ResponseData>(url, data, config).then((res) => res.data);
  }

  static PUT<ResponseData, RequestData>({
    url,
    data,
    config = {},
  }: {
    url: string;
    data: RequestData;
    config?: AxiosRequestConfig;
  }) {
    return axiosInstance.put<ResponseData>(url, data, config).then((res) => res.data);
  }

  static DELETE<ResponseData>({ url, config = {} }: { url: string; config?: AxiosRequestConfig }) {
    return axiosInstance.delete<ResponseData>(url, config).then((res) => res.data);
  }
}
