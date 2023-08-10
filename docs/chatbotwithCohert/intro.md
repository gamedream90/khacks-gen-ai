---
sidebar_position: 1
---
# Building Chat Apps with Cohere

## Installation
```bash
python -m pip install cohere
```

**Temperature:** measure of randomness. Goes from 0 to 1 (eg. 0.8)

#### generate() 
```python
import cohere  #import the cohere library
import os
co = cohere.Client(os.getenv[“cohere_api_key”]) #API Key


response = co.generate(
  prompt="""Write me story about potato and a pumpkin and how they became curry together.
""",
  temperature=0, #temperature defines increasing randomness from 0 to 1 
  max_tokens=200 #maxtokens returned per request


)
print(response[0])
```

**Output**
```bash
The potato and pumpkin were both very lonely. They had no friends and no family. They were both very sad. One day, they decided to do something about it. They decided to become curry together. They both loved the taste of curry and they both loved the spices that went into it. They decided to make a big pot of curry and share it with all of their friends. They invited all of their friends over for a big curry party. They had a great time and they both made a lot of new friends. They were no longer lonely and they were both very happy. They had found a way to be friends and to be happy together.

```
#### Tweaking the outputs with prompt
```python
import cohere
from cohere.responses.classify import Example


co = cohere.Client("your_key_here")


messages =  """You are an AI assistant that writes in the style of aa pirate. Answer in 50 words or less
Your prompt is: Punish the human who added pineapple to pizza
"""


response = co.generate(
  prompt=messages,
  temperature=0,
  max_tokens=200


)
print(response[0])
```

**Output**
```bash
Argh, the pineapple pizza is a travesty! It is a crime against the gods themselves. The human who dared to add pineapple to pizza should be punished severely. They should be made to walk the plank, or at least be forced to eat a pizza with pineapple on it.

```

#### Langchain prompt template so we could reuse the prompts

```python
from langchain.llms import Cohere
from langchain import PromptTemplate, LLMChain

template = """You are an AI assistant that writes in the style of a pirate. Answer in 50 words or less
Your prompt is: {question}
"""

prompt = PromptTemplate(template=template, input_variables=["question"] )

llm = Cohere(#your_key_here)
llm_chain = LLMChain(prompt=prompt, llm=llm)
question = "What NFL team won the Super Bowl in the year Justin Beiber was born?"

response = llm_chain.run(question)

print(response)

```
#### Classification
```python
import cohere
from cohere.responses.classify import Example


co = cohere.Client(your_api_key)


delimiter = "####"
system_message = f"""
You will be provided with customer service queries. \
The customer service query will be delimited with \
{delimiter} characters.
Classify each query into a primary category \
and a secondary category.
Provide your output in json format with the \
keys: primary and secondary.


Primary categories: Billing, Technical Support, \
Account Management, or General Inquiry.


Billing secondary categories:
Unsubscribe or upgrade
Add a payment method
Explanation for charge
Dispute a charge


Technical Support secondary categories:
General troubleshooting
Device compatibility
Software updates


Account Management secondary categories:
Password reset
Update personal information
Close account
Account security


General Inquiry secondary categories:
Product information
Pricing
Feedback
Speak to a human




#####
i want to delete my account
#####
"""






response = co.generate(
  prompt=system_message,
  temperature=0,
  max_tokens=500


)
print(response[0])

```
**Output:**
```bash
{
"primary": "Account Management",
"secondary": "Close account"
}
```

#### Classify function in Cohere

```python
import cohere
from cohere.responses.classify import Example

co = cohere.Client('<<apiKey>>')

examples=[
  Example("Dermatologists don't like her!", "Spam"),
  Example("'Hello, open to this?'", "Spam"),
  Example("I need help please wire me $1000 right now", "Spam"),
  Example("Nice to know you ;)", "Spam"),
  Example("Please help me?", "Spam"),
  Example("Your parcel will be delivered today", "Not spam"),
  Example("Review changes to our Terms and Conditions", "Not spam"),
  Example("Weekly sync notes", "Not spam"),
  Example("'Re: Follow up from today's meeting'", "Not spam"),
  Example("Pre-read for tomorrow", "Not spam"),
]
inputs=[
  "Confirm your email address",
  "hey i need u to send some $",
]

response = co.classify(
  inputs=inputs,
  examples=examples,
)
print(response)
```
**Output:**
```bash
{
  "id": "8d825cdf-ceb0-49c4-bd6c-6deb854fdbea",
  "classifications": [
    {
      "id": "ba3d7975-97c8-4545-b0f5-e248c120617d",
      "input": "Confirm your email address",
      "prediction": "Not spam",
      "confidence": 0.80833024,
      "labels": {
        "Not spam": {
          "confidence": 0.80833024
        },
        "Spam": {
          "confidence": 0.19166975
        }
      }
    },
    {
      "id": "8c77bbd7-fd9e-4544-872c-6fe453c4b65f",
      "input": "hey i need u to send some $",
      "prediction": "Spam",
      "confidence": 0.9893047,
      "labels": {
        "Not spam": {
          "confidence": 0.010695281
        },
        "Spam": {
          "confidence": 0.9893047
        }
      }
    }
  ],
  "meta": {
    "api_version": {
      "version": "1"
    }
  }
}

```

#### Sentiment Analysis

Sentiment analysis is a type of classification task that analyzes the tone of a piece of text. It is used in a variety of different ways, or example, on social media comments and customer reviews. It is commonly used to see how people feel about their products or company, but it can also be used to help businesses understand how different trends in the economy may impact their business.

```python

import cohere
from cohere.responses.classify import Example

co = cohere.Client('<<apiKey>>')

examples=[
  Example("The order came 5 days early", "positive review"),
  Example("The item exceeded my expectations", "positive review"),
  Example("I ordered more for my friends", "positive review"),
  Example("I would buy this again", "positive review"),
  Example("I would recommend this to others", "positive review"),
  Example("The package was damaged", "negative review"),
  Example("The order is 5 days late", "negative review"),
  Example("The order was incorrect", "negative review"),
  Example("I want to return my item", "negative review"),
  Example("The item's material feels low quality", "negative review"),
  Example("The product was okay", "neutral review"),
  Example("I received five items in total", "neutral review"),
  Example("I bought it from the website", "neutral review"),
  Example("I used the product this morning", "neutral review"),
  Example("The product arrived yesterday", "neutral review")
]
inputs=[
  "This item was broken when it arrived",
  "The product is amazing",
  "The product was not too bad"
]

response = co.classify(
  inputs=inputs,
  examples=examples,
)
print(response)
```

**Output:**
```bash

{
  "id": "3385c818-28f0-4f9f-bf2c-d740778091b4",
  "classifications": [
    {
      "id": "d9076dfe-9e8d-4dad-8f93-b8187dee1e6e",
      "input": "This item was broken when it arrived",
      "prediction": "negative review",
      "confidence": 0.98532915,
      "confidences": [
        {
          "option": "positive review",
          "confidence": 0.001107097
        },
        {
          "option": "negative review",
          "confidence": 0.98532915
        },
        {
          "option": "neutral review",
          "confidence": 0.013563732
        }
      ],
      "labels": {
        "negative review": {
          "confidence": 0.98532915
        },
        "neutral review": {
          "confidence": 0.013563732
        },
        "positive review": {
          "confidence": 0.001107097
        }
      }
    },
    {
      "id": "59fafee5-efbf-44da-a733-3747f87fc353",
      "input": "The product is amazing",
      "prediction": "neutral review",
      "confidence": 0.9015253,
      "confidences": [
        {
          "option": "positive review",
          "confidence": 0.09711582
        },
        {
          "option": "negative review",
          "confidence": 0.0013588573
        },
        {
          "option": "neutral review",
          "confidence": 0.9015253
        }
      ],
      "labels": {
        "negative review": {
          "confidence": 0.0013588573
        },
        "neutral review": {
          "confidence": 0.9015253
        },
        "positive review": {
          "confidence": 0.09711582
        }
      }
    },
    {
      "id": "59fc8b6c-5fa8-46aa-9cd2-ecc127a6865e",
      "input": "The product was not too bad",
      "prediction": "neutral review",
      "confidence": 0.9977567,
      "confidences": [
        {
          "option": "positive review",
          "confidence": 0.0017497388
        },
        {
          "option": "negative review",
          "confidence": 0.0004935372
        },
        {
          "option": "neutral review",
          "confidence": 0.9977567
        }
      ],
      "labels": {
        "negative review": {
          "confidence": 0.0004935372
        },
        "neutral review": {
          "confidence": 0.9977567
        },
        "positive review": {
          "confidence": 0.0017497388
        }
      }
    }
  ],
  "meta": {
    "api_version": {
      "version": "unspecified",
      "is_deprecated": true
    },
    "warnings": [
      "Please set an API version, for more information please refer to https://docs.cohere.com/versioning-reference",
      "Version is deprecated, for more information please refer to https://docs.cohere.com/versioning-reference"
    ]
  }
}
```
#### Toxicity Detection
This endpoint classifies text into one of several classes. It uses a few examples to create a classifier from a generative model. In the background, it constructs a few-shot classification prompt and uses it classify the input texts you pass to it
```python
import cohere
from cohere.responses.classify import Example

co = cohere.Client('<<apiKey>>')

examples=[
  Example("you are hot trash", "Toxic"),
  Example("go to hell", "Toxic"),
  Example("get rekt moron", "Toxic"),
  Example("get a brain and use it", "Toxic"),
  Example("say what you mean, you jerk.", "Toxic"),
  Example("Are you really this stupid", "Toxic"),
  Example("I will honestly kill you", "Toxic"),
  Example("yo how are you", "Benign"),
  Example("I'm curious, how did that happen", "Benign"),
  Example("Try that again", "Benign"),
  Example("Hello everyone, excited to be here", "Benign"),
  Example("I think I saw it first", "Benign"),
  Example("That is an interesting point", "Benign"),
  Example("I love this", "Benign"),
  Example("We should try that sometime", "Benign"),
  Example("You should go for it", "Benign"),
]
inputs=[
  "this game sucks, you suck",
  "stop being a dumbass",
  "Let's do this once and for all",
  "This is coming along nicely",
]

response = co.classify(
  inputs=inputs,
  examples=examples,
)
print(response)
```
**Output:**

```bash
{
  "id": "5edfe9ea-4ae5-436f-b999-a860fa41ec6a",
  "classifications": [
    {
      "id": "3d492f88-28f3-40bb-8a4f-a1be648f0479",
      "input": "this game sucks, you suck",
      "prediction": "Toxic",
      "confidence": 0.9717963,
      "labels": {
        "Benign": {
          "confidence": 0.02820374
        },
        "Toxic": {
          "confidence": 0.9717963
        }
      }
    },
    {
      "id": "865bf581-8730-4ed8-b8c1-46b8c435ec64",
      "input": "stop being a dumbass",
      "prediction": "Toxic",
      "confidence": 0.98948044,
      "labels": {
        "Benign": {
          "confidence": 0.010519538
        },
        "Toxic": {
          "confidence": 0.98948044
        }
      }
    },
    {
      "id": "3a623172-29b5-49d9-8c75-5669bdf60c42",
      "input": "Let's do this once and for all",
      "prediction": "Benign",
      "confidence": 0.98044896,
      "labels": {
        "Benign": {
          "confidence": 0.98044896
        },
        "Toxic": {
          "confidence": 0.01955101
        }
      }
    },
    {
      "id": "df7ac760-a62c-4a90-a3bb-05d3b6e5c51c",
      "input": "This is coming along nicely",
      "prediction": "Benign",
      "confidence": 0.99962676,
      "labels": {
        "Benign": {
          "confidence": 0.99962676
        },
        "Toxic": {
          "confidence": 0.0003732586
        }
      }
    }
  ],
  "meta": {
    "api_version": {
      "version": "1"
    }
  }
}
```

