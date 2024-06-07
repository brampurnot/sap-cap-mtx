FROM node:18-alpine as base
RUN apk add --no-cache g++ make py3-pip libc6-compat

WORKDIR /app
COPY package*.json ./
COPY yarn.lock ./
COPY next.config.mjs ./
#COPY out /.
EXPOSE 5000

FROM base as builder
WORKDIR /app
COPY . .
ENV NODE_ENV=production
RUN yarn install --frozen-lockfile
RUN npm run build

FROM base as production
WORKDIR /app

#RUN addgroup -g 1001 -S nodejs
#RUN adduser -S nextjs -u 1001
#USER nextjs

COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/out ./out
COPY --from=builder /app/public ./public
COPY --from=builder /app/xs-app.json ./xs-app.json

#CMD npm run start-approuter
CMD ["npm", "run", "start-approuter"]