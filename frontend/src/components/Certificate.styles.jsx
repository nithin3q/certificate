const styleSheet = (primary = "#007bff", secondary = "#00c851", primarys = "#225572", secondarys = "#1C9662") => {
  return {
    'certificate-container': {
      border: `2px solid ${primarys}`,
      maxWidth: '60vw', // Default for larger devices
      width: '60vw', // Default for larger devices
      minWidth: '300px',
      padding: '2vw',
      position: 'relative',
      margin: 'auto',
      borderRadius: '0.5vw',
      background: '#eceef4',
      boxSizing: 'border-box',
      '@media (max-width: 768px)': {
        maxWidth: '100vw', // For small devices
        width: '95vw', // For small devices
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
      },
      color: primarys,
      fontSize: "3vw",
      marginBottom: "2vw",
      lineHeight: "1.2",
      '@media (min-width: 1200px)': { // Larger devices
        fontSize: "2.5vw", // Decrease font size
        

      },

    },
    'certificate-text': {
      '& .name': {
        color: primarys,
        display: "block",
        fontSize: "5vw",
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
      '@media (min-width: 1200px)': { // Larger devices
        fontSize: "1.8vw", // Decrease font size
      },
    },
    'certificate-footer': {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      color: "#666",
      fontSize: "1.5vw",
      width: "100%",
      margin: "2vw auto 0",
      fontFamily: "'Roboto', sans-serif",
      textAlign: "center",
      '@media (min-width: 1200px)': { // Larger devices
        fontSize: "1.2vw", // Decrease font size
      },
    },
    'issuer': {
      margin: "0",
      fontWeight: "600",
    },
    'issuer-designation': {
      margin: "0",
    },
    'certificate-uuid': {
      textAlign: "center",
      fontSize: "1vw",
      fontWeight: "300",
      marginBottom: "-1vw",
      fontFamily: "'Roboto', sans-serif",
      '@media (min-width: 1200px)': { // Larger devices
        fontSize: "0.9vw", // Decrease font size
      },
    },
  }
};

export default styleSheet;
