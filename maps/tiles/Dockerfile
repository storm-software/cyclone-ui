# Stage 1: Build
FROM maven:3-eclipse-temurin-25-alpine AS build
WORKDIR /tiles

# Copy pom.xml and download dependencies separately to create a cached layer
COPY pom.xml pom.xml
RUN mvn dependency:go-offline

# Then copy source code and build
COPY src src
RUN mvn clean package

# Stage 2: Runtime
FROM eclipse-temurin:25-jre-alpine
WORKDIR /tiles

# Copy only the built jar from the build stage
COPY --from=build /tiles/target/stormsoftware-basemap-HEAD-with-deps.jar /tiles/stormsoftware-basemap.jar

# Run the application
ENTRYPOINT ["java", "-jar", "/tiles/stormsoftware-basemap.jar"]
