export const fields = [
  { name: 'name', label: 'Name', placeholder: 'Enter your name' },
  { name: 'email', label: 'Email', placeholder: 'Enter your email', type: 'email' },
  { name: 'password', label: 'Password', placeholder: 'Enter your password', type: 'password' },
  { name: 'confirmPassword', label: 'Confirm Password', placeholder: 'Re-enter your password', type: 'password' },
  { name: 'username', label: 'Username', placeholder: 'Enter your username' },
  { name: 'department', label: 'Department', placeholder: 'Enter your department' },
  { name: 'phone', label: 'Phone', placeholder: 'Enter your phone number', type: 'tel' },
]
export const initalState = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  username: '',
  phone: '',
  role: '',
  department: '',
}
