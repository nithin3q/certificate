const styleSheet = (primary = "#007bff", secondary = "#00c851", primarys = "#225572", secondarys = "#1C9662") => {
    return {
      'certificate-container': {
        border: `2px solid ${primarys}`,
        maxWidth: '950px',
        width: '90vw',
        minWidth: '300px',
        padding: '30px 30px 20px',
        position: 'relative',
        margin: 'auto',
        borderRadius: '8px', // Increased border radius for a modern look
        background: '#dee2e9', // Light, neutral background color
      },
      'styled-div': {
        '& > img': {
          width: "100%",
          marginTop: "-10px"
        },
        backgroundColor: primarys,
        width: '100px',
        height: '100px',
        position: 'absolute',
        top: '10px',
        left: '20px',
        clipPath: 'polygon(100% 0, 100% 100%, 50% 75%, 0 100%, 0 0)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '8px',
      },
      'main-content': {
        textAlign: "center",
        width: "80%",
        margin: "auto"
      },
      "main-heading": {
        "& > span": {
          display: "block",
          fontSize: "50px",
          fontWeight: "700"
        },
        color: primarys,
        fontSize: "26px",
        marginBottom: "30px"
      },
      'certificate-text': {
        '& .name': {
          color: primarys,
          display: "block",
          fontSize: "68px",
          width: "fit-content",
        //   borderBottom: `2px solid ${secondarys}`,
          margin: "0 auto 15px",
          padding: "0 25px"
        },
        '& > span': {
          fontWeight: "600"
        },
        color: '#3C3D3F', // Dark gray color for a softer look than black
        fontSize: "24px",
        fontFamily: "'Roboto', sans-serif"
      },
     
      'certificate-footer': {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "#666", // Light gray for footer text
        fontSize: "18px",
        width: "85%",
        margin: "40px auto 0",
        fontFamily: "'Roboto', sans-serif"
      },
      'issuer': {
        margin: "0",
        fontWeight: "600"
      },
      'issuer-designation': {
        margin: "0"
      },
      'certificate-uuid': {
        textAlign: "center",
        fontSize: "12px",
        fontWeight: "300",
        marginBottom: "-15px",
        fontFamily: "'Roboto', sans-serif"
      }
    }
  };
  
  export default styleSheet;
  