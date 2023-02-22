import React from 'react'
import { makeStyles } from '@mui/styles';
import profile from "../../assets/img/profile.png"
import qr from "../../assets/img/qr.jpg"
import Accordion from '@mui/material/Accordion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { styled } from '@mui/material/styles';


const useStyles = makeStyles(() => ({
  img: {
    width: 200,
    height: 220,
    boxShadow: "5px 5px 8px 3px rgba(0, 0, 0, 0.4)",
    transition: "width 200ms, height 200ms",
    '&:hover': {
      height: 240,
      width: 220,
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
  }
  },
  head: {
    color:"white",
    backgroundColor: "#f178a1",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 20
  },
  information: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    fontSize: 20
  },
  icons: {
    display: "flex",
    justifyContent: "center",
    color: "black",
    marginTop: 10
  },
  containerAccordion: {
    display: "flex",
    flexDirection: "column",
    margin: "30px 50px",
    boxShadow: "5px 5px 8px 3px rgba(0, 0, 0, 0.4)",
  }

}))

const AccordionS = styled(Accordion)(() => ({
  border: "1px solid grey",
  color:"white"
}));

const AccordionSummaryS = styled(AccordionSummary)(() => ({
  backgroundColor:"#6e3a5f"
 
}));

const AccordionDetailsS = styled(AccordionDetails)(() => ({
  backgroundColor:"#4a2a4a"
 
}));

const NavBar = () => {
  const classes = useStyles();
    return (
      <>

      <div className={classes.head}>
        <img src={profile} alt="img" className={classes.img}></img>
        <div className={classes.information}>
          <span>Magali Cerisola</span>
          <span>telefono: <a style={{ color: "white", textDecoration: "none"}} href="tel:+4591158057874">1558057874</a></span>
          <span><a style={{ color: "white", textDecoration: "none"}}  href="mailto:magui.cerisola@gmail.com"> magui.cerisola@gmail.com</a></span>
            <div className={classes.icons}>
              <a href="https://github.com/maguiceri"  class="icon">
                <i style={{ color: "white", width: 50, fontSize: 40}} class="fa fa-github " aria-hidden="true"></i>
              </a>
              <a href="https://www.linkedin.com/in/magali-cerisola-1a5111167"  class="icon">
                <i style={{ color: "white", fontSize: 40}} class="fa fa-linkedin " aria-hidden="true"></i>
              </a>
            </div>
        </div>
            <a href="https://www.linkedin.com/in/magali-cerisola-1a5111167" target="_blank">
              <img className={classes.imgQR} src={qr} alt="qr" />
            </a>
      </div>
      <div className={classes.containerAccordion}>
        <AccordionS disableGutters >
          <AccordionSummaryS
          expandIcon={<ExpandMoreIcon />}
          >
            PERFIL</AccordionSummaryS>
          <AccordionDetailsS
          >
            <p>
                Frontend Developer con entusiasmo por desarrollarme a nivel
                profesional. Soy una apasionada por la programación y eso hace que
                mi capacidad de aprendizaje y adaptación sea muy rápida. Me gusta
                estar en constante conocimiento de las tecnologias usadas en la
                actualidad. Tengo muchos proyectos realizados que los pueden
                encontrar en
                <a href="https://github.com/maguiceri?tab=repositories" style={{ color: "white", textDecoration: "none"}}> gitHub.</a>
                </p>
          </AccordionDetailsS>
        </AccordionS>

        <AccordionS disableGutters>
          <AccordionSummaryS
          expandIcon={<ExpandMoreIcon />}
          >
          COMPETENCIAS</AccordionSummaryS>
            <AccordionDetailsS>
              <ul class="text">
                <li>HTML</li>
                <li>HTML5</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>CSS</li>
                <li>Styled-Component</li>
                <li>SASS</li>
                <li>React</li>
                <li>TypeScript</li>
                <li>Redux</li>
                <li>Sagas</li>
                <li>Node</li>
              </ul>
              <p class="sub-title">Otras competencias</p>
              <ul class="text">
                <li>Manejo de sistemas operativos OSX Y Windows.</li>
                <li>Ingles intermedio, oral y escrito.</li>
              </ul>
            </AccordionDetailsS>
        </AccordionS>

        <AccordionS disableGutters>
            <AccordionSummaryS  
            expandIcon={<ExpandMoreIcon />}
            >
              EXPERIENCIA ACADEMICA
            </AccordionSummaryS>
            <AccordionDetailsS>
            <p>Courseit</p>
            <p>
              "Desarrollo Frontend", en este curso pude poner en
                funcionamiento todos mis concomientos en programación,
                enfrentandome a realizar proyectos grandes con herramientas
                utilizadas en el mercado laboral actual.
            </p>
            </AccordionDetailsS>

          </AccordionS>
          <AccordionS disableGutters
          >
              <AccordionSummaryS  
              expandIcon={<ExpandMoreIcon />}
              >Centro de Investigación Cinematográfico (2020)
              </AccordionSummaryS>
              <p>
              "Actuación y Dirección de Artes Escenicas", el año cursado en
                  esta carrera me ayudo a mejorar mi exposicion y a encontrar otro
                  mundo que me apasiona.
              </p>

            <div>
            <p>Universidad Nacional de San Martín (2019)</p>
            <p>
                "Tecnicatura en Programación Informática", en aquellos años
                comenzaron mis primeros pasos en la programación, ansiaba la
                materia en la que pudiera codear y cuando finalmente llegó y
                realicé mi primer codigo, supe que quiero dedicarme a programar.
            </p>
            </div>

        <div>
          <p>EXPERIENCIA PROFESIONAL</p>
          <div>
            <p>Santander Tecnologia (actualmente trabajando)</p>
            <p>Me encuentro en el area de front end relacionado a la seccion de beneficios que brinda el banco.</p>
          </div>
          <div>
            <div>
              <p>Latventure (2019-2020)</p>
              <p>
                   Secretaria, desarrollo tareas de organización, manejo bancos,
                  facturas, excel y Outlook.
              </p>
            </div>
          </div>
          <div>
            <div>
              <p>Day Care Center (2016-2019)</p>
              <p>
                Encargada de Guarderia, comencé como empleada para asistir a
                  la anterior encargada, y luego cuando ésta dejo él puesto, me
                  ascendieron a su cargo, teniendo como responsabilidades la
                  coordinación de tareas de las demás empleadas de la guarderia,
                  manejo de tareas y turnos con los padres, cobranzas y
                  especialmente, el cuidado de los niños de la guarderia interna
                  de una oficina.
              </p>
            </div>
          </div>
        </div>
      </AccordionS>
      </div>
      </>
    );
  };
  
  export default NavBar;