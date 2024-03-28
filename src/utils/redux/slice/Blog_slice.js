import { createSlice } from '@reduxjs/toolkit';

// Crea uno slice
const blogSlice = createSlice({
  name: 'blog', // Nome dello slice
  initialState: {
    Theme : 'light'
  }, 

  reducers: {
    // Definisci azioni per manipolare lo stato
    switchTheme: (state, action) => {
      if(state.Theme == "light") {
        state.Theme = "dark";
      } else {
        state.Theme = "light";
      }
    }
  },
});

// Esporta azioni e riduttori generati da createSlice
export const { switchTheme } = blogSlice.actions;
export default blogSlice.reducer;