import { createAsyncThunk, createSlice } from '@reduxJs/toolkit';
import { signInAnonymously, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import firebaseAuth, { db } from './../../fierbaseConfig';
import {DocumentData, doc, setDoc, getDoc } from 'firebase/firestore';



interface UserData {
  username: string;
  uid: string;
  DocumentData?:any;
  loginMethod: 'google' | 'guest';
}

interface LoginState {
  username: string | null;
  status: 'idle' | 'loading' | 'failed';
  loginMethod: 'google' | 'guest' | 'none';
  userData?: UserData; 

}


const initialState: LoginState = {
  username: '',
  status: 'idle',
  loginMethod: 'none',
  userData: undefined, 
  
};
// Async thunk for guest login
export const loginAsGuestAsync = createAsyncThunk(
  'login/guestLogin',
  async (_, thunkAPI) => {
    try {
      const response = await signInAnonymously(firebaseAuth);
      // Handle guest login success
      // Usually, there's no username for anonymous users, adjust as needed
      return { username: 'Guest', loginMethod: 'guest' };
    } catch (error) {
      // Handle guest login failure
      return thunkAPI.rejectWithValue((error as Error).message);
    }
  }
);

// Async thunk for Google login
export const loginWithGoogleAsync = createAsyncThunk(
  'login/googleLogin',
  async (_, thunkAPI) => {
    try {
      const provider = new GoogleAuthProvider();
      const response = await signInWithPopup(firebaseAuth, provider);
      const userData = {
        username: response.user.email,
        uid: response.user.uid,
        loginMethod: 'google',
      };
      // Save user data to Firestore
      await setDoc(doc(db, 'users', response.user.uid), userData);
      return userData;
    } catch (error) {
      return thunkAPI.rejectWithValue((error as Error).message);
    }
  }
);

export const fetchUserData = createAsyncThunk(
  'login/fetchUserData',
  async (uid: string, thunkAPI) => {
    try {
      const docRef = doc(db, 'users', uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data() as DocumentData;

        // Assert the type of data to match UserData
        const userData: UserData = {
          username: data.username,
          uid: data.uid,
          loginMethod: data.loginMethod,
        };

        return userData;
      } else {
        // Doc not found
        return thunkAPI.rejectWithValue('No such document!');
      }
    } catch (error) {
      return thunkAPI.rejectWithValue((error as Error).message);
    }
  }
);
export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Existing handlers...
      .addCase(fetchUserData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        // Assuming you want to store the fetched user data in the state
        state.userData = action.payload;
        state.status = 'idle';
      })
      .addCase(fetchUserData.rejected, (state) => {
        state.status = 'failed';
      })
        .addCase(loginWithGoogleAsync.pending, (state) => {
        state.status = 'loading';
      })
    .addCase(loginWithGoogleAsync.fulfilled, (state, action) => {
      state.username = action.payload.username;
      state.status = 'idle';
      state.loginMethod = action.payload.loginMethod as 'google' | 'guest' | 'none';;
    })
    .addCase(loginWithGoogleAsync.rejected, (state) => {
      state.status = 'failed';
    });
},
  });

export default loginSlice.reducer;
