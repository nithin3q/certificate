const styleSheet = (primary = "#007bff", secondary = "#00c851", primarys = "#225572", secondarys = "#1C9662") => {
  return {
    'certificate-container': {
      border: `2px solid ${primarys}`,
      maxWidth: '60vw',
      width: '60vw',
      minWidth: '300px',
      padding: '2vw',
      position: 'relative',
      margin: 'auto',
      borderRadius: '0.5vw',
      background: '#eceef4',
      backgroundImage: `url('../assets/5386357.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      boxSizing: 'border-box',
      '@media (max-width: 768px)': {
        maxWidth: '100vw',
        width: '95vw',
        padding: '4vw',
      },
    },
    'styled-div': {
      '& > img': {
        width: "10vw",
        height: "10vw",
        marginTop: "-1vw",
      },
      backgroundColor: primarys,
      width: '8vw',
      height: '8vw',
      position: 'absolute',
      top: '2vw',
      left: '2vw',
      clipPath: 'polygon(100% 0, 100% 100%, 50% 75%, 0 100%, 0 0)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '0.5vw',
      boxSizing: 'border-box',
    },
    'main-content': {
      textAlign: "center",
      width: "100%",
      margin: "auto",
    },
    "main-heading": {
      "& > span": {
        display: "block",
        fontSize: "4.9vw",
        fontWeight: "700",
        '@media (min-width: 1200px)': {
          fontSize: "3.3vw",
        },
      },
      color: primarys,
      fontSize: "3vw",
      marginBottom: "2vw",
      lineHeight: "1.2",
      '@media (min-width: 1200px)': {
        fontSize: "2.0vw",
      },
    },
    'certificate-text': {
      '& .name': {
        color: primarys,
        display: "block",
        fontSize: "4vw",
        width: "fit-content",
        margin: "0 auto 1.5vw",
        padding: "0 2vw",
      },
      '& > span': {
        fontWeight: "600",
      },
      color: '#3C3D3F',
      fontSize: "2.7vw",
      fontFamily: "'Roboto', sans-serif",
      lineHeight: "1.5",
      '@media (min-width: 1200px)': {
        fontSize: "1.8vw",
      },
    },
    'certificate-footer': {
      width: "100%",
      margin: "2vw auto 0",
      fontFamily: "'Roboto', sans-serif",
    },
    'footer-content': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    'qr-code-container': {
      marginRight: 'auto',
    },
    'designation-container': {
      textAlign: 'center',
      flex: 1,
    },
    'issuer': {
      margin: "0",
      fontWeight: "600",
    },
    'issuer-designation': {
      margin: "0",
    },
    'issued-date': {
      marginLeft: 'auto',
    },
    'certificate-uuid': {
      textAlign: "center",
      fontSize: "1vw",
      fontWeight: "300",
      marginBottom: "-1vw",
      fontFamily: "'Roboto', sans-serif",
      '@media (min-width: 1200px)': {
        fontSize: "0.9vw",
      },
    },
  }
};

export default styleSheet;
