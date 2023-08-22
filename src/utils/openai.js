import { default as axios } from 'axios';

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const OPERATIONS_MAP = {
  'chat': async (params) => {
    const { model, messages, temperature, max_tokens } = params;
    const response = await axios.post(`https://api.openai.com/v1/engines/${model}/completions`, {
      temperature: temperature,
      max_tokens: max_tokens,
      messages: messages
    }, {
      headers: {
        'Authorization': 'Bearer ' + OPENAI_API_KEY,
        'Content-Type': 'application/json'
      }
    });
    return response.data.choices[0].message.content;
  },
  'completion': async (params) => {
    const { model, prompt, temperature, max_tokens, top_p } = params;
    const response = await axios.post(`https://api.openai.com/v1/engines/${model}/completions`, {
      temperature: temperature,
      max_tokens: max_tokens,
      top_p: top_p,
      prompt: prompt
    }, {
      headers: {
        'Authorization': 'Bearer ' + OPENAI_API_KEY,
        'Content-Type': 'application/json'
      }
    });
    return response.data.choices[0].text;
  },
  'search': async (params) => {
    const { model, documents, query } = params;
    const response = await axios.post(`https://api.openai.com/v1/engines/${model}/search`, {
      documents: documents,
      query: query
    }, {
      headers: {
        'Authorization': 'Bearer ' + OPENAI_API_KEY,
        'Content-Type': 'application/json'
      }
    });
    return response.data.data;
  }
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { operation, temperature, max_tokens, top_p, inputs } = req.body;

    if (!OPERATIONS_MAP[operation]) {
      return res.status(400).json({ message: 'Invalid operation.' });
    }

    let apiResponse;

    try {
      const params = { ...inputs, temperature, max_tokens, top_p };
      apiResponse = await OPERATIONS_MAP[operation](params);
    } catch (error) {
      return res.status(500).json({ message: 'Error performing operation.', error: error.toString() });
    }

    return res.status(200).json({ data: apiResponse });
  }
  else {
    res.setHeader('Allow', ['POST'])
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}