const config = {
    name: '',
    apiPort: 5000,
    https: false,
    modules: [
        {
            name: 'test',
            model: {
                title: String,
                link: {type: String},
                stepNumber: {type: Number, default: 0}
            }
        }
    ],
    baseModel: {
        isActive: {type: Boolean, default: true},
        created_date: {type: Date, default: new Date()}
    }
}

module.exports = config
