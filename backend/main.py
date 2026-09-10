from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
app = FastAPI()

app.mount("/static", StaticFiles(directory="../frontend"), name="static")

def predict_price(area: float, bedrooms: int, location: str) -> float:
    base_price = 500_000_000
    add_per_area = 15_000_000
    add_per_bedroom = 50_000_000

    price = base_price + (add_per_area*area) + (add_per_bedroom*bedrooms)
    if location == 'hanoi':
        price = price*1.3
    elif location == 'hcmc':
        price = price*1.25

    return price

@app.get("/predict")
def get_prediction_price(area: float, bedrooms: int, location: str):
    return { "area":area,
             "bedrooms":bedrooms, 
             "location":location, 
             "predict_price":predict_price(area,bedrooms,location)
    }


