## Maven

```shell
mvn clean package -DskipTests
```

```shell
java -jar target/*-with-deps.jar --download --force --area=monaco
```

## Docker

```
docker build -t stormsoftware/basemaps .
```

```
docker run -v ./data:/tiles/data --rm -it stormsoftware/basemaps --output=data/monaco.pmtiles --area=monaco
```
