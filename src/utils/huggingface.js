import { HfInference } from '@huggingface/inference';
import { readFileSync } from 'fs';

const hf = new HfInference('your access token');

const OPERATIONS_MAP = {
  'fillMask': async (params) => await hf.fillMask(params),
  'summarization': async (params) => await hf.summarization(params),
  'questionAnswering': async (params) => await hf.questionAnswering(params),
  'tableQuestionAnswering': async (params) => await hf.tableQuestionAnswering(params),
  'textClassification': async (params) => await hf.textClassification(params),
  'textGeneration': async (params) => await hf.textGeneration(params),
  'textGenerationStream': async (params) => await hf.textGenerationStream(params),
  'tokenClassification': async (params) => await hf.tokenClassification(params),
  'translation': async (params) => await hf.translation(params),
  'zeroShotClassification': async (params) => await hf.zeroShotClassification(params),
  'conversational': async (params) => await hf.conversational(params),
  'sentenceSimilarity': async (params) => await hf.sentenceSimilarity(params),
  'featureExtraction': async (params) => await hf.featureExtraction(params),

  'automaticSpeechRecognition': async (params) => await hf.automaticSpeechRecognition(params),
  'audioClassification': async (params) => await hf.audioClassification(params),
  'textToSpeech': async (params) => await hf.textToSpeech(params),
  'audioToAudio': async (params) => await hf.audioToAudio(params),

  'imageClassification': async (params) => await hf.imageClassification(params),
  'objectDetection': async (params) => await hf.objectDetection(params),
  'imageSegmentation': async (params) => await hf.imageSegmentation(params),
  'textToImage': async (params) => await hf.textToImage(params),
  'imageToText': async (params) => await hf.imageToText(params),
  'imageToImage': async (params) => await hf.imageToImage(params),
  'zeroShotImageClassification': async (params) => await hf.zeroShotImageClassification(params),
  
  'visualQuestionAnswering': async (params) => await hf.visualQuestionAnswering(params),
  'documentQuestionAnswering': async (params) => await hf.documentQuestionAnswering(params),
  
  'tabularRegression': async (params) => await hf.tabularRegression(params),
  'tabularClassification': async (params) => await hf.tabularClassification(params),
  
  'request': async (params) => await hf.request(params),
  'streamingRequest': async (params) => await hf.streamingRequest(params),
  
  'endpoint': async (params) => await hf.endpoint(params)
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { operation, inputs, model, parameters } = req.body;

    if (!OPERATIONS_MAP[operation]) {
      return res.status(400).json({ message: 'Invalid operation.' });
    }

    let apiResponse;

    try {
      const params = { model, inputs, parameters };
      apiResponse = await OPERATIONS_MAP[operation](params);
    } catch (error) {
      return res.status(500).json({ message: 'Error performing operation.', error: error.toString() });
    }

    return res.status(200).json({ data: apiResponse });
  } else {
    res.setHeader('Allow', ['POST'])
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}