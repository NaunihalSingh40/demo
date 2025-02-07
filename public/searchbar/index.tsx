import React from 'react'
import { Search as SearchIcon, Clear as ClearIcon } from '@mui/icons-material'
import { InputAdornment } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import TextField from '@mui/material/TextField'
import { SearchBarProps } from '@/components/searchbar/types'

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = 'Search...',
  value,
  onChange,
  onSearch,
  onClear,
  disabled = false,
}) => {
  return (
    <TextField
      fullWidth
      variant="outlined"
      size="small"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            {value && (
              <IconButton onClick={onClear} disabled={disabled} aria-label="clear search">
                <ClearIcon />
              </IconButton>
            )}
            <IconButton onClick={onSearch} disabled={disabled || !value.trim()} aria-label="execute search">
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  )
}

export default SearchBar
