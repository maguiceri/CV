import React, { useState } from 'react'
import { makeStyles } from '@mui/styles';
import About from './About/About';
import Proyect1 from './Proyects/Proyect1';

const useStyles = makeStyles(() => ({
  containerAccordion: {
    display: "flex",
    color: "white",
    fontFamily: 'PT Serif',
    margin: "0 auto",
    width: "70%",
    height: "100vh"
  },
  containerComp: {
    display: "flex",
    color: "white",
    fontFamily: 'PT Serif',
    margin: "0 auto",
    width: "70%",
    height: "100vh"
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
    width: 300,
    height: 300,
    zIndex: 22,
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
    width: "60%"

  },
  borderProfile: {
    position: "absolute",
    border: "3px solid #68ddbd",
    borderRadius: 10,
    width: 300,
    height: 300,
    top: "2%",
    left: "3%",
    transition: "width 0.3s, height 0.3s",
    '&:hover': {

    },
  },
  img: {
    width: 300,
    height: 300,
    zIndex: 1,
    borderRadius: 10,
    position: "absolute",
    marginTop: 0,
    marginLeft: 0,
    left: "0%",
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
}))

const Body = () => {
  const classes = useStyles();
  return (
    <>
      <About/>
      <Proyect1/>
      {/*          <div style={{ color:"white", fontFamily: 'PT Serif', fontSize: 18, opacity: 0.5, marginBottom: 100}}>
          <h3 className={classes.title}>Courseit</h3>
          <p>
            "Desarrollo Frontend", en este curso pude poner en
            funcionamiento todos mis concomientos en programación,
            enfrentandome a realizar proyectos grandes con herramientas
            utilizadas en el mercado laboral actual.
          </p>
          <h3 className={classes.title}>Centro de Investigación Cinematográfico (2020)</h3>
          <p>
            "Actuación y Dirección de Artes Escenicas", el año cursado en
            esta carrera me ayudo a mejorar mi exposicion y a encontrar otro
            mundo que me apasiona.
          </p>
          <h3 className={classes.title}>Universidad Nacional de San Martín (2019)</h3>
          <p>
            "Tecnicatura en Programación Informática", en aquellos años
            comenzaron mis primeros pasos en la programación, ansiaba la
            materia en la que pudiera codear y cuando finalmente llegó y
            realicé mi primer codigo, supe que quiero dedicarme a programar.
          </p>
        </div>
        <h3 className={classes.title}>Santander Tecnologia (actualmente trabajando)</h3>
        <p>Me encuentro en el área de front end de todo lo relacionado a los beneficios que brinda el banco. Realice tanto proyectos desde cero como de refactor.</p>
        <h3 className={classes.title}>Latventure (2019-2020)</h3>
        <p>
          Secretaria, desarrollo tareas de organización, manejo bancos,
          facturas, excel y Outlook.
        </p>
        <h3 className={classes.title}>Day Care Center (2016-2019)</h3>
        <p>
          Encargada de Guarderia, comencé como empleada para asistir a
          la anterior encargada, y luego cuando ésta dejo él puesto, me
          ascendieron a su cargo, teniendo como responsabilidades la
          coordinación de tareas de las demás empleadas de la guarderia,
          manejo de tareas y turnos con los padres, cobranzas y
          especialmente, el cuidado de los niños de la guarderia interna
          de una oficina.
        </p>

      </div>  */}
    </>
  );
};

export default Body;