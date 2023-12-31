import { createStore as _createStore } from 'vuex';
import axios from 'axios';

const ALERT_TIMEOUT = 6000;

export function createStore(currentToken, currentUser) {
  let store = _createStore({
    state: {
      token: currentToken || '',
      user: currentUser || {
        id: 0
      },
      currentCollection: 0,
      currentRecord: 0,
      location: 'Home',
      searchCriteria: 'Name',
      searchRequest: ''
    },
    mutations: {
      SET_AUTH_TOKEN(state, token) {
        state.token = token;
        localStorage.setItem('token', token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      },
      SET_USER(state, user) {
        state.user = user;
        localStorage.setItem('user', JSON.stringify(user));
      },
      LOGOUT(state) {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        state.token = '';
        state.user = {};
        axios.defaults.headers.common = {};
      },
      SET_NOTIFICATION(state, notification) {
        if (state.notification) {
          this.commit('CLEAR_NOTIFICATION');
        }
        if (typeof notification === 'string') {
          notification = {
            message: notification,
            type: 'error',
            timeout: ALERT_TIMEOUT
          }
        } else {
          notification.type = notification.type || 'error';
          notification.timeout = notification.timeout || ALERT_TIMEOUT;
        }

        state.notification = notification;

        notification.timer = window.setTimeout(() => {
          this.commit('CLEAR_NOTIFICATION');
        }, notification.timeout);
      },
      CLEAR_NOTIFICATION(state) {
        if (state.notification && state.notification.timer) {
          window.clearTimeout(state.notification.timer);
        }
        state.notification = null;
      },
      SET_CURRENT_COLLECTION(state, collectionId) {
        state.currentCollection = collectionId;
      },
      SET_CURRENT_RECORD(state, recordId) {
        state.currentRecord = recordId;
      },
      SET_LOCATION(state, location) {
        state.location = location;
      },
      SET_SEARCH_CRITERIA(state, searchCriteria) {
        state.searchCriteria = searchCriteria;
      },
      SET_SEARCH_REQUEST(state, searchRequest) {
        state.searchRequest = searchRequest;
      }, 
    },

  });
  return store;
}
