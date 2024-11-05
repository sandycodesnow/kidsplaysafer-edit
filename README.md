## Question Editing Guide

Here’s a step-by-step guide for updating the questions in your `Question Game` web app. This guide assumes you’re editing the code directly on GitHub in the `edit` tab, with minimal coding experience.

### Step 1: Find the Questions Section

1. Open the HTML file on GitHub and click on the **Edit** (pencil icon) to make changes.
2. Scroll down to the `const questions = [...]` part in the JavaScript section of the code. This is where all questions, answers, and translations are stored.

### Step 2: Understanding the Question Structure

Each question follows this format:

```javascript
{
    title: { en: "Question X", zh: "问题 X", ms: "Soalan X", hi: "प्रश्न X" },
    text: { en: "Your question text here in English", zh: "Chinese translation", ms: "Malay translation", hi: "Hindi translation" },
    answers: { 
        en: ["Answer 1 in English", "Answer 2 in English", "Answer 3 in English"], 
        zh: ["Answer 1 in Chinese", "Answer 2 in Chinese", "Answer 3 in Chinese"],
        ms: ["Answer 1 in Malay", "Answer 2 in Malay", "Answer 3 in Malay"], 
        hi: ["Answer 1 in Hindi", "Answer 2 in Hindi", "Answer 3 in Hindi"]
    }
}

```

### Step 3: Edit an Existing Question

1. **To update a question title or text**, locate the `title` or `text` fields and replace the text inside each quotation mark (`""`) for each language as needed.

    - Example

        : If you want to change "Question 1" to "First Question," update this line:

        ```
        title: { en: "First Question", zh: "问题 1", ms: "Soalan 1", hi: "प्रश्न 1" }
        ```

2. **To edit answer options**, find the `answers` section within the question you want to change. Each answer array (`en`, `zh`, `ms`, `hi`) has translations in English, Chinese, Malay, and Hindi.

    - Example

        : To change "Tell Mummy/Daddy" in English, modify the first answer as shown:

        ```
        answers: { en: ["Tell a Parent", "Give the phone number", "Don't give the phone number"], ... }
        ```

3. **Repeat for each translation** if the answer choices need updating in other languages.

### Step 4: Add a New Question

1. To add a new question, copy the entire structure of an existing question, from `{` to `}`, including all translations for `title`, `text`, and `answers`.
2. Paste this copied block just below the last question inside the `questions` array, making sure each question is separated by a comma `,`.
3. Update the `title`, `text`, and `answers` fields with the new question and answer options. Ensure translations are also updated as necessary.

### Example of Adding a New Question

Let’s say you want to add a new question about a "Suspicious Email", add it after the `},`:

```javascript
{
    title: { en: "Question 4", zh: "问题 4", ms: "Soalan 4", hi: "प्रश्न 4" },
    text: { en: "You receive a suspicious email asking for your bank details. What should you do?", zh: "你收到一封要求提供银行信息的可疑邮件。你应该怎么做？", ms: "Anda menerima emel mencurigakan yang meminta maklumat bank anda. Apa yang patut anda lakukan?", hi: "आपको अपने बैंक विवरण मांगने वाला एक संदिग्ध ईमेल प्राप्त होता है। आपको क्या करना चाहिए?" },
    answers: { 
        en: ["Ignore the email", "Reply with bank details", "Report to a trusted adult"], 
        zh: ["忽略邮件", "回复银行信息", "告诉信任的成年人"],
        ms: ["Abaikan emel", "Balas dengan butiran bank", "Beritahu orang dewasa yang dipercayai"], 
        hi: ["ईमेल को अनदेखा करें", "बैंक विवरण के साथ जवाब दें", "विश्वासपात्र वयस्क को बताएं"]
    }
}

```

