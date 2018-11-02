import EventEmitter from 'events';
import config from '../../config';
import axios from 'axios';

const baseUrl = config.tigerBlindsApi;

class BlindApi extends EventEmitter {
  constructor() {
    super();                    
  }
  getBlindList() {
    return axios.get(`${baseUrl}/blinds`);
  }

  openBlind(id) {
    const data = { data: {
      blindid: id
    }}
    console.log(data);
    return axios.post(`${baseUrl}/blinds/openBlind`, data);
  }

  closeBlind(id) {
    const data = { data: {
      blindid: id
    }}
    return axios.post(`${baseUrl}/blinds/closeBlind`, data);
  }

  addBlind(data) {
    console.log(`blindApi:addBlind - data ${ JSON.stringify(data, null, 1) }`);
    return axios.post(`${baseUrl}/blinds/addBlind`, { 
      data 
    })
  }

  removeBlind(id) {
    return axios.post(`${baseUrl}/blinds/removeBlind`, { 
      data: {
        blindid: id
      } 
    })
  }

  setPositionLimit(id, positionLimitOption, angle) {
    // console.log(`setPositionLimit positionLimitOption: ${ positionLimitOption }, angle: ${ angle }`);
    switch(positionLimitOption) {
      case 'open':
        return axios.post(`${baseUrl}/blinds/setOpenAngleLimit`, { 
          data: {
            blindId: id,
            angleLimitOpen: angle
          } 
        })
      case 'closed':
        return axios.post(`${baseUrl}/blinds/setClosedAngleLimit`, { 
          data: {
            blindId: id,
            angleLimitClosed: angle
          } 
        })
        break;
      default:
        break;
    }
  }
}

export default BlindApi