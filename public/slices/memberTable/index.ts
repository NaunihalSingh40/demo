import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface MemberIRow {
  document?: string | null
  name: string
  email: string
  department: string
  role: string
}

interface RowsState {
  rows: MemberIRow[]
}

const initialState: RowsState = {
  rows: [],
}

const memberRowsSlice = createSlice({
  name: 'rows',
  initialState,
  reducers: {
    setRows: (state, action: PayloadAction<MemberIRow[]>) => {
      state.rows = action.payload
    },
    addRow: (state, action: PayloadAction<MemberIRow>) => {
      state.rows.push(action.payload)
    },
    updateRow: (state, action: PayloadAction<{ index: number; updatedRow: MemberIRow }>) => {
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

export const { setRows, addRow, updateRow, deleteRow, resetRows } = memberRowsSlice.actions
export default memberRowsSlice.reducer
