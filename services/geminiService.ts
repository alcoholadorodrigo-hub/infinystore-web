
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import { GoogleGenAI } from "@google/genai";
import { PRODUCTS } from '../constants';

const getSystemInstruction = () => {
  const productContext = PRODUCTS.map(p => 
    `- ${p.name} ($${p.price} - ${p.category}): ${p.description}. Características: ${p.features.join(', ')}`
  ).join('\n');

  return `Eres el Asistente Virtual de "InfinityStore", una tienda innovadora de celulares nuevos y seminuevos.
  Tu tono es profesional, amigable, tecnológico y servicial. Hablas en Español.
  
  Tu objetivo es ayudar a los clientes a elegir el mejor celular para sus necesidades y presupuesto.
  
  Catálogo actual de productos:
  ${productContext}
  
  Reglas:
  1. Responde dudas sobre especificaciones técnicas (cámara, batería, procesador).
  2. Explica la ventaja de comprar seminuevos (ahorro, ecología, garantía).
  3. Mantén las respuestas concisas (máximo 3 oraciones) para el chat.
  4. Si preguntan por algo que no vendemos, sugiere sutilmente un producto similar de nuestro catálogo (ej: si piden Huawei, sugiere Xiaomi o Samsung).
  5. CRÍTICO: Si el usuario pide hablar con un asesor, un humano, soporte, o si NO sabes la respuesta a su pregunta basándote en la información provista, responde indicando que nos contacten a nuestro WhatsApp oficial. SIEMPRE incluye este enlace para que hagan clic: https://wa.me/message/ZZHNWARNKP2TM1
  
  ¡Eres un experto en tecnología móvil!`;
};

export const sendMessageToGemini = async (history: {role: string, text: string}[], newMessage: string): Promise<string> => {
  try {
    let apiKey: string | undefined;
    
    try {
      apiKey = process.env.API_KEY;
    } catch (e) {
      console.warn("Accessing process.env failed");
    }
    
    if (!apiKey) {
      return "Lo siento, no puedo conectar con el servidor en este momento. (Falta API Key)";
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: getSystemInstruction(),
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessage({ message: newMessage });
    return result.text;

  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Disculpa, estoy teniendo problemas técnicos. Por favor contáctanos directamente a nuestro WhatsApp: https://wa.me/message/ZZHNWARNKP2TM1";
  }
};
