from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")
def index():
    return render_template('index.html')

@app.route("/manual-single")
def manual_single():
    return render_template('manual-single.html')

@app.route("/manual-separate")
def manual_separate():
    return render_template('manual-separate.html')

@app.route("/model-binding-p")
def binding_p():
    return render_template('model-binding-p.html')

@app.route("/model-binding-s")
def binding_s():
    return render_template('model-binding-s.html')

if __name__ == "__main__":
    app.run(debug=True)
