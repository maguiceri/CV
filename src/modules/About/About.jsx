import React, { useState } from 'react'
import { makeStyles } from '@mui/styles';
import profile from "../../assets/img/profile.png"


const useStyles = makeStyles(() => ({
    containerAccordion: {
        display: "flex",
        color: "white",
        fontFamily: 'PT Serif',
        height: "100vh",
        marginLeft: "15%",
        alignItems: "center"
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
        zIndex: 1,
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
        height: "100vh",
        top: "30%"

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

const About = () => {
    const classes = useStyles();
    const [hovered, setHovered] = useState(true);
    return (
        <>
            <div className={classes.containerAccordion} id="about">
                <div style={{ display: "flex", flexDirection: "column", width: "50%" }}>
                    <div className={classes.presentation}><span className={classes.number}>0.1</span> About Me <div className={classes.line}></div></div>
                    <div style={{ color: "white", fontFamily: 'PT Serif', fontSize: 18, opacity: 0.5, marginRight: 20 }} >
                        Frontend Developer with enthusiasm for professional development. I am passionate about programming, which makes my learning and adaptation abilities very quick.
                        <br></br>
                        <br></br>
                        I enjoy staying constantly informed about the technologies used today.
                        <br></br>
                        <br></br>
                        I have completed many projects that you can find at:
                        <a href="https://github.com/maguiceri?tab=repositories" style={{ color: "#68ddbd", textDecoration: "none", fontWeight: "bold" }}> gitHub.</a>
                    </div>
                </div>

                <div className={classes.containerProfile}
                    onMouseEnter={() => setHovered(false)}
                    onMouseLeave={() => setHovered(true)}
                >
                    <div>

                        <img src={profile} alt="img" className={classes.img}></img>
                        <div className={classes.borderProfile}></div>
                        {hovered && <div className={classes.colorImg}></div>}
                    </div>
                </div>

            </div>
        </>
    );
};

export default About;