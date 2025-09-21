# Run this in your Flask shell or as a script after importing your app context

from app import create_app
from app.models import db, Quiz

app = create_app()
app.app_context().push()

questions = [
    {"question": "What is the best time to sow wheat?", "options": ["Morning", "Afternoon", "Evening", "Night"], "correct_answer": "Morning"},
    {"question": "Which fertilizer is rich in nitrogen?", "options": ["Urea", "Potash", "DAP", "Compost"], "correct_answer": "Urea"},
    {"question": "What is the main nutrient in potash fertilizer?", "options": ["Potassium", "Phosphorus", "Nitrogen", "Calcium"], "correct_answer": "Potassium"},
    {"question": "Which crop is a legume?", "options": ["Wheat", "Rice", "Soybean", "Maize"], "correct_answer": "Soybean"},
    {"question": "What is the ideal soil pH for most crops?", "options": ["4-5", "5.5-7.5", "7.5-9", "3-4"], "correct_answer": "5.5-7.5"},
    {"question": "Which irrigation method saves the most water?", "options": ["Flood", "Sprinkler", "Drip", "Furrow"], "correct_answer": "Drip"},
    {"question": "What is vermicompost made from?", "options": ["Worms", "Fertilizer chemicals", "Animal bones", "Plastic"], "correct_answer": "Worms"},
    {"question": "Which crop is used to produce cotton fiber?", "options": ["Jute", "Cotton", "Hemp", "Rice"], "correct_answer": "Cotton"},
    {"question": "Which pest affects rice crops?", "options": ["Locusts", "Stem borer", "Aphids", "Caterpillars"], "correct_answer": "Stem borer"},
    {"question": "Which is a rabi crop?", "options": ["Wheat", "Rice", "Maize", "Soybean"], "correct_answer": "Wheat"},
    {"question": "Which crop is grown in Kharif season?", "options": ["Wheat", "Rice", "Barley", "Mustard"], "correct_answer": "Rice"},
    {"question": "What does IPM stand for in agriculture?", "options": ["Integrated Pest Management", "Intensive Planting Method", "Irrigation Planning Model", "Insect Pest Mitigation"], "correct_answer": "Integrated Pest Management"},
    {"question": "Which nutrient is essential for flowering?", "options": ["Nitrogen", "Phosphorus", "Potassium", "Calcium"], "correct_answer": "Phosphorus"},
    {"question": "What is crop rotation used for?", "options": ["Prevent soil erosion", "Control pests", "Maintain soil fertility", "All of the above"], "correct_answer": "All of the above"},
    {"question": "Which crop is used for oil extraction?", "options": ["Soybean", "Cotton", "Wheat", "Barley"], "correct_answer": "Soybean"},
    {"question": "Which is a horticultural crop?", "options": ["Tomato", "Wheat", "Rice", "Maize"], "correct_answer": "Tomato"},
    {"question": "What is mulching used for?", "options": ["Control weeds", "Retain moisture", "Regulate temperature", "All of the above"], "correct_answer": "All of the above"},
    {"question": "Which disease affects potato crops?", "options": ["Late blight", "Rust", "Wilt", "Downy mildew"], "correct_answer": "Late blight"},
    {"question": "Which soil type is best for rice cultivation?", "options": ["Sandy", "Clay", "Loamy", "Saline"], "correct_answer": "Clay"},
    {"question": "What is the main product of apiculture?", "options": ["Honey", "Milk", "Silk", "Wool"], "correct_answer": "Honey"},
    {"question": "Which crop is a cash crop?", "options": ["Sugarcane", "Rice", "Wheat", "Maize"], "correct_answer": "Sugarcane"},
    {"question": "Which practice improves soil fertility naturally?", "options": ["Chemical fertilizers", "Crop rotation", "Monocropping", "Over plowing"], "correct_answer": "Crop rotation"},
    {"question": "Which irrigation method uses pipes and emitters?", "options": ["Flood", "Sprinkler", "Drip", "Furrow"], "correct_answer": "Drip"},
    {"question": "Which crop is a cereal?", "options": ["Rice", "Soybean", "Cotton", "Potato"], "correct_answer": "Rice"},
    {"question": "Which is a major legume crop in India?", "options": ["Soybean", "Wheat", "Rice", "Sugarcane"], "correct_answer": "Soybean"},
    {"question": "What is the main cause of soil salinity?", "options": ["Excess irrigation", "Rainfall", "Crop rotation", "Mulching"], "correct_answer": "Excess irrigation"},
    {"question": "Which insect pollinates crops?", "options": ["Bees", "Locusts", "Aphids", "Weevils"], "correct_answer": "Bees"},
    {"question": "Which fertilizer provides phosphorus?", "options": ["Urea", "DAP", "Potash", "Compost"], "correct_answer": "DAP"},
    {"question": "What is a horticulture fruit crop?", "options": ["Apple", "Wheat", "Rice", "Maize"], "correct_answer": "Apple"},
    {"question": "Which crop is resistant to drought?", "options": ["Millet", "Rice", "Wheat", "Sugarcane"], "correct_answer": "Millet"},
    {"question": "Which crop is grown in paddy fields?", "options": ["Rice", "Wheat", "Maize", "Barley"], "correct_answer": "Rice"},
    {"question": "Which crop requires standing water?", "options": ["Rice", "Wheat", "Maize", "Soybean"], "correct_answer": "Rice"},
    {"question": "Which fertilizer is potassium-rich?", "options": ["Urea", "Potash", "DAP", "Compost"], "correct_answer": "Potash"},
    {"question": "Which crop is short-duration?", "options": ["Maize", "Sugarcane", "Cotton", "Banana"], "correct_answer": "Maize"},
    {"question": "Which pest attacks cotton?", "options": ["Bollworm", "Stem borer", "Aphids", "Locusts"], "correct_answer": "Bollworm"},
    {"question": "Which is an organic farming input?", "options": ["Neem oil", "Urea", "DAP", "Potash"], "correct_answer": "Neem oil"},
    {"question": "Which crop is a tuber?", "options": ["Potato", "Rice", "Wheat", "Maize"], "correct_answer": "Potato"},
    {"question": "Which practice prevents soil erosion?", "options": ["Contour farming", "Flood irrigation", "Monocropping", "Over plowing"], "correct_answer": "Contour farming"},
    {"question": "Which crop is used for silage?", "options": ["Maize", "Rice", "Wheat", "Sugarcane"], "correct_answer": "Maize"},
    {"question": "Which fertilizer provides nitrogen?", "options": ["Urea", "Potash", "DAP", "Compost"], "correct_answer": "Urea"},
    {"question": "Which crop is high in protein?", "options": ["Soybean", "Rice", "Wheat", "Maize"], "correct_answer": "Soybean"},
    {"question": "Which crop is used for biofuel?", "options": ["Sugarcane", "Rice", "Wheat", "Potato"], "correct_answer": "Sugarcane"},
    {"question": "Which crop is a pulse?", "options": ["Chickpea", "Rice", "Wheat", "Maize"], "correct_answer": "Chickpea"},
    {"question": "Which crop is affected by rust disease?", "options": ["Wheat", "Rice", "Maize", "Sugarcane"], "correct_answer": "Wheat"},
    {"question": "Which crop is used for fiber?", "options": ["Cotton", "Rice", "Wheat", "Maize"], "correct_answer": "Cotton"},
    {"question": "Which crop requires high sunlight?", "options": ["Tomato", "Rice", "Wheat", "Maize"], "correct_answer": "Tomato"},
    {"question": "Which crop is water-intensive?", "options": ["Rice", "Millet", "Wheat", "Soybean"], "correct_answer": "Rice"},
    {"question": "Which crop is grown in acidic soil?", "options": ["Tea", "Wheat", "Maize", "Soybean"], "correct_answer": "Tea"},
    {"question": "Which crop is used in crop rotation to fix nitrogen?", "options": ["Legumes", "Rice", "Wheat", "Maize"], "correct_answer": "Legumes"},
    {"question": "Which crop attracts pollinators?", "options": ["Sunflower", "Rice", "Wheat", "Maize"], "correct_answer": "Sunflower"},
    {"question": "Which crop is suitable for organic farming?", "options": ["Vegetables", "Rice", "Wheat", "Maize"], "correct_answer": "Vegetables"},
    {"question": "Which crop requires cold climate?", "options": ["Apple", "Rice", "Maize", "Sugarcane"], "correct_answer": "Apple"}
]

# Insert questions into database
for q in questions:
    quiz_entry = Quiz(
        question=q["question"],
        options=q["options"],
        correct_answer=q["correct_answer"]
    )
    db.session.add(quiz_entry)

db.session.commit()
print("50 agriculture quiz questions added successfully!")
