import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        fallbackLng: "en",
        resources: {
            en: {
                translation: {
                    "tech": "Technologies",
                    "developer": "Full Stack Developer",
                    "projects": "Projects",
                    "more": "and more...",
                },
            },
            es: {
                translation: {
                    "tech": "Tecnologías",
                    "developer": "Desarrollador Full Stack",
                    "projects": "Proyectos",
                    "more": "y más...",
                },
            },
        }
    });

