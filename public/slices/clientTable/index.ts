import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ClientIRow {
  clientName: string
  msaStartDate: string
  msaExpiryDate: string
  mobileNumber: number
  emailId: string
}

interface RowsState {
  rows: ClientIRow[]
}

const initialState: RowsState = {
  rows: [],
}

const clientRowsSlice = createSlice({
  name: 'rows',
  initialState,
  reducers: {
    setRows: (state, action: PayloadAction<ClientIRow[]>) => {
      state.rows = action.payload
    },
    addRow: (state, action: PayloadAction<ClientIRow>) => {
      state.rows.push(action.payload)
    },
    updateRow: (state, action: PayloadAction<{ index: number; updatedRow: ClientIRow }>) => {
      const { index, updatedRow } = action.payload
      if (state.rows[index]) {
        state.rows[index] = updatedRow
      }
    },
    deleteRow: (state, action: PayloadAction<number>) => {
      state.rows.splice(action.payload, 1)
    },
    resetRows: (state) => {
      state.rows = []
    },
  },
})

export const { setRows, addRow, updateRow, deleteRow, resetRows } = clientRowsSlice.actions
export default clientRowsSlice.reducer
