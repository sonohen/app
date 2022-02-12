FROM node:lts

USER root
RUN mkdir /app
COPY server.js /app

CMD ["node", "/app/server.js"]
