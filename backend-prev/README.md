# Running the backend
## Setup
First, make sure you are in the backend directory:
```
$ cd cs-338/backend
```
We are using Flask as our backend server framework. To install Flask, run:
```
$ pip install Flask
```
You then need to create a virtual environment and activate it:
```
$ python3 -m venv venv
$ . venv/bin/activate
```
Once activated, install the necessary dependencies:
```
(venv) $ pip install -r requirements.txt
```
You will also need an additional piece of software, `ffmpeg`. If you're on MacOS, you can use Homebrew to install it:
```
$ brew install ffmpeg
```
If you're on Windows, follow the directions on [this site](https://www.wikihow.com/Install-FFmpeg-on-Windows) to install.

If you have an M1 Mac, then you may need to run the following so Google Text to Speech works:
```
(venv) $ pip install --no-binary :all: grpcio --ignore-installed
```

## To run the backend
Make sure you are in `/backend` folder:
```
$ export FLASK_APP=run
$ flask run
```

## A sample video
As of 2/2/2022, we've created a demo video with only two events. To generate the video, activate the virtual environment and run:
```
(venv) $ python3 modules/demo_script.py
```
The video is outputted to `tmp.mp4 `.
