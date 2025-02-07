export interface SearchBarProps {
  placeholder?: string
  value: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => typeof event | void
  onSearch?: () => void
  onClear?: () => void
  disabled?: boolean
}
