# Building a Chatbot with LLMs

Now, we'll build a chatbot app, powered by an open source LLM.
You probably already chatted with ChatGPT, but running it can be costly and
rigid. Custom LLMs can run locally, be fine-tuned in your own data, or run
cheaper on the cloud.
Here, we'll be using an inference endpoint running "falcon-40B-Instruct", one of the best open-source large language models.

## IMPORTING APIS AND HELPER FUNCTION
```python
#apikey
import os
import io
import IPython.display
from PIL import Image
import base64
import requests
requests.adapters.DEFAULT_TIMEOUT = 60
from dotenv import load_dotenv, find_dotenv
_ = load_dotenv(find_dotenv()) # read local .env file
hf_api_key = os.environ['HF_API_KEY']
# Helper function
import requests, json
from text_generation import Client
#FalcomLM-instruct endpoint on the text_generation library
client = Client(os.environ['HF_API_FALCOM_BASE'], headers={"Authorization":
f"Basic {hf_api_key}"}, timeout=120)
```

### Building an app to chat with any LLM

Here we'll be using an Inference Endpoint for falcon-40b-instruct , one of best ranking open source LLM on the Open LLM Leaderboard.

To run it locally, one can use the Transformers library or the text-generationinference
- Transformers Library: Transformers provides APIs and tools to easily
download and train state-of-the-art pretrained models. Using pretrained
models can reduce your compute costs, carbon footprint, and save you
the time and resources required to train a model from scratch. These
models support common tasks in different modalities, such as Computer
vision, Natural Language Processing etc
- Text generation inference github link -
https://github.com/huggingface/text-generation-inference
Source Code:
```python
# This section sets up an initial prompt and uses a language model (referred to as client) to generate text based on the prompt. The generated text is not stored or used further in the code.
prompt = "Has math been invented or discovered?"
client.generate(prompt, max_new_tokens=256).generated_text
# This defines a function respond that simulates a simple chatbot response. It takes a user message (message) and a history of the conversation (chat_history) as input. The chatbot randomly selects one of three pre-made responses, appends the user message and bot message to the chat history, and returns an updated chat history.
import random
def respond(message, chat_history):
 #No LLM here, just respond with a random pre-made message
 bot_message = random.choice(["Tell me more about it", "Cool, but I'm not interested", "Hmmmm, ok then"])
 chat_history.append((message, bot_message))
 return "", chat_history
# This section seems to define a graphical user interface (GUI) using the Blocks library. It creates a chatbot interface with a textbox for user input (msg), a submit button (btn), and a clear button (clear).
with gr.Blocks() as demo:
 chatbot = gr.Chatbot(height=240) #just to fit the notebook
 msg = gr.Textbox(label="Prompt")
 btn = gr.Button("Submit")
 clear = gr.ClearButton(components=[msg, chatbot], value="Clear console")
 btn.click(respond, inputs=[msg, chatbot], outputs=[msg, chatbot])
 msg.submit(respond, inputs=[msg, chatbot], outputs=[msg, chatbot]) #Press enter to submit
gr.close_all()
demo.launch(share=True, server_port=int(os.environ['PORT2’]))
def format_chat_prompt(message, chat_history):
 prompt = ""
 for turn in chat_history:
 user_message, bot_message = turn
 prompt = f"{prompt}\nUser: {user_message}\nAssistant: {bot_message}"
 prompt = f"{prompt}\nUser: {message}\nAssistant:"
 return prompt
def respond(message, chat_history):
 formatted_prompt = format_chat_prompt(message, chat_history)
 bot_message = client.generate(formatted_prompt,
 max_new_tokens=1024,
 stop_sequences=["\nUser:",
"<|endoftext|>"]).generated_text
 chat_history.append((message, bot_message))
 return "", chat_history
with gr.Blocks() as demo:
 chatbot = gr.Chatbot(height=240) #just to fit the notebook
 msg = gr.Textbox(label="Prompt")
 btn = gr.Button("Submit")
 clear = gr.ClearButton(components=[msg, chatbot], value="Clear console")
 btn.click(respond, inputs=[msg, chatbot], outputs=[msg, chatbot])
 msg.submit(respond, inputs=[msg, chatbot], outputs=[msg, chatbot]) #Press enter to submit
gr.close_all()
demo.launch(share=True, server_port=int(os.environ['PORT3']))
```
### Adding other advanced features
```python
# This function, format_chat_prompt, takes three inputs: message (the user's current input), chat_history (the conversation history), and instruction (a system message to be included in the prompt). It creates a formatted prompt string by combining the system instruction, user messages, and assistant messages from the chat history
def format_chat_prompt(message, chat_history, instruction):
 prompt = f"System:{instruction}"
 for turn in chat_history:
 user_message, bot_message = turn
 prompt = f"{prompt}\nUser: {user_message}\nAssistant: {bot_message}"
 prompt = f"{prompt}\nUser: {message}\nAssistant:"
 return prompt
#This code setups a graphical user interface for the advanced features of the chatbot
def respond(message, chat_history, instruction, temperature=0.7):
 prompt = format_chat_prompt(message, chat_history, instruction)
 chat_history = chat_history + [[message, ""]]
 stream = client.generate_stream(prompt,
 max_new_tokens=1024,
 stop_sequences=["\nUser:", ""],
 temperature=temperature)
 #stop_sequences to not generate the user answer
 acc_text = ""
 #Streaming the tokens
 for idx, response in enumerate(stream):
 text_token = response.token.text
 if response.details:
 return
 if idx == 0 and text_token.startswith(" "):
 text_token = text_token[1:]
 acc_text += text_token
 last_turn = list(chat_history.pop(-1))
 last_turn[-1] += acc_text
 chat_history = chat_history + [last_turn]
 yield "", chat_history
 acc_text = ""
# This code snippet appears to be creating a graphical user interface (GUI) using the Blocks library to facilitate user interactions with a chatbot.
with gr.Blocks() as demo:
 chatbot = gr.Chatbot(height=240) #just to fit the notebook
 msg = gr.Textbox(label="Prompt")
 with gr.Accordion(label="Advanced options", open=False):
 system = gr.Textbox(label="System message", lines=2, value="A
conversation between a user and an LLM-based AI assistant. The assistant gives
helpful and honest answers.")
 temperature = gr.Slider(label="temperature", minimum=0.1, maximum=1,
value=0.7, step=0.1)
 btn = gr.Button("Submit")
 clear = gr.ClearButton(components=[msg, chatbot], value="Clear console")
 btn.click(respond, inputs=[msg, chatbot, system], outputs=[msg, chatbot])
 msg.submit(respond, inputs=[msg, chatbot, system], outputs=[msg,
chatbot]) #Press enter to submit
gr.close_all()
demo.queue().launch(share=True, server_port=int(os.environ['PORT4']))
```
This is how you build a chatbot using LLM