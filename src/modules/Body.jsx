import React from 'react'
import { makeStyles } from '@mui/styles';
import Accordion from '@mui/material/Accordion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { styled } from '@mui/material/styles';


const useStyles = makeStyles(() => ({
  containerAccordion: {
    display: "flex",
    flexDirection: "column",
    padding: "10px 20px"
  },
  title: {
    fontWeight: "bold"
  }
}))

const AccordionCV = styled(Accordion)(() => ({
  border: "1px solid grey",
  color:"white",
  display: "inline-block",
  flexGrow: 1
}));

const AccordionSummaryCV = styled(AccordionSummary)(() => ({
  backgroundColor:"#6e3a5f"
 
}));

const AccordionDetailsCV   = styled(AccordionDetails)(() => ({
  backgroundColor:"#4a2a4a"
}));

const ExpandMoreIconCV   = styled(ExpandMoreIcon)(() => ({
  color: "white"
}));

const Body = () => {
  const classes = useStyles();
    return (
      <div>
        <div className={classes.containerAccordion}>
          <AccordionCV disableGutters >
            <AccordionSummaryCV
            expandIcon={<ExpandMoreIconCV />}
            >
              PERFIL</AccordionSummaryCV>
            <AccordionDetailsCV
            >
              <p>
                Frontend Developer con entusiasmo por desarrollarme a nivel
                profesional. Soy una apasionada por la programación y eso hace que
                mi capacidad de aprendizaje y adaptación sea muy rápida. Me gusta
                estar en constante conocimiento de las tecnologias usadas en la
                actualidad. Tengo muchos proyectos realizados que los pueden
                encontrar en
                <a href="https://github.com/maguiceri?tab=repositories" style={{ color: "white", textDecoration: "none", fontWeight: "bold"}}> gitHub.</a>
              </p>
            </AccordionDetailsCV>
          </AccordionCV>

          <AccordionCV disableGutters>
            <AccordionSummaryCV
            expandIcon={<ExpandMoreIconCV />}
            >
              COMPETENCIAS</AccordionSummaryCV>
            <AccordionDetailsCV>
                <ul>
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
                <h3 className={classes.title}>Otras competencias</h3>
                <ul >
                  <li>Manejo de sistemas operativos OSX Y Windows.</li>
                  <li>Ingles intermedio, oral y escrito.</li>
                </ul>
            </AccordionDetailsCV>
          </AccordionCV>

          <AccordionCV disableGutters>
            <AccordionSummaryCV  
            expandIcon={<ExpandMoreIconCV />}
            >
              EXPERIENCIA ACADEMICA
            </AccordionSummaryCV>
            <AccordionDetailsCV>
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
            </AccordionDetailsCV>

          </AccordionCV>
          <AccordionCV disableGutters
          >
            <AccordionSummaryCV  
            expandIcon={<ExpandMoreIconCV />}
            >
              EXPERIENCIA PROFESIONAL
            </AccordionSummaryCV>
            <AccordionDetailsCV>
            <h3 className={classes.title}>Santander Tecnologia (actualmente trabajando)</h3>
            <p>Me encuentro en el area de front end relacionado a la seccion de beneficios que brinda el banco.</p>
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
            </AccordionDetailsCV>
          </AccordionCV>
        </div>
      </div>
    );
  };
  
  export default Body;