import React from 'react'
import { makeStyles } from '@mui/styles';
import profile from "../assets/img/profile.png"
import qr from "../assets/img/qr.jpg"



const useStyles = makeStyles(() => ({
    img: {
      width: 200,
      height: 200,
      boxShadow: "5px 5px 8px 3px rgba(0, 0, 0, 0.4)",
      transition: "width 200ms, height 200ms",
      '&:hover': {
        height: 230,
        width: 230,
      },
      [`@media (max-width:${600}px)`]: {
        display: "none"
      }
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
    head: {
      color:"white",
      backgroundColor: "#f178a1",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      padding: 20,
      [`@media (max-width:${600}px)`]: {
        display: "flex",
        flexDirection: "column"
      }
    },
    information: {
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
      fontSize: 20,
      [`@media (max-width:${600}px)`]: {
        fontSize: 15,
      }
    },
    icons: {
      display: "flex",
      justifyContent: "center",
      color: "black",
      marginTop: 10,
      marginBottom: 10
    }
  }))
  

const Header = () => {
    const classes = useStyles();
    return(
        <div className={classes.head}>
            <img src={profile} alt="img" className={classes.img}></img>
            <div className={classes.information}>
                <span>Magali Cerisola</span>
                <span>telefono: <a style={{ color: "white", textDecoration: "none"}} href="tel:+4591158057874">1558057874</a></span>
                <span><a style={{ color: "white", textDecoration: "none"}}  href="mailto:magui.cerisola@gmail.com"> magui.cerisola@gmail.com</a></span>
                <div className={classes.icons}>
                    <a href="https://github.com/maguiceri"  class="icon">
                        <i style={{ color: "white", width: 50, fontSize: 30}} class="fa fa-github" aria-hidden="true"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/magali-cerisola-1a5111167"  class="icon">
                        <i style={{ color: "white", fontSize: 30}} class="fa fa-linkedin " aria-hidden="true"></i>
                    </a>
                </div>
            </div>
            <a href="https://www.linkedin.com/in/magali-cerisola-1a5111167" target="_blank">
                <img className={classes.imgQR} src={qr} alt="qr" />
            </a>
        </div>
    )
}

export default Header;