FROM cypress/base:16

RUN mkdir /app

WORKDIR /app

COPY . /app

RUN npm install


RUN $(npm bin)/cypress verify

# Eliminar los informes anteriores
RUN rm -rf cypress/reports/

# Ejecutar las pruebas de regresión con Cypress en Chrome en modo headless
CMD ["npm", "run", "ui-test-regression-cy:run"]

CMD ["npm", "node", "cucumber-html-report.js"]
CMD ["npm", "run", "report:open:docker"]



