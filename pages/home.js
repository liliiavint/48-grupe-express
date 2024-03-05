import { header } from "../components/header.js";

function homePage() {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Jėga</title>
        </head>
        <body>
            ${header()}
            <main>
                <h1>HOME puslapis</h1>
                <p>Labas rytas, Lietuva! 🟨🟩🟥</p>
            </main>
        </body>
        </html>`;
}

export { homePage }