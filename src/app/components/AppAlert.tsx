import React from 'react'
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

export const AppAlert = () => {
  return (
    <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
        AppAlert
    </Alert>
  )
}
