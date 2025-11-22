/**
 * Servicio para usar Google Gemini desde el frontend
 * usando el SDK oficial @google/generative-ai
 */

import { GoogleGenerativeAI } from "@google/generative-ai";

// 🔑 KEY — IMPORTANTE
// Esta key debe venir desde VITE_GEMINI_API_KEY
// CONFIGURADA EN VERCEL COMO VARIABLE DE ENTORNO
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

if (!apiKey) {
  console.warn("⚠️ WARNING: No se encontró VITE_GEMINI_API_KEY en las variables de entorno.");
}

const genAI = new GoogleGenerativeAI(apiKey);

// MODELO QUE USAMOS PARA RESPUESTAS
const model = genAI.getGenerativeModel({
  model: "gemini-pro", // o "gemini-1.5-flash" si querés mayor velocidad
});

/**
 * Generar texto desde Gemini
 * @param prompt Texto o pedido del usuario
 * @returns string - respuesta generada
 */
export async function askGemini(prompt: string): Promise<string> {
  try {
    const result = await model.generateContent(prompt);
    const response = result.response.text();
    return response;
  } catch (error) {
    console.error("Error en askGemini:", error);
    return "Hubo un error al procesar la solicitud.";
  }
}

/**
 * Ejemplo: obtener sugerencias para la tienda
 */
export async function getProductSuggestions(text: string): Promise<string> {
  const prompt = `
  Eres un asistente experto en ventas de celulares.
  Basado en este texto: "${text}"
  Dame recomendaciones breves y claras.
  `;
  return await askGemini(prompt);
}
