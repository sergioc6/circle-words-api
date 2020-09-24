'use strict'

class CircleController {

    index({ request, response }) {
        try {
            const data = request.only(['words'])
            

            console.log(data.words);


            return response
                .status(200)
                .send({
                    message: 'Test'
                })

        } catch (error) {
            
        }


    }

}

module.exports = CircleController
