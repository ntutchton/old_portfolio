import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {  }
})

function Contact(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Typography variant="h2">
        Contact
      </Typography>
    </div>
  );
}

// LogoDark.propTypes = {
//   size: PropTypes.number.isRequired,
// };

export default withStyles(styles)(Contact);
