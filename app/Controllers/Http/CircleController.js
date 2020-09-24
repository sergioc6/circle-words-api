'use strict'

const CircleService = use('App/Services/CircleService');

class CircleController {

    constructor() {
        this.circleService = new CircleService();
    }

    index({ request, response }) {
        try {
            const requestData = request.only(['words'])
            const words = [...new Set(requestData.words)];

            let circles = this.circleService.getCirclesWords(words);
            let data = circles.map(circle => { return circle.join(' -> ')})
            let circlesLength = circles.length

            let message = (circlesLength != 0) ? `Existen  ${circlesLength} cìrculos posibles` : `No existen circulos para sus palabras`

            return response
                .status(200)
                .send({
                    status: 'success',
                    message,
                    data
                })

        } catch (err) {
            return response
            .status(500)
            .send({
                    status: 'error',
                    message: err.message
            })
        }


    }

}

module.exports = CircleController
