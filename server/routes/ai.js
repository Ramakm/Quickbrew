import express from 'express';
import auth from '../middleware/auth.js';
import { generateStudyMaterials, chatWithDocument, generateNotes } from '../services/openai.js';

const router = express.Router();

// Generate study materials
router.post('/study-materials', auth, async (req, res) => {
  try {
    const { topic } = req.body;
    const materials = await generateStudyMaterials(topic);
    res.json({ materials });
  } catch (error) {
    res.status(500).json({ message: 'Error generating study materials' });
  }
});

// Chat with document
router.post('/chat', auth, async (req, res) => {
  try {
    const { document, question } = req.body;
    const response = await chatWithDocument(document, question);
    res.json({ response });
  } catch (error) {
    res.status(500).json({ message: 'Error processing chat' });
  }
});

// Generate notes
router.post('/notes', auth, async (req, res) => {
  try {
    const { content } = req.body;
    const notes = await generateNotes(content);
    res.json({ notes });
  } catch (error) {
    res.status(500).json({ message: 'Error generating notes' });
  }
});

export default router;