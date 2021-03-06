const {model, Schema}= require('mongoose')

const postSchema = new Schema({
    username: String,
    body: String,
    createdAt: String,
    userAvatar: String,
    comments: [
        {
            username: String,
            userAvatar: String,
            body: String,
            createdAt: String
        }
    ],
    likes: [
        {
            username: String,
            createdAt: String
        }
    ],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    }

})

module.exports = model('Post', postSchema)