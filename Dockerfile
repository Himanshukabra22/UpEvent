FROM node
WORKDIR /UpEvent
COPY . /UpEvent
RUN npm i
EXPOSE 8000
CMD ["node","./src/app.js"]