# Image Captioning App 

**Now we are going to build an image captioning app using an open-source image-to-text**
- First will use our API key to set up and then we setup our helper file
Source Key:
```python
import os
import io
import IPython.display
from PIL import Image
import base64 
from dotenv import load_dotenv, find_dotenv
_ = load_dotenv(find_dotenv()) # read local .env file
hf_api_key = os.environ['HF_API_KEY']
#helperfunction
import requests, json
#Image-to-text endpoint
def get_completion(inputs, parameters=None, 
ENDPOINT_URL=os.environ['HF_API_ITT_BASE']): 
 headers = {
 "Authorization": f"Bearer {hf_api_key}",
 "Content-Type": "application/json"
 }
 data = { "inputs": inputs }
 if parameters is not None:
 data.update({"parameters": parameters})
 response = requests.request("POST",
 ENDPOINT_URL,
 headers=headers,
 data=json.dumps(data))
 return json.loads(response.content.decode("utf-8"))
```
- Here we also have have an image-to-text endpoint which is the endpoint
for the salesforce blip model(basically it is a model it is a model that 
receives an image as an input and outputs the caption of said image.)
- And the way this works is that this model is trained on millions of those 
images and text caption pairs in a way that they learn with the 
objective of predicting what is the caption if it sees a new image.

**Building an Image Captioning App**
If you're running the model locally, you don't have to worry about that. But 
since we're running it in the API format, we need to convert it to Base64 and 
back to be able to run this properly

Here we'll be using an Inference Endpoint for Salesforce/blip-image-captioning-base a 14M parameter captioning model.
The code would look very similar if you were running it locally instead of from an API. 
You can check the Pipelines documentation page.

Source Code:
```python
from transformers import pipeline
get_completion = pipeline("image-to-text",model="Salesforce/blip
-image-captioning-base")
def summarize(input):
 output = get_completion(input)
 return output[0]['generated_text']
The free images are available on: https://free-images.com/
Source Code for image importing 
image_url = "https://freeimages.com/sm/9596/dog_animal_greyhound_983023.jpg"
display(IPython.display.Image(url=image_url))
get_completion(image_url)
Captioning with `gr.Interface()`
import gradio as gr 
def image_to_base64_str(pil_image):
 byte_arr = io.BytesIO()
 pil_image.save(byte_arr, format='PNG')
 byte_arr = byte_arr.getvalue()
 return str(base64.b64encode(byte_arr).decode('utf-8'))
def captioner(image):
 base64_image = image_to_base64_str(image)
 result = get_completion(base64_image)
 return result[0]['generated_text']
gr.close_all()
demo = gr.Interface(fn=captioner,
 inputs=[gr.Image(label="Upload image", type="pil")],
 outputs=[gr.Textbox(label="Caption")],
 title="Image Captioning with BLIP",
 description="Caption any image using the BLIP model",
 allow_flagging="never",
 examples=["christmas_dog.jpeg", "bird_flight.jpeg", "cow.jpeg"])
demo.launch(share=True, server_port=int(os.environ['PORT1']))
```
***This is how we build an image captioning app***