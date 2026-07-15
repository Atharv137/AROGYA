
/*
// server/routes/auth.ts
router.post('/register', async (req, res) => { ... });
router.post('/login', async (req, res) => { ... });

// server/routes/mentor.ts
router.post('/book', authMiddleware, async (req, res) => {
  const { mentorId, date, time, notes } = req.body;
  const booking = new Booking({ userId: req.user.id, mentorId, date, time, notes, status: 'Pending' });
  await booking.save();
  res.json(booking);
});

// server/routes/ai.ts
import { GoogleGenAI } from "@google/genai";
router.post('/chat', async (req, res) => {
  try {
    const { message } = req.body;
    const ai = new GoogleGenAI({ apiKey: process.env.AI_API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: message,
      config: {
        systemInstruction: "You are a friendly wellness coach. Give short, helpful responses. Do not provide medical diagnosis."
      }
    });
    res.json({ text: response.text });
  } catch (err) {
    res.json({ text: "I'm having trouble thinking right now. Please try again later!" });
  }
});
*/
