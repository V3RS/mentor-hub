export function setButtonStyling(status) {
    if (status === 'primary') {
      return {
          background: `#13A77B`,
          color: `white`,
          border: `border: 2px solid #303030`,
          display: `none`
      }
    } else if (status === 'secondary') {
      return {
        background: `#FFFFFF`,
        color: `#303030`,
        border: `border: 2px solid #303030`,
        display: `none`
      }
    }
    else if (status === 'google-btn') {
        return {
          background: `#FFFFFF`,
          color: `#303030`,
          border: `border: 2px solid #303030`,
          display: `inline-block`
        }
    }
  }
