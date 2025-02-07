import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';

const BreadcrumbComponent = ({ title }: { title: string }) => {
  return (
    <Breadcrumbs separator='>' aria-label='breadcrumb'>
      <Link component={RouterLink} underline='hover' color='inherit' to='/'>
        <Typography color='#686868'>Home</Typography>
      </Link>
      <Typography key='2' color='#115469'>
        {title}
      </Typography>
    </Breadcrumbs>
  );
};

export default BreadcrumbComponent;
