// firebase 연동
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: REACT_APP_FB_API_KEY,
  authDomain: REACT_APP_FB_AUTH_DOMAIN,
  projectId: REACT_APP_FB_PROJECT_ID,
  storageBucket: REACT_APP_FB_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_FB_MSG_SENDER_ID,
  appId: REACT_APP_FB_APP_ID,
  measurementId: REACT_APP_FB_MES_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
