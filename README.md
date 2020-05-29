#Quadratic Equation

##Installation

This project is intended to be used with the latest Active LTS release of Node.js.

####Clone repository

```
git clone https://github.com/piotrpasich/QuadraticEquation.git
cd QuadraticEquation
npm install
```

##Quadratic Equation Script Usage

```
npm run eq -- -a 1 -b 3 -c 4
```

| Argument  | Description | Mandatory | Default Value |
| ------------- | ------------- | ------------- | ------------- |
| a  | Variable a in quadratic equasion ax²+bx+c=0 | Yes |  |
| b  | Variable b in quadratic equasion ax²+bx+c=0 | No | 0 |
| c  | Variable b in quadratic equasion ax²+bx+c=0 | No | 0 |

### Example Usage

![Usage](docs/img/sample.png?raw=true)

##Unit Tests

The code is fully covered with unit tests.
To run the tests please execute: 

```
npm run tests
```

I will execute all tests from `/tests/unit` folder and generate coverage raport. 

![Tests](docs/img/tests.png?raw=true)
