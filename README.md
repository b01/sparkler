# Sparkler

A builder for the Spark Design System.

## Background

This project was build following the instructions on the Spark Design System 
website. About half way through I was introduced to the starter kit, which this
is pretty much a duplicate of. However, this runs in Docker and has a VS Code
`.devcontainer` config. That means you can clone this repo then open in VS Code
and if all goes well, be developing in minutes.


## Get Started

### Build Your Own Components

1. Clone this repo and open in VS Code, then customize to you need.
2. Then read the spark Design System developer docs on how to make new components.


### Get the System

Use this to output Spark Design System CSS, JS and SVG files you can use in a
site:

Requirement

* Git
* Docker
* An Internet connection

```
docker run --rm -v "${PWD}:/app/out" khalifahks/sparkler build
```