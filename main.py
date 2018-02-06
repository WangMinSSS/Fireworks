from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route('/')
def hello_world():
    # return render_template('demo.html')
    return render_template('Fireworks.html')

if __name__ == '__main__':
    #app.run()
    app.run(host='0.0.0.0', port=9999)