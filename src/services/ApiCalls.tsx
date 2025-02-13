import {SagaActions} from '../redux/sagas/SagaActions';
import ApiUrls from './ApiUrls';

export const ApiCalls = ({apiType}:any) => {
  let requestType = '';
  let requestUrl = '';
  switch (apiType) {
    /* POST request */
    case SagaActions.LOGIN_USER:
      requestType = 'POST';
      requestUrl = ApiUrls.LOGIN_URL;
      break;

    default:
      requestType = '';
      requestUrl = '';
      break;
  }
  return {requestType, requestUrl};
};
