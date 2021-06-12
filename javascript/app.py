from flask import Flask, render_template

app = Flask(__name__, static_url_path='/static')

# ---------------------------- CHAPTER 1 ----------------------------
# @app.route("/")
# def index():
#     return render_template('ch01/ch01_01_canvas.html')

# @app.route("/")
# def index():
#     return render_template('ch01/ch01_02_canvas.html')

# @app.route("/")
# def index():
#     return render_template('ch01/ch01_03_attributes.html')

# @app.route("/")
# def index():
#     return render_template('ch01/ch01_05_attributes-final.html')
# -------------------------------------------------------------------


# ---------------------------- CHAPTER 2 ----------------------------
# @app.route("/")
# def index():
#     return render_template('ch02/ch02_01_square.html')

# @app.route("/")
# def index():
#     return render_template('ch02/ch02_03_square.html')

# @app.route("/")
# def index():
#     return render_template('ch02/ch02_04_rendering-modes.html')

@app.route("/")
def index():
    return render_template('ch02/ch02_05_state-machine.html')
# -------------------------------------------------------------------


if __name__ == "__main__":
    app.run(debug=True)