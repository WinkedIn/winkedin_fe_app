import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from 'axios';
import config from '../config';
import {SagaActions} from '../redux/sagas/SagaActions';
import {ApiCalls} from './ApiCalls';
import { goToTopNavigation } from '../components/NavigationRef';

const httpPutRequest = async ({apiUrl, jsonBody, apiType}) => {
  let data;
  console.log('apiUrl', apiUrl)
  if (
    apiType == SagaActions.UPDATE_PROFILE ||
    apiType == SagaActions.CREATE_SUPPORT 
  ) {
    data = PrepareFormData(jsonBody);
  } else {
    data = jsonBody;
  }
  const userToken = JSON.parse(
    await AsyncStorage.getItem(config.AsyncKeys.USER_TOKEN),
  );

  const response = await Axios.put(apiUrl, data, {
    headers: {
      Accept: 'application/json',
      'content-type':
        apiType == SagaActions.UPDATE_PROFILE ||
        apiType == SagaActions.CREATE_SUPPORT
          ? 'multipart/form-data'
          : 'application/json',
      'x-auth-token-user': userToken && userToken,
    },
  })
    .then(result => {
      console.log('result.data===', result.data);
      let isSucceded = false;
      if (result?.data?.error == false) {
        isSucceded = true;
      }
      return {result, isSucceded};
    })
    .catch(error => {
      const excep = error;
      const errorParse=JSON.parse(JSON.stringify(error));
      console.log('Error', JSON.stringify(error));
      if(errorParse.status==401){
         goToTopNavigation(config.routes.AUTH_NAVIGATION);
         return {
          result: excep,
          isSucceded: false,
          message: excep,
        };
      }

      return {
        result: excep,
        isSucceded: false,
        message: excep,
      };
    });
  return response;
};
const httpPatchRequest = async ({apiUrl, jsonBody, apiType}) => {
  let data;
  console.log('apiUrl', apiUrl)
  if (
    apiType == SagaActions.UPDATE_PROFILE ||
    apiType == SagaActions.CREATE_SUPPORT 
  ) {
    data = PrepareFormData(jsonBody);
  } else {
    data = jsonBody;
  }
  const userToken = JSON.parse(
    await AsyncStorage.getItem(config.AsyncKeys.USER_TOKEN),
  );

  const response = await Axios.patch(apiUrl, data, {
    headers: {
      Accept: 'application/json',
      'content-type':
        apiType == SagaActions.UPDATE_PROFILE ||
        apiType == SagaActions.CREATE_SUPPORT
          ? 'multipart/form-data'
          : 'application/json',
      'x-auth-token-user': userToken && userToken,
    },
  })
    .then(result => {
      console.log('result.data===', result.data);
      let isSucceded = false;
      if (result?.data?.error == false) {
        isSucceded = true;
      }
      return {result, isSucceded};
    })
    .catch(error => {
      const excep = error;
      const errorParse=JSON.parse(JSON.stringify(error));
      console.log('Error', JSON.stringify(error));
      if(errorParse.status==401){
         goToTopNavigation(config.routes.AUTH_NAVIGATION);
         return {
          result: excep,
          isSucceded: false,
          message: excep,
        };
      }

      return {
        result: excep,
        isSucceded: false,
        message: excep,
      };
    });
  return response;
};
const httpPostRequest = async ({apiUrl, jsonBody, apiType}) => {
  let data;
  console.log('apiUrl', apiUrl)
  if (
    apiType == SagaActions.UPDATE_PROFILE ||
    apiType == SagaActions.UPLOAD_IMAGE ||
    apiType == SagaActions.CREATE_SUPPORT 
  ) {
    data = PrepareFormData(jsonBody);
  } else {
    data = jsonBody;
  }
  const userToken = JSON.parse(
    await AsyncStorage.getItem(config.AsyncKeys.USER_TOKEN),
  );

  const response = await Axios.post(apiUrl, data, {
    headers: {
      Accept: 'application/json',
      'content-type':
        apiType == SagaActions.UPDATE_PROFILE ||
        apiType == SagaActions.UPLOAD_IMAGE ||
        apiType == SagaActions.CREATE_SUPPORT
          ? 'multipart/form-data'
          : 'application/json',
      'x-auth-token-user': userToken && userToken,
    },
  })
    .then(result => {
      console.log('result.data===', result.data);
      let isSucceded = false;
      if (result?.data?.error == false) {
        isSucceded = true;
      }
      return {result, isSucceded};
    })
    .catch(error => {
      const excep = error;
      const errorParse=JSON.parse(JSON.stringify(error));
      console.log('Error', JSON.stringify(error));
      if(errorParse.status==401){
         goToTopNavigation(config.routes.AUTH_NAVIGATION);
         return {
          result: excep,
          isSucceded: false,
          message: excep,
        };
      }

      return {
        result: excep,
        isSucceded: false,
        message: excep,
      };
    });
  return response;
};

const PrepareFormData = body => {
  try {
    const formData = new FormData();
    if (typeof body === 'object') {
      const keys = Object.keys(body);

      keys.forEach(key => {
        if (Array.isArray(body[key])) {
          for (let index = 0; index < body[key].length; index++) {
            let element = body[key][index];
          

            formData.append(`${key}`, element);
          }
        } else {
          formData.append(key, body[key]);
        }
      });
      return formData;
    }
  } catch (error) {
    console.log(error);
  }
  return null;
};

const httpGetRequest = async ({apiUrl}) => {
  const userToken = JSON.parse(
    await AsyncStorage.getItem(config.AsyncKeys.USER_TOKEN),
  );


  const response = await Axios.get(apiUrl, {
    headers: {
      Accept: 'application/json',
      'content-type': 'application/json',
      'x-auth-token-user': userToken && userToken,
    },
  })
    .then(result => {
      let isSucceded = false;
      if (result?.data?.error == false) {
        isSucceded = true;
      }
      return {result, isSucceded};
    })
    .catch(error => {
      const excep = error;
      const errorParse=JSON.parse(JSON.stringify(error));
      console.log('Error', JSON.stringify(error));
      if(errorParse.status==401){
        goToTopNavigation(config.routes.AUTH_NAVIGATION);
         return {
          result: excep,
          isSucceded: false,
          message: excep,
        };
      }
      return {
        result: excep,
        isSucceded: false,
        message: excep,
      };
    });
  return response;
};

export const callApiService = async (apiType, jsonBody) => {
  const request = ApiCalls({apiType});
  let apiUrl = request.requestUrl;
  if (request.requestType === 'POST') {
    if (jsonBody.uri) {
      const extraUriStr = `${jsonBody.uri}`;
      console.log('extraUriStr', extraUriStr);
      apiUrl = `${apiUrl}${extraUriStr}`;
    }
 
    console.log('Post', jsonBody, apiType);
    const req = await httpPostRequest({apiUrl, jsonBody, apiType});
    return req;
  }
  if (request.requestType ==='PATCH') {
    if (jsonBody.uri) {
      const extraUriStr = `${jsonBody.uri}`;
      console.log('extraUriStr', extraUriStr);
      apiUrl = `${apiUrl}${extraUriStr}`;
    }
 
    console.log('PATCH', jsonBody, apiType);
    const req = await httpPatchRequest({apiUrl, jsonBody, apiType});
    return req;
  }
  if (request.requestType ==='PUT') {
    if (jsonBody.uri) {
      const extraUriStr = `${jsonBody.uri}`;
      console.log('extraUriStr', extraUriStr);
      apiUrl = `${apiUrl}${extraUriStr}`;
    }
 
    console.log('PATCH', jsonBody, apiType);
    const req = await httpPutRequest({apiUrl, jsonBody, apiType});
    return req;
  }
  if (request.requestType === 'GET') {
    if (jsonBody.uri) {
      const extraUriStr = `${jsonBody.uri}`;
      console.log('extraUriStr', extraUriStr);
      apiUrl = `${apiUrl}${extraUriStr}`;
    }
    console.log('Get ', apiUrl);
    const req = await httpGetRequest({apiUrl});
    return req;
  }
  return {message: 'error'};
};
