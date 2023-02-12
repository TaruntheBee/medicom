from enum import Enum
from fastapi import FastAPI
import openai
import random
model_name=""  
class ModelName(str, Enum):
    cancer = "cancer"
    dengue = "dengue"
    rhinitis = "rhinitis"

openai.api_key ='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'
# Set up the model and prompt
model_engine = "text-ada-001"

app = FastAPI()

def buddy(str):
    #option=str
    prompt = "symptoms of "+ str
    # Generate a response
    completion = openai.Completion.create(
    engine=model_engine,
    prompt=prompt,
    max_tokens=35,
    n=1,
    stop=None,
    temperature=0.2,  
    )
    # extracting useful part of response
    response = completion.choices[0].text
    #print(response)
  
    return{response}

@app.get("/models/{model_name}")
async def get_model(model_name: ModelName):
    if model_name =="cancer":
        #str1="cancer"
        return {"disease": model_name, "message": buddy(model_name)}

    if model_name.value == "dengue":
        return {"disease": model_name, "message": buddy(model_name)}

    return {"disease": model_name, "message": buddy(model_name)}

