FROM node:16 AS ui-build
WORKDIR /usr/src/app
COPY my-app/ ./my-app/
RUN cd my-app && npm install && npm run build

FROM node:16 AS server-build
WORKDIR /root/
COPY --from=ui-build /usr/src/app/my-app/build ./my-app/build
COPY api/ ./api/
RUN cd api && npm install 


EXPOSE 3080

CMD ["node", "./api/server.js"]