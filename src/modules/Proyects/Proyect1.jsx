import React, { useState } from 'react'
import { makeStyles } from '@mui/styles';
import proyectSC from "../../assets/img/proyectSC.png"


const useStyles = makeStyles(() => ({
  containerAccordion: {
    display: "flex",
    color: "white",
    fontFamily: 'PT Serif',
    marginLeft: "15%",
  },
  presentation: {
    fontWeight: 700,
    fontSize: 25,
    display: "flex",
    alignItems: "center",
    marginBottom: 40,
  },
  number: {
    color: "#68ddbd",
    fontWeight: 400,
    marginRight: 4,
  },
  line: {
    width: 200,
    height: 1,
    backgroundColor: "#68ddbd",
    marginLeft: 20,
    opacity: 0.5
  },
  colorImg: {
    width: 500,
    height: 300,
    zIndex: 2,
    borderRadius: 10,
    position: "absolute",
    marginTop: 0,
    marginLeft: 0,
    left: "0%",
    backgroundColor: "#68ddbd",
    opacity: 0.3
  },
  containerProfile: {
    position: "relative",
    height: "60vh",

  },
  borderProfile: {
    position: "absolute",

    width: 500,
    height: 300,
    top: "2%",
    left: "3%",
    transition: "width 0.3s, height 0.3s",
    '&:hover': {

    },
  },
  img: {
    width: 500,
    height: 300,
    zIndex: 1,
    borderRadius: 2,
    position: "absolute",

    backgroundColor: "#68ddbd",
    transition: "margin-top 0.3s, margin-left 0.3s",
    '&:hover': {
      marginTop: -5,
      marginLeft: -5,
    },
    [`@media (max-width:${600}px)`]: {
      display: "none"
    }
  },

  phill: {
    backgroundColor: "rgba(104, 221, 189, 0.3)",
    color: "#68ddbd",
    borderRadius: 20,
    textAlign: "center",
    marginBottom: 20,
    padding: 10

  },
  navLink: {
    textDecoration: "none",
    color: "white",
    fontFamily: 'PT Serif',


  },

  competencies: {
    display: "flex",
    justifyContent: "center",
    padding: 40,
    borderRadius: 20,
    '&:hover': {
      backgroundColor: "#14213d"
    },
  },
  featureProyect: {
    color: "#68ddbd",
    fontWeight: 400,
  },

  titleProyect: {
    fontWeight: 700,
    fontSize: 25,
    opacity: 0.8,
    color: "white"
  },
  descriptionProyect: {
    backgroundColor: "#0C2E58",
    width: 400,
    padding: 20,
    borderRadius: 2,
    textAlign: "center",
    marginLeft: "-200px",
    zIndex: 4,
    marginBottom: 15
  },
  text: {
    fontSize: 13,
    fontWeight: 400,
    opacity: 0.5,
    marginRight: 8
  },
}))

const Proyect1 = () => {
  const classes = useStyles();
  const [hovered, setHovered] = useState(true);



  return (
    <>
      {
        <div className={classes.containerAccordion} id="proyects">
          <div style={{ display: "flex", flexDirection: "column", width: "55%" }}>
            <div className={classes.presentation}><span className={classes.number}>0.2</span> Proyects <div className={classes.line}></div></div>
            <div style={{ display: "flex" }}>
              <div className={classes.containerProfile}
                onMouseEnter={() => setHovered(false)}
                onMouseLeave={() => setHovered(true)}
              >
                <div>
                  <img src={proyectSC} alt="img" className={classes.img}></img>
                  {hovered && <div className={classes.colorImg}></div>}
                </div>
              </div>
            </div>
          </div>
          <div style={{ marginTop: "10%", alignItems: "flex-end", display: "flex", flexDirection: "column" }} >
            <span className={classes.featureProyect}>Featured Proyect</span>
            <p className={classes.titleProyect}>web e commers</p>
            <div className={classes.descriptionProyect}>
              work project in which we had to develop a website with a shopping cart, login and payment gateway.
            </div>
            <div className={classes.competenciesProyect}>
              <span className={classes.text}>React</span>
              <span className={classes.text}>Java Script</span>
              <span className={classes.text}>HTML</span>
              <span className={classes.text}>CSS</span>
              <span className={classes.text}>Node</span>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default Proyect1; 