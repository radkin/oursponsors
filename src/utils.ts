import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';

import {INAJAR_URL} from 'react-native-dotenv';

const url = `${INAJAR_URL}`;
const instance: AxiosInstance = axios.create({
  baseURL: url,
  timeout: 1000,
});

export async function performAxiosRequest(
  requestConfig: AxiosRequestConfig,
  expectData: boolean,
): Promise<any> {
  return await new Promise<any>((res, rej) => {
    instance
      .request(requestConfig)
      .then(function (response: AxiosResponse) {
        if (expectData) {
          res(response.data);
        } else {
          res({
            data: response.data,
            statusCode: response.status,
            location:
              response.headers.location || response.headers['content-location'],
          });
        }
      })
      .catch(function (error: AxiosError) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          rej(
            `ERROR [${error.response.status}] [${requestConfig.method} ${
              requestConfig.url
            }]: ${JSON.stringify(error.response.data)}`,
          );
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          rej(
            `The request was made but no response was received: ${JSON.stringify(
              error.request,
            )}`,
          );
        } else {
          // Something happened in setting up the request that triggered an Error
          rej(
            `An error occurred while setting up the request: ${JSON.stringify(
              error.message,
            )}`,
          );
        }
        rej(error.config);
      });
  });
}
