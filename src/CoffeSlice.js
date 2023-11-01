import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';


export const coffeeDetails=createAsyncThunk("coffeDetails", async () => {
    const response = await fetch("https://api.sampleapis.com/coffee/iced");
    return response.json();
  });
export const coffeSlice=createSlice({
    name:'coffeeShop',
    initialState:{
        isLoading:false,
        data:null,
        isError:false, 
    },
    extraReducers:(builder)=>{
        builder.addCase(coffeeDetails.pending,(state,action)=>{
            state.isLoading=true;
        });
        builder.addCase(coffeeDetails.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.data=action.payload;
        });
        builder.addCase(coffeeDetails.rejected,(state,action)=>{
            state.isError=true;
            console.log('error',action.payload)
        });
    }

});
export default coffeSlice.reducer;

