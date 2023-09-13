import axios from "axios";
import {removeLocalStorage} from './helpers'
import {toastError} from "@/plugins/toastify"

export class HttpClient {

    constructor(baseUrl) {
        this.axiosInstance = axios.create({
          baseURL: baseUrl,
          timeout: 300000,
        });
    }

    async handleError(err) {
      var { response } = err;
      // if API error
      if (response) {
        var { status } = response;
        // If error code == 401 => Token expired or invalid
        if (status == 401) {
          // Remove all localstorage
          removeLocalStorage(process.env.VUE_APP_USER);
          removeLocalStorage(process.env.FRESHFOOD_ACCESS_TOKEN);
          removeLocalStorage(process.env.VUE_APP_ROLE);
  
          // await sleep(1000);
          // Redirect to login
          return toastError({
            msg: "Email hoặc pasword không dúng",
            duration: 1500
          })
        }
      }
      let apiResponse = new ApiResponse(err, true);
      let resultError = apiResponse.formatResponse().getResult();
      return resultError;
    }

    getOptions(header = {}, auth) {
        var options = {
          headers: buildHeaders(header, auth),
        };
        return options;
    }

    get(url, auth = true, query = {}, headers = {}) {
      let options = this.getOptions(headers, auth);
      // console.log(options)
      url = buildUrl(url, query);
  
      return new Promise((resolve) => {
        this.axiosInstance
          .get(url, options)
          .then((res) => resolve(res.data))
          .catch((err) => resolve(this.handleError(err)));
      });
    }

    getFile(
      url,
      query = {},
      headers = {},
      contentType = "plain/text",
      filename = "DownloadedFile"
    ) {
      let options = this.getOptions(headers);
      options["Content-Type"] = contentType;
      options["responseType"] = "blob";
      url = buildUrl(url, query);
  
      return new Promise((resolve) => {
        this.axiosInstance
          .get(url, options)
          .then((res) => {
            var { data } = res;
            const url = window.URL.createObjectURL(
              new Blob([data], {
                type: contentType,
              })
            );
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", filename);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            resolve(true);
          })
          .catch((err) => resolve(this.handleError(err)));
      });
    }

    post(url, auth = true, query = {}, body = {}, headers = {}) {
      let options = this.getOptions(headers, auth);
      url = buildUrl(url, query);  
      return new Promise((resolve) => {
        this.axiosInstance
          .post(url, body, options)
          .then((res) => resolve(res.data))
          .catch((err) => resolve(this.handleError(err)));
      });
    }
  
    put(url, auth = true,  query = {}, body = {}, headers = {}) {
      let options = this.getOptions(headers, auth);
      url = buildUrl(url, query);
  
      return new Promise((resolve) => {
        this.axiosInstance
          .put(url, body, options)
          .then((res) => resolve(res.data))
          .catch((err) => resolve(this.handleError(err)));
      });
    }
  
    delete(url, auth = true, query = {}, headers = {}) {
      let options = this.getOptions(headers, auth);
      url = buildUrl(url, query);
  
      return new Promise((resolve) => {
        this.axiosInstance
          .delete(url, options)
          .then((res) => resolve(res.data))
          .catch((err) => resolve(this.handleError(err)));
      });
    }

    postFile(
      url,
      query = {},
      file,
      body = {},
      headers = {},
      onUploadProgress = null
    ) {
      let formData = new FormData();
      formData.append("file-upload", file);
  
      for (let key in body) {
        formData.append(key, body[key]);
      }
  
      let options = this.getOptions(headers);
      if (onUploadProgress) {
        options.onUploadProgress = onUploadProgress;
      }
  
      url = buildUrl(url, query);
  
      return new Promise((resolve) => {
        this.axiosInstance
          .post(url, formData, options)
          .then((res) => resolve(res.data))
          .catch((err) => resolve(this.handleError(err)));
      });
    }
  
}

export class ApiResponse {
  StatusAPI = {
     //
     100: "Continue",
     101: "Switching Protocol",
     102: "Processing",
     103: "Early Hints",
     //
     200: "OK",
     201: "Created",
     202: "Accept",
     203: "Non-Authoritative Information",
     204: "No content",
     //
     300: "Multiple choices",
     301: "Moved Permanently",
     302: "Found",
     303: "See Other",
     304: "Not Modified",
     307: "Temporary Redirect",
     //
     400: "Bad request! Or some inputs are missing",
     401: "Unauthorized! You are not allowed to access!",
     403: "Forbidden",
     404: "Not found! Or the url is not correct!",
     405: "Method not allowed!",
     406: "Not acceptable!",
     412: "Precondition failed",
     415: "Unsupported media type",
     //
     500: "Internal Server Error! Or something makes it broken",
     501: "Not Implemented",
     0: "Unknown status code",
  };

  statusCode;
  data = null;
  header = "";
  message = "";
  error;
  axiosInstance;

  constructor(axiosInstance, error = false) {
    this.axiosInstance = axiosInstance;
    this.error = error;
  }

  formatResponse() {
    if (this.error) {
      if (this.axiosInstance.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        this.statusCode = this.axiosInstance.response.status;
        this.data = this.axiosInstance.response.data;
        this.header = this.axiosInstance.response.headers;
        // format message
        // this.data: from Back end return
        if (this.data != null) {
          if (this.data.errorMessage) {
            this.message = convertLongWordToEasyWord(
              this.data.errorMessage,
              ""
            );
          } else {
            this.message = this.data.errorName
              ? convertLongWordToEasyWord(this.data.errorName, "")
              : this.StatusAPI[this.statusCode];
          }
        } else {
          this.message = this.StatusAPI[this.statusCode]
            ? this.StatusAPI[this.statusCode]
            : "Something went wrong!";
        }
      } else if (this.axiosInstance.request) {
        // the request was made but no response was received
        this.message = "Not response from server! Something went wrong!";
        this.statusCode = 0;
      } else {
        // Something happened in setting up the request that triggered an Error
        this.message = this.axiosInstance.message;
        this.statusCode = 0;
      }
    }
    return this;
  }

  getResult() {
    return {
      error: this.axiosInstance.toString(),
      message: this.message,
      statusCode: this.statusCode,
      header: this.header,
    };
  }
}

export function getDefaultRequestHeaders(auth) {
    return {
      "Content-Type": "application/json",
      Authorization: auth ? "Bearer "+localStorage.getItem(process.env.VUE_APP_ACCESS_TOKEN) : null,
    };
}

export function buildHeaders(headers, auth) {
    let requestHeaders = getDefaultRequestHeaders(auth);

    if (!headers) {
      return requestHeaders;
    }
    if (Array.isArray(headers)) {
      return requestHeaders;
    }
    for (let keyname in headers) {
      requestHeaders[keyname.toLowerCase()] = headers[keyname];
    }
  
    return requestHeaders;
}

export const convertLongWordToEasyWord = (stringInput = "", result) => {
  let string = stringInput;
  let resultString = result;

  for (let i = 0; i < string.length; i++) {
    let char = string.charAt(i);
    if (char == " ") {
      i = i + 1;
      char = string.charAt(i).toUpperCase(); // get next char
    }
    if (char == char.toUpperCase()) {
      resultString =
        i == 0 && resultString == "" ? char : `${resultString} ${char}`;
    } else {
      if (i == 0 && resultString == "") {
        resultString = char.toUpperCase();
      } else {
        resultString += `${char}`;
      }
    }
    if (i + 1 == string.length) {
      return resultString;
    }
    let nextString = string.slice(i + 1, string.length);
    return convertLongWordToEasyWord(nextString, resultString);
  }
  return result;
};

export function buildUrl(url, query) {
  if (!query || query === {} || Array.isArray(query)) {
    return url;
  }
  for (const keyname in query) {
    if (typeof query[keyname] == "object") {
      continue;
    }
    const param = `{${keyname}}`;
    while (url.includes(param)) {
      url = url.replace(param, query[keyname]);
    }
  }
  const queries = [];
  for (const keyname in query) {
    if (typeof query[keyname] !== "object") {
      queries.push(`${keyname}=${query[keyname]}`);
      continue;
    }
    if (Array.isArray(query[keyname])) {
      queries.push(`${keyname}=${query[keyname].join(",")}`);
    } else {
      queries.push(`${keyname}=${JSON.stringify(query[keyname])}`);
    }
  }
  return `${url}?${queries.join("&")}`;
}