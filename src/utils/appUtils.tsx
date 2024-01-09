import axios from "axios";

const OPENAI_API_KEY = import.meta.env.VITE_APP_OPENAI_API_KEY;
const OPENAI_API_URL = "https://api.openai.com/v1/engines/davinci/completions";

export async function generateQuestion() {
  const maxRetries = 3;
  let retries = 0;

  while (retries < maxRetries) {
    try {
      const prompt =
        "Generate a math word problem involving arithmetic operations:\n\n";
      const response = await axios.post(
        OPENAI_API_URL,
        {
          prompt: prompt,
          max_tokens: 150,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${OPENAI_API_KEY}`,
          },
        }
      );

      const responseData = response.data.choices[0].text.split("\n\n");
      const question = responseData[0];
      const choicesData = responseData[1].split("\n");
      const correctAnswerIndex = Number(responseData[2]);
      const answerChoices = choicesData.map(
        (choice: unknown, index: number) => ({
          text: choice,
          isCorrect: index === correctAnswerIndex,
        })
      );
      const explanation = responseData[3];

      return { question, answerChoices, explanation };
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response?.status === 429) {
        // Implement exponential backoff
        const waitTime = 2 ** retries * 1000; 
        console.log(`Rate limited. Retrying in ${waitTime / 1000} seconds...`);
        await new Promise((resolve) => setTimeout(resolve, waitTime));
        retries++;
      } else {
        console.error("Error generating question:", error);
        return null;
      }
    }
  }

  console.error("Max retries reached. Unable to generate question.");
  return null;
}
