import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

const FallbackAvatars = () => {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar src="/broken-image.jpg" />
    </Stack>
  );
};

export default FallbackAvatars;
