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
                    heyplan: {
                        title: "A mobile app made with Flutter",
                        desc: "This is the basic user interface flow. Heyplan means to make it easier for people of any age to create appointments with friends or to meet new people with custom events any user can create.\n We call this events or appointments \"PLANS\". \n Users can create a profile and add 'tags' to it, which later on will be used to find plans similar to the user likings. \n When sliding through plans the user can choose to send a request to the plan owners. After that the owners need to accept the request for the user to join the plan. \n Once that is done a chat is avilable for all the users in the plan to communicate."
                    },
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
                    heyplan: {
                        title: "Una aplicación móvil hecha con Flutter",
                        desc: "Esta es la interfaz de usuario básica. Heyplan hace más fácil para personas de cualquier edad crear planes con amigos o conocer nuevas personas con eventos personalizados que cualquier usuario puede crear.\n A estos eventos o citas los llamamos \"PLANES\". \n Los usuarios pueden crear un perfil y añadir 'etiquetas' a él, que posteriormente serán útiles para encontrar planes similares a los gustos del usuario. \n Cuando se esta deslizando en busqueda de planes el usuario puede enviar una solicitud a los administradores de los planes. Luego, estos deben aceptar la solicitud para que el usuario pueda unirse al plan. \n Una vez que se haya unido, el usuario puede hablar con todos los miembros del plan."
                    },
                },
            },
        },
    });
