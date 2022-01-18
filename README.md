# UserForm Web App

<img src='/css/image3.jpg' alt='pic of form'>

## Description
Your task is to build a webpage with a user creation form. The form should take the following required inputs:

Full Name
Email
Password
Occupation
State
Occupation and State should allow users to select from options returned by an endpoint. Users should only be able to select one occupation and one state. A GET request to https://frontend-take-home.fetchrewards.com/form will return a JSON body with the following format:

{
    "occupations": [
        "occupation1",
        "occupation2",
        ...
    ],
    "states": [
        {
            "name": "Alabama",
            "abbreviation": "AL"
        },
        ...
    ]
}
You should submit the results of the form to the same endpoint (https://frontend-take-home.fetchrewards.com/form) via a POST request with a JSON body of the following format:

{
    "name": "???",
    "email": "???",
    "password": "???",
    "occupation": "???",
    "state": "???"
}
The POST endpoint will return a 200 status code if all fields are provided. It does not perform any validation beyond this.

Minimum Requirements
Your site must:

Display a form with inputs for each field outlined above
Allow a user to complete and submit the form
Do not allow form submission without completing the entire form
Provide feedback upon successful form submission
You may complete this exercise using any languages or frameworks you'd like.

## Topics
- CSS
- Javascript
- APIs
- HTML
- BOOTSTRAP

## Table of Contents
* [Description](#description)
* [Topics](#topics)
* [Installation](#installation)
* [Usage](#usage)
* [Technologies](#technologies)
* [Contributing](#contributing)
* [Test](#test)
* [Challenges](#challenges)
* [Questions](#questions)
* [Author](#Author)


## Usage
Once the site has populated in your browser, complete the form. Once complete, submit your information, you'll receive a confirmation that the form was submitted.

## Technologies
- CSS
- Javascript
- APIs
- HTML
- BOOTSTRAP

## Contributing
If you would like to contribute to this project please reach out to me on Github or email.

## Questions
If you have questions about this repository? Please contact me at [patrice_kelly22@yahoo.com](mailto:patrice_kelly22@yahoo.com). View more of my work in GitHub at [patrice111](https://github.com/patrice111).

## Author
Patrice Kelly 
