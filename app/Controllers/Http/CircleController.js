'use strict'

const CircleService = use('App/Services/CircleService');

class CircleController {

    constructor() {
        this.circleService = new CircleService();
    }

    index({ request, response }) {
        try {
            const data = request.only(['words'])

            let permutations = this.circleService.permuteArray(data.words);

            console.log(permutations);

            return response
                .status(200)
                .send({
                    message: 'Test'
                })

        } catch (error) {
            return response
            .send(
                error.message
            )
        }


    }

}

module.exports = CircleController
