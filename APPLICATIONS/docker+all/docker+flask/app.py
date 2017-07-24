from flask import Flask, render_template
import random

app = Flask(__name__)

images = [
"https://hips.hearstapps.com/cos.h-cdn.co/assets/14/39/1600x800/nrm_1411501798-140922-cosmo-women-who-code-0464.jpg?resize=480:*",
"http://launchdfw.com/wp-content/uploads/2015/09/women-who-code-belfast-introduction-to-design-patterns-1-638.jpg",
"https://media.licdn.com/media/AAEAAQAAAAAAAAlLAAAAJDUwYWMyZmJhLWQ3NzMtNGViZC1hYzllLThlNmY2NmNmOTlhNA.png",
"https://static1.squarespace.com/static/5575ed06e4b019b0586d393c/5633f4fee4b0e41cc45eb923/5633f508e4b062bdba18f030/1446245649856/Women+In+Tech+-+92.jpg"
]

@app.route("/")
def index():
    url = random.choice(images)
    return render_template("index.html", url=url)


if __name__ == "__main__":
    app.run(host="0.0.0.0")