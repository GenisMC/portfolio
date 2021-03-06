import i18next from "i18next";
import { initReactI18next } from "react-i18next";

export default i18next
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        fallbackLng: "en",
        resources: {
            en: {
                translation: {
                    index: {
                        tech: "Technologies",
                        developer: "Full Stack Developer",
                        projects: "Projects",
                        heyplandesc:
                            "An ambicious project which aims to launch in the future to the Play and Apple stores. It is an app where you can create or discover plans to meet with other people.",
                        schedulerTitle: "Food scheduler",
                        schedulerDesc:
                            "A simple app to schedule your meals. It allows drag and drop to create a weekly schedule to plan your meals. It is shareable with other people.",
                        pandaDesc:
                            "Web app that resembles dropbox, but with a panda as a logo. It allows you to upload files and share them with other people.",
                        more: "and more...",
                        portfolio: "This portfolio page is made with React (TypeScript) using Next.js and Chakra UI.",
                        about: "About me",
                        aboutDesc:
                            'I am a 22 year old full stack developer that never ceases to learn. I have a passion for coding, it is my job and my hobby.\n I am currently working on a project called "Food Scheduler", which is a web app that allows you to create and organize a weekly schedule for your meals. More about it in the projects section.',
                        contact: "Contact",
                        contactDesc:
                            "You can contact me through the following links:",
                    },
                    heyplan: {
                        title: "A mobile app made with Flutter",
                        desc: "This is the basic user interface flow. Heyplan means to make it easier for people of any age to create appointments with friends or to meet new people with custom events any user can create.\n We call this events or appointments \"PLANS\". \n Users can create a profile and add 'tags' to it, which later on will be used to find plans similar to the user likings. \n When sliding through plans the user can choose to send a request to the plan owners. After that the owners need to accept the request for the user to join the plan. \n Once that is done a chat is avilable for all the users in the plan to communicate.",
                    },
                    scheduler: {
                        title: "A web app made with React",
                        desc: "The image represents the main page of the Food Scheduler web app. The point of this app is to help the user create a weekly planning for its meals, while also, allowing to share and modify them with any other user he choses to add. Food Scheduler was created chasing after the need of a family planning for meals, where it might me hard for any member to choose what everyone wants to eat. \n The app features a drag and drop calendar allowing the user to add, move and remove meals. These meals when created only need a name, but an image and other info like ingredients or cost can be added. Every Schedule when created asks for a name, the user can then share that Schedule with anyone he choses to via a link. \n When a user joins via the link both can see, and update the Schedule while viewing other changes in real time. A mail is needed to create an account in the app, without it, the user can only make a schedule for himself with no permanency.",
                    },
                    pandabox: {
                        title: "A web app made with Angular and Firebase",
                        desc: "PandaBox started as a copy of DropBox just for me and my friends / family. It was one of the first big projects I've done. At the time I was leaning Angular at school so I used it to make this web app. \n It's main basic functionality allows users to upload any file and see it on the main page, thus woking like a cloud storage. After that other functionalities like sharing with others came. On the latest version, it allows users to create groups. These groups separate files uploaded to be seen only by it's members, extending the funcionality of the app to a shared cloud storage.",
                    },
                },
            },
            es: {
                translation: {
                    index: {
                        tech: "Tecnolog??as",
                        developer: "Desarrollador Full Stack",
                        projects: "Proyectos",
                        heyplandesc:
                            "Un proyecto ambicioso que pretende lanzarse en el futuro en las tiendas Play y Apple. Es una app donde puedes crear o descubrir planes para conocer otras personas.",
                        schedulerTitle: "Planificador de comida",
                        schedulerDesc:
                            "Una app sencilla para planificar tus comidas. Permite arrastrar y soltar para crear una semana planificada de tus comidas. Se puede compartir con otras personas.",
                        pandaDesc:
                            "Aplicaci??n web que simula dropbox, pero con un panda como logotipo. Permite subir archivos y compartirlos con otras personas.",
                        more: "y m??s...",
                        portfolio: "Este portfolio esta hecho con React (TypeScript) usando Next.js y Chakra UI.",
                        about: "Sobre m??",
                        aboutDesc:
                            'Soy desarrollador full stack de 22 a??os que nunca para de aprender. Tengo una pasi??n por la programaci??n, es mi trabajo y mi hobby.\n Actualmente estoy trabajando en un proyecto llamado "Planificador de comida", es una aplicaci??n web que permite crear y organizar una semana planificada para tus comidas. M??s sobre ??l en la secci??n de proyectos.',
                        contact: "Contacto",
                        contactDesc:
                            "Puedes contactarme a trav??s de los siguientes enlaces:",
                    },
                    heyplan: {
                        title: "Una aplicaci??n m??vil hecha con Flutter",
                        desc: "Esta es la interfaz de usuario b??sica. Heyplan hace m??s f??cil para personas de cualquier edad crear planes con amigos o conocer nuevas personas con eventos personalizados que cualquier usuario puede crear.\n A estos eventos o citas los llamamos \"PLANES\". \n Los usuarios pueden crear un perfil y a??adir 'etiquetas' a ??l, que posteriormente ser??n ??tiles para encontrar planes similares a los gustos del usuario. \n Cuando se esta deslizando en busqueda de planes el usuario puede enviar una solicitud a los administradores de los planes. Luego, estos deben aceptar la solicitud para que el usuario pueda unirse al plan. \n Una vez que se haya unido, el usuario puede hablar con todos los miembros del plan.",
                    },
                    scheduler: {
                        title: "Una aplicaci??n web hecha con React",
                        desc: 'La imagen representa la p??gina principal de la aplicaci??n web Food Scheduler. La finalidad de esta aplicaci??n es ayudar al usuario a crear una semana planificada para sus comidas, y tambi??n permitir que otros usuarios compartan y modifiquen esos planes. Food Scheduler fue creado, pero no esta limitado a estas, para ayudar a personas en una familia, donde puede ser dif??cil para cualquier miembro de esta elegir qu?? comidas quiere el grupo. \n La aplicaci??n tiene un calendario con "drag and drop" que permite a los usuarios a??adir, mover y eliminar comidas. Estas comidas cuando se crean solo necesitan un nombre, pero una imagen y otros datos como los ingredientes o el coste pueden ser a??adidos. Cuando se crea un plano de la semana solo requiere un nombre, el usuario puede compartir esa semana con cualquiera que quiera a trav??s de un enlace. \n Cuando un usuario se une a trav??s del enlace ambos pueden ver, y actualizar las comidas en el plan, y pueden ver los cambios en tiempo real. Se necesita un correo para crear una cuenta en la aplicaci??n, sin ella, el usuario solo puede planificar sus comidas para s?? mismo sin permanencia.',
                    },
                    pandabox: {
                        title: "Una aplicaci??n web hecha con Angular y Firebase",
                        desc: "PandaBox empez?? como una copia de DropBox solo para m?? y mis amigos / familia. Fue uno de los primeros proyectos que he hecho. Cuando estudiaba Angular en la escuela, lo us?? para hacer esta aplicaci??n. \n Su funci??n b??sica permite a los usuarios subir cualquier archivo y verlo en la p??gina principal tambien la funcionalidad que permite compartir archivos con otros usuarios. Despu??s de eso, otras funcionalidades como crear grupos. Estos grupos separan los archivos subidos para que solo se vean por los miembros del grupo, extendiendo la funcionalidad de la aplicaci??n a un cloud storage compartido.",
                    },
                },
            },
        },
    });
