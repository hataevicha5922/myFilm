// import React from 'react';

// const Avatar = () => {
//   return <div>Avatar</div>;
// };

// export default Avatar;
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
// import { deepOrange } from '@mui/material/colors';

const FallbackAvatars = () => {
  return (
    <Stack direction="row" spacing={2}>
      {/* <Avatar
        sx={{ bgcolor: deepOrange[500] }}
        alt="Remy Sharp"
        src="/broken-image.jpg"
      >
        B
      </Avatar>
      <Avatar
        sx={{ bgcolor: deepOrange[500] }}
        alt="Remy Sharp"
        src="/broken-image.jpg"
      /> */}
      <Avatar src="/broken-image.jpg" />
    </Stack>
  );
};

export default FallbackAvatars;
