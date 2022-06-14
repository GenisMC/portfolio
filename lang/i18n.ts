import i18next from "i18next";
import { initReactI18next } from "react-i18next";

export default i18next
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        fallbackLng: "en",
        resources: {
            en: {
                translation: {
                    tech: "Technologies",
                    developer: "Full Stack Developer",
                    projects: "Projects",
                    heyplandesc:
                        "An ambicious project which aims to launch in the future to the Play and Apple stores. It is an app where you can create or discover plans to meet with other people.",
                    schedulerTitle: "Food scheduler",
                    schedulerDesc: "A simple app to schedule your meals. It allows drag and drop to create a weekly schedule to plan your meals. It is shareable with other people.",
                    pandaDesc: "Web app that resembles dropbox, but with a panda as a logo. It allows you to upload files and share them with other people.",
                    more: "and more...",
                    about: "About me",
                    aboutDesc: "I am a 22 year old full stack developer that never ceases to learn. I have a passion for coding, it is my job and my hobby.\n I am currently working on a project called \"Food Scheduler\", which is a web app that allows you to create and organize a weekly schedule for your meals. More about it in the projects section.",
                    contact: "Contact",
                    contactDesc: "You can contact me through the following links:",
                },
            },
            es: {
                translation: {
                    tech: "Tecnologías",
                    developer: "Desarrollador Full Stack",
                    projects: "Proyectos",
                    heyplandesc:
                        "Un proyecto ambicioso que pretende lanzarse en el futuro en las tiendas Play y Apple. Es una app donde puedes crear o descubrir planes para conocer otras personas.",
                    schedulerTitle: "Planificador de comida",
                    schedulerDesc: "Una app sencilla para planificar tus comidas. Permite arrastrar y soltar para crear una semana planificada de tus comidas. Se puede compartir con otras personas.",
                    pandaDesc: "Aplicación web que simula dropbox, pero con un panda como logotipo. Permite subir archivos y compartirlos con otras personas.",
                    more: "y más...",
                    about: "Sobre mí",
                    aboutDesc: "Soy desarrollador full stack de 22 años que nunca para de aprender. Tengo una pasión por la programación, es mi trabajo y mi hobby.\n Actualmente estoy trabajando en un proyecto llamado \"Planificador de comida\", es una aplicación web que permite crear y organizar una semana planificada para tus comidas. Más sobre él en la sección de proyectos.",
                    contact: "Contacto",
                    contactDesc: "Puedes contactarme a través de los siguientes enlaces:",
                },
            },
        },
    });
