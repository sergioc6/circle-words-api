# Circle Words API application

## Setup

Clone the repository

```sh
$ git clone https://github.com/sergioc6/circle-words-api.git
$ cd circle-word-api
```

Copy the enviorement example
```sh
$ cp .env.example .env
```

Run the server
```sh
$ node server.js
```

## API specification

| Method | Path | Description |
| --- | --- | ---|
| GET | / | Main path, app name and version |
| POST | /circle | Returns the list of possible circles |

# Body endpoint POST: /circle
```sh
{
    "words": [
        "chair", 
        "height", 
        "racket", 
        "touch", 
        "tunic"
    ]
}
```