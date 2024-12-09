import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const generateStudyMaterials = async (topic) => {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are an expert tutor creating comprehensive study materials."
        },
        {
          role: "user",
          content: `Create detailed study materials for the topic: ${topic}`
        }
      ]
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.error('OpenAI API Error:', error);
    throw new Error('Failed to generate study materials');
  }
};

export const chatWithDocument = async (document, question) => {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are an AI assistant helping with document comprehension."
        },
        {
          role: "user",
          content: `Document: ${document}\n\nQuestion: ${question}`
        }
      ]
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.error('OpenAI API Error:', error);
    throw new Error('Failed to process document chat');
  }
};

export const generateNotes = async (content) => {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are an expert at creating concise and well-structured notes."
        },
        {
          role: "user",
          content: `Convert this content into well-structured notes: ${content}`
        }
      ]
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.error('OpenAI API Error:', error);
    throw new Error('Failed to generate notes');
  }
};