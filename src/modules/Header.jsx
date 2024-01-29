import React from 'react'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  head: {
    fontFamily: 'PT Serif',
    color: "white",
    backgroundColor: "#081130",
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    [`@media (max-width:${600}px)`]: {
      display: "flex",
      flexDirection: "column"
    }
  },
  information: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "15%",
    marginTop: "10%",
    fontSize: 20,
    [`@media (max-width:${600}px)`]: {
      fontSize: 15,
    }
  },
  hello: {
    fontFamily: 'PT Serif',
    color: "#68ddbd"
  },
  name: {
    fontFamily: 'PT Serif',
    fontSize: 60,
    fontWeight: 700,
    marginTop: 50
  },
  aboutme: {
    fontSize: 40,
    opacity: 0.6
  },
  icons: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "absolute",
    bottom: "0%",
    left: "5%",
    position: "fixed",
    zIndex: 99999
  },
  iconsEmail: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "absolute",
    bottom: "0%",
    right: "5%",
    position: "fixed",
    zIndex: 99999
  },
  nav: {
    fontSize: 14,
    paddingRight: "5%",
    paddingTop: 50,
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "space-araound",
  },
  imgQR: {
    width: 200,
    height: 200,
    boxShadow: "5px 5px 8px 3px rgba(0, 0, 0, 0.4)",
    transition: "width 200ms, height 200ms",
    '&:hover': {
      height: 230,
      width: 230,
    },
    [`@media (max-width:${600}px)`]: {
      height: 90,
      width: 90,
    }
  },
  line: {
    width: 1,
    height: 200,
    backgroundColor: "white",
    opacity: 0.5
  },
  icon: {
    backgroundColor: "red"
  },
  phill: {
    paddingRight: 20,
    textDecoration: "none",
    color: "white",

  },
  number: {
    color: "#68ddbd",
    marginRight: 4,
  },
  navItem: {
    display: "flex",
    alignItems: "center",
    paddingBottom: 20,
    cursor: "pointer",
    "&:hover": {
      "& $line": {
        width: 50,
      },
    },

  },

}))


const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.head}>
      <div className={classes.nav}>
        <a href="#about" className={classes.phill}><span className={classes.number}>0.1</span>About</a>
        <a href="#proyects" className={classes.phill}><span className={classes.number}>0.2</span>Proyects</a>
        <a href="#experience" className={classes.phill}><span className={classes.number}>0.3</span>Experience Academic</a>
        <a href="#experience" className={classes.phill}><span className={classes.number}>0.4</span>Expetience</a>
      </div>
      <div className={classes.icons}>
        <a href="https://github.com/maguiceri" class="icon">
          <i style={{ color: "white", fontSize: 25, paddingBottom: 10, opacity: 0.5 }} class="fa fa-github" aria-hidden="true"></i>
        </a>
        <a href="https://www.linkedin.com/in/magali-cerisola-1a5111167" class="icon">
          <i style={{ color: "white", fontSize: 25, paddingBottom: 10, opacity: 0.5 }} class="fa fa-linkedin " aria-hidden="true"></i>
        </a>
        <div className={classes.line} ></div>
      </div>
      <div className={classes.information}>
        <span className={classes.hello}>Hi, my name is</span>
        <span className={classes.name}>Magalí Aldana Cerisola</span>
        <p className={classes.aboutme}> Frontend Developer </p>
      </div>

      <div>
        <div className={classes.iconsEmail}>
          <div style={{ display: "flex", writingMode: "vertical-lr", transform: "rotate(360deg)", paddingBottom: 10, opacity: 0.5 }} >magui.cerisola@gmail.com</div>
          <div className={classes.line} ></div>
        </div>
      </div>
      {/*  <a href="https://www.linkedin.com/in/magali-cerisola-1a5111167" target="_blank">
                <img className={classes.imgQR} src={qr} alt="qr" />
            </a> */}
    </div>
  )
}

export default Header;