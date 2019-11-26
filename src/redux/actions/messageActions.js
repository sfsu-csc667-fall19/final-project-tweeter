import axios from 'axios';

export const setMessage = message => ({
  type: 'MESSAGES_SET_MESSAGES',
  message,
})

export const listMessage = () => (dispatch) => {
  axios.get('/messages/getMessage')
    .then((res) => dispatch(setMessage(res.data)))
    .catch(console.log);
};

export const createMessage = (message) => (dispatch) => {
  axios.get(`/messages/postMessage?body=${message.data}`)
  .then(() => {
    dispatch(listMessage());
  })
  .catch(console.log);
};

export const updateMessage = (message) => (dispatch) => {
  axios.get(`/messages/updateMessage?id=${message._id}&body=${message.data}`)
  .then(() => {
    dispatch(listMessage());
  })
  .catch(console.log);
};

export const deleteMessage = (message) => (dispatch) => {
  axios.get(`/messages/deleteMessage?id=${message._id}`)
  .then(() => {
    dispatch(listMessage());
  })
  .catch(console.log);
};