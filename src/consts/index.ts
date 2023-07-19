const consts = {
    name: 'Gervin Fung Da Xuen',
    title: 'Adonix',
    description: 'Welcome to Adonix!',
    vue: {
        optional: {
            date: Date,
            string: String,
        },
        mandatory: {
            string: { type: String, required: true },
            date: { type: Date, required: true },
        },
    },
} as const;

export default consts;
