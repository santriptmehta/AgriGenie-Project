FROM maven AS build
COPY . .
RUN mvn clean package -DskipTests

FROM openjdk:21
COPY --from=build target/backend-chatBot.jar chatBot.jar
EXPOSE 5000
ENTRYPOINT ["java", "-jar", "chatBot.jar"]
