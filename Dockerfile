FROM python:3.7-buster

WORKDIR .           

COPY ./Backend/internetShutdownBackend/requirements.txt ./
RUN pip install  -r requirements.txt

#COPY . .



