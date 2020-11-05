import { api_endpoint } from "../settings";
import axios from "axios/index";

export default class ApiConn{
    constructor() {
        if (ApiConn.instance instanceof ApiConn){
            return ApiConn.instance;
        }
        // this.token = 10000;
        // this.key = Math.round(Math.random()*1000);
        this.token = sessionStorage.getItem('token');
        this.key = sessionStorage.getItem('key');
        ApiConn.instance = this;
        console.log("KEY = " + this.key);
    }

    fetch = (method, authorize, url, args) => new Promise(
        async resolve => {
            console.log("Calling API with key: " + this.key
                + " method = " + method
                + " authorize:" + authorize
                + " url:" + url
                + " args:" + JSON.stringify(args)
            );
            if (authorize) {

                args.key = this.key;
                args.token = this.token;
                // console.log("Added token and key to args, ARGS: " + JSON.stringify(args));
            }
            /* eslint-disable default-case*/
            switch (method) {
                case "GET": {
                    const rez = await axios.get(
                        api_endpoint+"/"+url,

                        {
                            params:args
                        }
                    );
                    if (authorize) {
                        const new_key = rez.data.response.key;
                        const new_token = rez.data.response.token;
                        console.log("NEW KEY: "+ new_key);
                        this.key = new_key;
                        this.token = new_token;
                    }
                    resolve(rez);
                    break;
                }
                case "POST": {
                    const rez = await axios.post(
                        api_endpoint+"/"+url,
                        args
                    );
                    if (authorize) {
                        const new_key = rez.data.response.key;
                        const new_token = rez.data.response.token;
                        console.log("NEW KEY: "+ new_key);
                        this.key = new_key;
                        this.token = new_token;
                    }
                    resolve(rez);
                    break;
                }
            }


        },
        async reject => {
            reject('error');
         }

    );

    addTask = (() => {
        let pending = Promise.resolve();

        const run = async (method, authorize, url, args) => {
            try {
                await pending;
            }
            finally {
                return this.fetch(method, authorize, url, args);
            }
        };

        // update pending promise so that next task could await for it
        return (method, authorize, url, args) => (pending = run(method, authorize, url, args))
    })();
}
