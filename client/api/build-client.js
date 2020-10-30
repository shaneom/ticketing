import axios from 'axios';

const buildClient = ({ req }) => {
  //if the windows environment variable is undefined
  //then we are on the server.
  if (typeof window === 'undefined') {
    return axios.create({
      baseURL: 'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',
      headers: req.headers,
    });
  } else {
    //We are in the browser
    return axios.create({
      baseURL: '/',
    });
  }
};

export default buildClient;
