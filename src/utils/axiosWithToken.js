import axios from "axios";
import { api_endpoint } from "../settings";


const axiosWithToken = axios.create({
  // baseURL: "http://" + window.location.hostname + ":" + api_port,
  baseURL: api_endpoint,
  timeout: 1000,
});

axiosWithToken.interceptors.request.use( (config) => {
  if (config.method === "get") {
    config.params = {
      token: sessionStorage.getItem("token"),
      key: sessionStorage.getItem("key"),
      user_id: sessionStorage.getItem("user_id"),
      ...config.params,
    };
  }
  if (config.method === "post") {
    config.data = {
      token: sessionStorage.getItem("token"),
      key: sessionStorage.getItem("key"),
      user_id: sessionStorage.getItem("user_id"),
      ...config.data,
    };
  }

  return  config;
});

axiosWithToken.interceptors.response.use((response) => {

  if (
    response.data &&
    response.data.response &&
    response.data.status === "OK"
  ) {
    sessionStorage.setItem("key", response.data.response.key);
    sessionStorage.setItem("token", response.data.response.token);
  } else if (response.data.status === "FAIL") {
    response.data.key && sessionStorage.setItem("key", response.data.key);
    response.data.token && sessionStorage.setItem("token", response.data.token);
  }

  if(response.data && +response.data.code === 17) {
    window.location.replace(window.location.origin+'/login');
  }

  return response;
});



class Queue {
  static enqueue(promise) {
      return new Promise((resolve, reject) => {
          this.queue.push({
              promise,
              resolve,
              reject
          });
          this.dequeue();
      });
  }

  static dequeue() {
      if (this.workingOnPromise) {
          return false;
      }
      if (this.stop) {
          this.queue = [];
          this.stop = false;
          return;
      }
      const item = this.queue.shift();
      if (!item) {
          return false;
      }
      try {
          this.workingOnPromise = true;
          item.promise()
              .then(value => {
                  this.workingOnPromise = false;
                  item.resolve(value);
                  this.dequeue();
              })
              .catch(err => {
                  this.workingOnPromise = false;
                  item.reject(err);
                  this.dequeue();
              });
      } catch (err) {
          this.workingOnPromise = false;
          item.reject(err);
          this.dequeue();
      }
      return true;
  }

  static get() {
    return this.enqueue(() => axiosWithToken.get(...arguments));
  }

  static post() {
    return this.enqueue(() => axiosWithToken.post(...arguments));
  }

}

Queue.queue = [];
Queue.pendingPromise = false;
Queue.stop = false;


export default Queue;

