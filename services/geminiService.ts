import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getTailoringAdvice = async (userQuery: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userQuery,
      config: {
        systemInstruction: `Anda adalah asisten virtual untuk 'Suryono Penjahit'. 
        Tugas anda adalah membantu pelanggan dengan pertanyaan seputar menjahit, jenis kain, perkiraan bahan untuk seragam/kebaya, dan saran fashion sederhana.
        
        Gaya bicara: Sopan, ramah, profesional, dan membantu. Gunakan Bahasa Indonesia yang baik.
        
        Konteks Bisnis:
        - Nama: Suryono Penjahit
        - Layanan: Seragam Sekolah, Kebaya, Gamis, Baju, Celana.
        - Kontak: 0895393952644
        - Lokasi: (Anda bisa menyebutkan lokasi fiktif jika ditanya, atau bilang silakan hubungi nomor untuk lokasi detail).
        
        Jawablah pertanyaan pelanggan dengan ringkas namun informatif.`,
      }
    });
    
    return response.text || "Maaf, saya tidak dapat memproses permintaan Anda saat ini.";
  } catch (error) {
    console.error("Error generating tailoring advice:", error);
    return "Maaf, terjadi kesalahan saat menghubungi asisten. Silakan coba lagi nanti.";
  }
};