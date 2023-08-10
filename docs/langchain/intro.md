# Langchain

**What is Langchain**

- It is designed to make it easier to connect LLMs with other data sources and allow the LLM to take actions.
- It provides standard interfaces for concepts like chains, agents, memory, and indexes. Chains allow sequencing multiple LLM calls, agents involve the LLM taking actions, memory persists state across calls, and indexes connect the LLM to custom text data.
- It has modules for common use cases like personal assistants, question answering, chatbots, querying data, interacting with APIs, summarization, and more.
- The goal is to simplify the process of building more advanced applications with LLMs beyond just a single API call.


## Program
```python
import os


from dotenv import load_dotenv, find_dotenv
_ = load_dotenv(find_dotenv()) # read local .env file


import warnings
warnings.filterwarnings('ignore')
from langchain.llms import Cohere
from langchain import PromptTemplate, LLMChain, ConversationChain
```



## Explanation

This code is using the langchain library to generate a response to a given question using the Cohere language model. Here is an explanation of the code line by line: /n/n
**import os:** This line imports the os module, which provides a way of using operating system dependent functionality. /n/n
**from dotenv import load_dotenv, find_dotenv:** This line imports the load_dotenv and find_dotenv functions from the dotenv module. These functions are used to load environment variables from a .env file.

**_ = load_dotenv(find_dotenv()):** This line calls the load_dotenv function with the result of the find_dotenv function as its argument. This loads the environment variables from the .env file into the current environment.

**import warnings:** This line imports the warnings module, which provides a way to issue warning messages.
warnings.filterwarnings('ignore'): This line calls the filterwarnings function with the argument 'ignore'. This suppresses all warning messages.

**from langchain.llms import Cohere:** This line imports the Cohere class from the langchain.llms module. The Cohere class is used to interact with the Cohere language model.

**from langchain import PromptTemplate, LLMChain:** This line imports the PromptTemplate and LLMChain classes from the langchain module. The PromptTemplate class is used to define a template for generating prompts for the language model, and the LLMChain class is used to chain multiple language models together.

**template = """Question:** {question}/n/n/nAnswer: Let's think step by step.""": This line defines a template string for generating prompts for the language model. The template includes placeholders for input variables, which will be replaced with their values when generating a prompt.

**prompt = PromptTemplate(template=template, input_variables=["question"]):** This line creates an instance of the PromptTemplate class with the previously defined template string and a list of input variables. /n/n
**llm = Cohere(cohere_api_key="YOUR_API_KEY_HERE”):** This line creates an instance of the Cohere class with an API key for accessing the Cohere language model.

**llm_chain = LLMChain(prompt=prompt, llm=llm):** This line creates an instance of the LLMChain class with the previously created instances of the PromptTemplate and Cohere classes.

**question = "What NFL team won the Super Bowl in the year Justin Beiber was born?":** This line defines a question string that will be used as input to the language model.

**response = llm_chain.run(question):** This line calls the run method on the previously created instance of the LLMChain class with the question string as its argument. This generates a response to the question using the Cohere language model. 

**print(response):** This line prints out the generated response.

I hope this helps! Let me know if you have any further questions 😊


## What is ConversationBufferMemory?

- It stores the conversation history as a string containing the recent input/output pairs.
- The full conversation history is passed to the LLM each time, so the LLM has context on the full conversation.
- It does not limit the number of interactions stored, so the memory buffer can grow very large over time.
- It is useful when you want the full context for the LLM, without any truncation of history.
- The memory buffer is flushed when .reset() is called on the memory.

**Program**

```python
from langchain.memory import ConversationBufferMemory
llm = Cohere(cohere_api_key=os.getenv("cohere_api_key"), temperature=0)
memory = ConversationBufferMemory()
conversation = ConversationChain(
    llm=llm, 
    memory = memory,
    verbose=True)

conversation.predict(input="Hi, my name is Andrew")
conversation.predict(input="What is 1+1?")
conversation.predict(input="What is my name?")
print(memory.buffer)
memory.load_memory_variables({})
memory = ConversationBufferMemory()
memory.save_context({"input": "Hi"}, 
                    {"output": "What's up"})
print(memory.buffer)
memory.load_memory_variables({})
memory.save_context({"input": "Not much, just hanging"}, 
                    {"output": "Cool"})
memory.load_memory_variables({})
```

## What is Conversation Buffer Window Memory?
- It maintains a list of the past interactions in a conversation.
- Only the most recent K interactions are kept, where K is a parameter that can be set. Older interactions are discarded.
- This keeps the memory buffer from growing too large, while still providing context from recent interactions.
- The memory can return the interactions as raw text or as structured messages.
- It's useful for chat models where you want to limit the context to the most recent exchanges.

```python
from langchain.memory import ConversationBufferWindowMemory
llm = Cohere(cohere_api_key=os.getenv("cohere_api_key"), temperature=0)
memory = ConversationBufferWindowMemory(k=1) 
memory.save_context({"input": "Hi"},
                    {"output": "What's up"})
memory.save_context({"input": "Not much, just hanging"},
                    {"output": "Cool"})
memory.load_memory_variables({})

memory = ConversationBufferWindowMemory(k=1)
conversation = ConversationChain(
    llm=llm, 
    memory = memory,
    verbose=True
)
conversation.predict(input="Hi, my name is Andrew")
conversation.predict(input="What is 1+1?")
conversation.predict(input="What is my name?")
```

## What is ConversationTokenBufferMemory?
- It stores a buffer of the most recent messages between a human and AI.
- It uses token length rather than number of messages to determine when to flush old interactions from the buffer.
- You specify the max token limit when initializing the memory. Once that limit is exceeded, old messages will be removed from the buffer.
- The messages are stored as a string called 'history' that can be loaded into the prompt to give the AI conversational context.
- You can also get the messages as a list, which is useful if you want to provide context to a chat model.
```python
from langchain.memory import ConversationTokenBufferMemory

llm = Cohere(cohere_api_key=os.getenv("cohere_api_key"), temperature=0)

memory = ConversationTokenBufferMemory(llm=llm, max_token_limit=30)
memory.save_context({"input": "AI is what?!"},
                    {"output": "Amazing!"})
memory.save_context({"input": "Backpropagation is what?"},
                    {"output": "Beautiful!"})
memory.save_context({"input": "Chatbots are what?"}, 
                    {"output": "Charming!"})

memory.load_memory_variables({})
```
## What is ConversationSummaryMemory?
- It's designed to be used with ConversationChain to provide a context buffer for conversational AI systems.
- It creates a summary of the conversation as it happens and stores the current summary in memory.
- This summary can then be injected into a prompt or chain to provide context about the conversation so far.
- It is useful for longer conversations where keeping the full message history would take up too many tokens.
- It has methods like save_context to save new messages, load_memory_variables to load the current summary, and predict_new_summary to generate a new summary.
- It can be initialized directly with a ChatMessageHistory object containing existing messages.
- The summary allows condensing information from the conversation over time rather than keeping the full verbatim history.
- When used in a ConversationChain, it will update the summary after each new user input.

**Program**
```python
from langchain.memory import ConversationSummaryBufferMemory

llm = Cohere(cohere_api_key=os.getenv("cohere_api_key"), temperature=0)

# create a long string
schedule = "There is a meeting at 8am with your product team. \
You will need your powerpoint presentation prepared. \
9am-12pm have time to work on your LangChain \
project which will go quickly because Langchain is such a powerful tool. \
At Noon, lunch at the italian resturant with a customer who is driving \
from over an hour away to meet you to understand the latest in AI. \
Be sure to bring your laptop to show the latest LLM demo."

memory = ConversationSummaryBufferMemory(llm=llm, max_token_limit=100)
memory.save_context({"input": "Hello"}, {"output": "What's up"})
memory.save_context({"input": "Not much, just hanging"},
                    {"output": "Cool"})
memory.save_context({"input": "What is on the schedule today?"}, 
                    {"output": f"{schedule}"})

memory.load_memory_variables({})

conversation = ConversationChain(
    llm=llm, 
    memory = memory,
    verbose=True
)

conversation.predict(input="What would be a good demo to show?")

memory.load_memory_variables({})
```
### Join us on Colab
[Open colab File](https://colab.research.google.com/drive/1CXcaeNRTH2LtTSfL-bb4gWMvAdMxqR09?authuser=1#scrollTo=-mSN75xFcP7U)