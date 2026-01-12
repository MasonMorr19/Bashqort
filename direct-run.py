# Load model directly
from transformers import AutoTokenizer, AutoModelForCausalLM
tokenizer = AutoTokenizer.from_pretrained("ai-forever/mGPT-1.3B-bashkir")
model = AutoModelForCausalLM.from_pretrained("ai-forever/mGPT-1.3B-bashkir")