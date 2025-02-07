import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface StepperState {
  activeStep: number
}

const initialState: StepperState = {
  activeStep: 0,
}

const stepperSlice = createSlice({
  name: 'stepper',
  initialState,
  reducers: {
    nextStep: (state) => {
      state.activeStep += 1
    },
    resetStep: (state) => {
      state.activeStep = 0
    },
    setStep: (state, action: PayloadAction<number>) => {
      state.activeStep = action.payload
    },
  },
})

export const { nextStep, resetStep, setStep } = stepperSlice.actions
export default stepperSlice.reducer
