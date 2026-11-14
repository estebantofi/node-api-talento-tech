import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

import "dotenv/config";

let credential;

// Si existe la variable de texto (en Vercel), usamos cert() con el JSON parseado
if (process.env.FIREBASE_SERVICE_ACCOUNT) {
  const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
  credential = cert(serviceAccount);
} else {
  // Si no existe (en tu PC local), usa applicationDefault() que lee tu GOOGLE_APPLICATION_CREDENTIALS actual
  credential = applicationDefault();
}

initializeApp({
  credential,
});

export const db = getFirestore();
